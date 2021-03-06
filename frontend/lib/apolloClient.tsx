import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
  HttpLink
} from "@apollo/client";
import { concatPagination } from "@apollo/client/utilities";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";
import { ApolloLink } from "apollo-link";

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject>;
let wordpressEndpoint = 'http://localhost:8080/graphql';

// // If we're running on Docker, use the WordPress container hostname instead of localhost.
// if (process.env.HOME === '/home/node') {
//   wordpressEndpoint = 'http://wp-headless:8080/graphql';
// }

const internalAPI = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_DOMAIN}/api/graphql`,
  credentials: "same-origin",
}) as any;

const wordPressAPI = createHttpLink({
  // uri: "http://wp-headless:8080/graphql",
  uri: wordpressEndpoint,
}) as any;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // link: new HttpLink({
    //   uri: `http://wordpress:80/graphql`, // Server URL (must be absolute)
    //   // credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
    // }),
    link: ApolloLink.split(
        (operation : any) => operation.getContext().clientName === "wordPress",
        wordPressAPI,
        internalAPI
    ) as any,
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            allPosts: concatPagination(),
          },
        },
      },
    }),
  });
}

export function initializeApollo(initialState: any | null = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: any) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
