webpackHotUpdate_N_E("pages/_app",{

/***/ "./lib/apolloClient.tsx":
/*!******************************!*\
  !*** ./lib/apolloClient.tsx ***!
  \******************************/
/*! exports provided: APOLLO_STATE_PROP_NAME, initializeApollo, addApolloState, useApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"APOLLO_STATE_PROP_NAME\", function() { return APOLLO_STATE_PROP_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeApollo\", function() { return initializeApollo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addApolloState\", function() { return addApolloState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useApollo\", function() { return useApollo; });\n/* harmony import */ var _home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client/utilities */ \"./node_modules/@apollo/client/utilities/index.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! deepmerge */ \"./node_modules/deepmerge/dist/cjs.js\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-link */ \"./node_modules/apollo-link/lib/bundle.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nvar apolloClient;\nvar wordpressEndpoint = 'http://localhost:8080/graphql'; // If we're running on Docker, use the WordPress container hostname instead of localhost.\n\nif (process.env.HOME === '/home/node') {\n  wordpressEndpoint = 'http://wp-headless:8080/graphql';\n}\n\nvar internalAPI = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"createHttpLink\"])({\n  uri: \"\".concat(process.env.NEXT_PUBLIC_DOMAIN, \"/api/graphql\"),\n  credentials: \"same-origin\"\n});\nvar wordPressAPI = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"createHttpLink\"])({\n  // uri: \"http://wp-headless:8080/graphql\",\n  uri: wordpressEndpoint\n});\n\nfunction createApolloClient() {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"ApolloClient\"]({\n    ssrMode: false,\n    // link: new HttpLink({\n    //   uri: `http://wordpress:80/graphql`, // Server URL (must be absolute)\n    //   // credentials: \"same-origin\", // Additional fetch() options like `credentials` or `headers`\n    // }),\n    link: apollo_link__WEBPACK_IMPORTED_MODULE_6__[\"ApolloLink\"].split(function (operation) {\n      return operation.getContext().clientName === \"wordPress\";\n    }, wordPressAPI, internalAPI),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"InMemoryCache\"]({\n      typePolicies: {\n        Query: {\n          fields: {\n            allPosts: Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_3__[\"concatPagination\"])()\n          }\n        }\n      }\n    })\n  });\n}\n\nfunction initializeApollo() {\n  var _apolloClient2;\n\n  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n  var _apolloClient = (_apolloClient2 = apolloClient) !== null && _apolloClient2 !== void 0 ? _apolloClient2 : createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n  // gets hydrated here\n\n\n  if (initialState) {\n    // Get existing cache, loaded during client side data fetching\n    var existingCache = _apolloClient.extract(); // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n\n\n    var data = deepmerge__WEBPACK_IMPORTED_MODULE_4___default()(initialState, existingCache, {\n      // combine arrays using object equality (like in sets)\n      arrayMerge: function arrayMerge(destinationArray, sourceArray) {\n        return [].concat(Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sourceArray), Object(_home_node_app_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(destinationArray.filter(function (d) {\n          return sourceArray.every(function (s) {\n            return !lodash_isEqual__WEBPACK_IMPORTED_MODULE_5___default()(d, s);\n          });\n        })));\n      }\n    }); // Restore the cache with the merged data\n\n    _apolloClient.cache.restore(data);\n  } // For SSG and SSR always create a new Apollo Client\n\n\n  if (false) {} // Create the Apollo Client once in the client\n\n  if (!apolloClient) apolloClient = _apolloClient;\n  return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n  if (pageProps !== null && pageProps !== void 0 && pageProps.props) {\n    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n  }\n\n  return pageProps;\n}\nfunction useApollo(pageProps) {\n  _s();\n\n  var state = pageProps[APOLLO_STATE_PROP_NAME];\n  var store = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useMemo\"])(function () {\n    return initializeApollo(state);\n  }, [state]);\n  return store;\n}\n\n_s(useApollo, \"K8ucUnUnAgJZGJWAL9Ze8IHCmoQ=\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"./node_modules/process/browser.js\"), __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2Fwb2xsb0NsaWVudC50c3g/M2RkYiJdLCJuYW1lcyI6WyJBUE9MTE9fU1RBVEVfUFJPUF9OQU1FIiwiYXBvbGxvQ2xpZW50Iiwid29yZHByZXNzRW5kcG9pbnQiLCJwcm9jZXNzIiwiZW52IiwiSE9NRSIsImludGVybmFsQVBJIiwiY3JlYXRlSHR0cExpbmsiLCJ1cmkiLCJORVhUX1BVQkxJQ19ET01BSU4iLCJjcmVkZW50aWFscyIsIndvcmRQcmVzc0FQSSIsImNyZWF0ZUFwb2xsb0NsaWVudCIsIkFwb2xsb0NsaWVudCIsInNzck1vZGUiLCJsaW5rIiwiQXBvbGxvTGluayIsInNwbGl0Iiwib3BlcmF0aW9uIiwiZ2V0Q29udGV4dCIsImNsaWVudE5hbWUiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsImFsbFBvc3RzIiwiY29uY2F0UGFnaW5hdGlvbiIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwibWVyZ2UiLCJhcnJheU1lcmdlIiwiZGVzdGluYXRpb25BcnJheSIsInNvdXJjZUFycmF5IiwiZmlsdGVyIiwiZCIsImV2ZXJ5IiwicyIsImlzRXF1YWwiLCJyZXN0b3JlIiwiYWRkQXBvbGxvU3RhdGUiLCJjbGllbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsInVzZUFwb2xsbyIsInN0YXRlIiwic3RvcmUiLCJ1c2VNZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsc0JBQXNCLEdBQUcsa0JBQS9CO0FBRVAsSUFBSUMsWUFBSjtBQUNBLElBQUlDLGlCQUFpQixHQUFHLCtCQUF4QixDLENBRUE7O0FBQ0EsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLElBQVosS0FBcUIsWUFBekIsRUFBdUM7QUFDckNILG1CQUFpQixHQUFHLGlDQUFwQjtBQUNEOztBQUVELElBQU1JLFdBQVcsR0FBR0MscUVBQWMsQ0FBQztBQUNqQ0MsS0FBRyxZQUFLTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssa0JBQWpCLGlCQUQ4QjtBQUVqQ0MsYUFBVyxFQUFFO0FBRm9CLENBQUQsQ0FBbEM7QUFLQSxJQUFNQyxZQUFZLEdBQUdKLHFFQUFjLENBQUM7QUFDbEM7QUFDQUMsS0FBRyxFQUFFTjtBQUY2QixDQUFELENBQW5DOztBQUtBLFNBQVNVLGtCQUFULEdBQThCO0FBQzVCLFNBQU8sSUFBSUMsMkRBQUosQ0FBaUI7QUFDdEJDLFdBQU8sT0FEZTtBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBQyxRQUFJLEVBQUVDLHNEQUFVLENBQUNDLEtBQVgsQ0FDRixVQUFDQyxTQUFEO0FBQUEsYUFBcUJBLFNBQVMsQ0FBQ0MsVUFBVixHQUF1QkMsVUFBdkIsS0FBc0MsV0FBM0Q7QUFBQSxLQURFLEVBRUZULFlBRkUsRUFHRkwsV0FIRSxDQU5nQjtBQVd0QmUsU0FBSyxFQUFFLElBQUlDLDREQUFKLENBQWtCO0FBQ3ZCQyxrQkFBWSxFQUFFO0FBQ1pDLGFBQUssRUFBRTtBQUNMQyxnQkFBTSxFQUFFO0FBQ05DLG9CQUFRLEVBQUVDLGlGQUFnQjtBQURwQjtBQURIO0FBREs7QUFEUyxLQUFsQjtBQVhlLEdBQWpCLENBQVA7QUFxQkQ7O0FBRU0sU0FBU0MsZ0JBQVQsR0FBMkQ7QUFBQTs7QUFBQSxNQUFqQ0MsWUFBaUMsdUVBQU4sSUFBTTs7QUFDaEUsTUFBTUMsYUFBYSxxQkFBRzdCLFlBQUgsMkRBQW1CVyxrQkFBa0IsRUFBeEQsQ0FEZ0UsQ0FHaEU7QUFDQTs7O0FBQ0EsTUFBSWlCLFlBQUosRUFBa0I7QUFDaEI7QUFDQSxRQUFNRSxhQUFhLEdBQUdELGFBQWEsQ0FBQ0UsT0FBZCxFQUF0QixDQUZnQixDQUloQjs7O0FBQ0EsUUFBTUMsSUFBSSxHQUFHQyxnREFBSyxDQUFDTCxZQUFELEVBQWVFLGFBQWYsRUFBOEI7QUFDOUM7QUFDQUksZ0JBQVUsRUFBRSxvQkFBQ0MsZ0JBQUQsRUFBbUJDLFdBQW5CO0FBQUEsbUtBQ1BBLFdBRE8sNklBRVBELGdCQUFnQixDQUFDRSxNQUFqQixDQUF3QixVQUFDQyxDQUFEO0FBQUEsaUJBQ3pCRixXQUFXLENBQUNHLEtBQVosQ0FBa0IsVUFBQ0MsQ0FBRDtBQUFBLG1CQUFPLENBQUNDLHFEQUFPLENBQUNILENBQUQsRUFBSUUsQ0FBSixDQUFmO0FBQUEsV0FBbEIsQ0FEeUI7QUFBQSxTQUF4QixDQUZPO0FBQUE7QUFGa0MsS0FBOUIsQ0FBbEIsQ0FMZ0IsQ0FlaEI7O0FBQ0FYLGlCQUFhLENBQUNULEtBQWQsQ0FBb0JzQixPQUFwQixDQUE0QlYsSUFBNUI7QUFDRCxHQXRCK0QsQ0F1QmhFOzs7QUFDQSxhQUFtQyxFQXhCNkIsQ0F5QmhFOztBQUNBLE1BQUksQ0FBQ2hDLFlBQUwsRUFBbUJBLFlBQVksR0FBRzZCLGFBQWY7QUFFbkIsU0FBT0EsYUFBUDtBQUNEO0FBRU0sU0FBU2MsY0FBVCxDQUNMQyxNQURLLEVBRUxDLFNBRkssRUFHTDtBQUNBLE1BQUlBLFNBQUosYUFBSUEsU0FBSixlQUFJQSxTQUFTLENBQUVDLEtBQWYsRUFBc0I7QUFDcEJELGFBQVMsQ0FBQ0MsS0FBVixDQUFnQi9DLHNCQUFoQixJQUEwQzZDLE1BQU0sQ0FBQ3hCLEtBQVAsQ0FBYVcsT0FBYixFQUExQztBQUNEOztBQUVELFNBQU9jLFNBQVA7QUFDRDtBQUVNLFNBQVNFLFNBQVQsQ0FBbUJGLFNBQW5CLEVBQW1DO0FBQUE7O0FBQ3hDLE1BQU1HLEtBQUssR0FBR0gsU0FBUyxDQUFDOUMsc0JBQUQsQ0FBdkI7QUFDQSxNQUFNa0QsS0FBSyxHQUFHQyxxREFBTyxDQUFDO0FBQUEsV0FBTXZCLGdCQUFnQixDQUFDcUIsS0FBRCxDQUF0QjtBQUFBLEdBQUQsRUFBZ0MsQ0FBQ0EsS0FBRCxDQUFoQyxDQUFyQjtBQUNBLFNBQU9DLEtBQVA7QUFDRDs7R0FKZUYsUyIsImZpbGUiOiIuL2xpYi9hcG9sbG9DbGllbnQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXBvbGxvQ2xpZW50LFxuICBJbk1lbW9yeUNhY2hlLFxuICBOb3JtYWxpemVkQ2FjaGVPYmplY3QsXG4gIGNyZWF0ZUh0dHBMaW5rLFxuICBIdHRwTGlua1xufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGNvbmNhdFBhZ2luYXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnQvdXRpbGl0aWVzXCI7XG5pbXBvcnQgbWVyZ2UgZnJvbSBcImRlZXBtZXJnZVwiO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSBcImxvZGFzaC9pc0VxdWFsXCI7XG5pbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSBcImFwb2xsby1saW5rXCI7XG5cbmV4cG9ydCBjb25zdCBBUE9MTE9fU1RBVEVfUFJPUF9OQU1FID0gXCJfX0FQT0xMT19TVEFURV9fXCI7XG5cbmxldCBhcG9sbG9DbGllbnQ6IEFwb2xsb0NsaWVudDxOb3JtYWxpemVkQ2FjaGVPYmplY3Q+O1xubGV0IHdvcmRwcmVzc0VuZHBvaW50ID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9ncmFwaHFsJztcblxuLy8gSWYgd2UncmUgcnVubmluZyBvbiBEb2NrZXIsIHVzZSB0aGUgV29yZFByZXNzIGNvbnRhaW5lciBob3N0bmFtZSBpbnN0ZWFkIG9mIGxvY2FsaG9zdC5cbmlmIChwcm9jZXNzLmVudi5IT01FID09PSAnL2hvbWUvbm9kZScpIHtcbiAgd29yZHByZXNzRW5kcG9pbnQgPSAnaHR0cDovL3dwLWhlYWRsZXNzOjgwODAvZ3JhcGhxbCc7XG59XG5cbmNvbnN0IGludGVybmFsQVBJID0gY3JlYXRlSHR0cExpbmsoe1xuICB1cmk6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RPTUFJTn0vYXBpL2dyYXBocWxgLFxuICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxufSkgYXMgYW55O1xuXG5jb25zdCB3b3JkUHJlc3NBUEkgPSBjcmVhdGVIdHRwTGluayh7XG4gIC8vIHVyaTogXCJodHRwOi8vd3AtaGVhZGxlc3M6ODA4MC9ncmFwaHFsXCIsXG4gIHVyaTogd29yZHByZXNzRW5kcG9pbnQsXG59KSBhcyBhbnk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudCgpIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIHNzck1vZGU6IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIsXG4gICAgLy8gbGluazogbmV3IEh0dHBMaW5rKHtcbiAgICAvLyAgIHVyaTogYGh0dHA6Ly93b3JkcHJlc3M6ODAvZ3JhcGhxbGAsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXG4gICAgLy8gICAvLyBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXG4gICAgLy8gfSksXG4gICAgbGluazogQXBvbGxvTGluay5zcGxpdChcbiAgICAgICAgKG9wZXJhdGlvbiA6IGFueSkgPT4gb3BlcmF0aW9uLmdldENvbnRleHQoKS5jbGllbnROYW1lID09PSBcIndvcmRQcmVzc1wiLFxuICAgICAgICB3b3JkUHJlc3NBUEksXG4gICAgICAgIGludGVybmFsQVBJXG4gICAgKSBhcyBhbnksXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICAgIHR5cGVQb2xpY2llczoge1xuICAgICAgICBRdWVyeToge1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgYWxsUG9zdHM6IGNvbmNhdFBhZ2luYXRpb24oKSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQXBvbGxvKGluaXRpYWxTdGF0ZTogYW55IHwgbnVsbCA9IG51bGwpIHtcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoKTtcblxuICAvLyBJZiB5b3VyIHBhZ2UgaGFzIE5leHQuanMgZGF0YSBmZXRjaGluZyBtZXRob2RzIHRoYXQgdXNlIEFwb2xsbyBDbGllbnQsIHRoZSBpbml0aWFsIHN0YXRlXG4gIC8vIGdldHMgaHlkcmF0ZWQgaGVyZVxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XG4gICAgLy8gR2V0IGV4aXN0aW5nIGNhY2hlLCBsb2FkZWQgZHVyaW5nIGNsaWVudCBzaWRlIGRhdGEgZmV0Y2hpbmdcbiAgICBjb25zdCBleGlzdGluZ0NhY2hlID0gX2Fwb2xsb0NsaWVudC5leHRyYWN0KCk7XG5cbiAgICAvLyBNZXJnZSB0aGUgZXhpc3RpbmcgY2FjaGUgaW50byBkYXRhIHBhc3NlZCBmcm9tIGdldFN0YXRpY1Byb3BzL2dldFNlcnZlclNpZGVQcm9wc1xuICAgIGNvbnN0IGRhdGEgPSBtZXJnZShpbml0aWFsU3RhdGUsIGV4aXN0aW5nQ2FjaGUsIHtcbiAgICAgIC8vIGNvbWJpbmUgYXJyYXlzIHVzaW5nIG9iamVjdCBlcXVhbGl0eSAobGlrZSBpbiBzZXRzKVxuICAgICAgYXJyYXlNZXJnZTogKGRlc3RpbmF0aW9uQXJyYXksIHNvdXJjZUFycmF5KSA9PiBbXG4gICAgICAgIC4uLnNvdXJjZUFycmF5LFxuICAgICAgICAuLi5kZXN0aW5hdGlvbkFycmF5LmZpbHRlcigoZCkgPT5cbiAgICAgICAgICBzb3VyY2VBcnJheS5ldmVyeSgocykgPT4gIWlzRXF1YWwoZCwgcykpXG4gICAgICAgICksXG4gICAgICBdLFxuICAgIH0pO1xuXG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcbiAgICBfYXBvbGxvQ2xpZW50LmNhY2hlLnJlc3RvcmUoZGF0YSk7XG4gIH1cbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG4gIC8vIENyZWF0ZSB0aGUgQXBvbGxvIENsaWVudCBvbmNlIGluIHRoZSBjbGllbnRcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XG5cbiAgcmV0dXJuIF9hcG9sbG9DbGllbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRBcG9sbG9TdGF0ZShcbiAgY2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PixcbiAgcGFnZVByb3BzOiBhbnlcbikge1xuICBpZiAocGFnZVByb3BzPy5wcm9wcykge1xuICAgIHBhZ2VQcm9wcy5wcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXSA9IGNsaWVudC5jYWNoZS5leHRyYWN0KCk7XG4gIH1cblxuICByZXR1cm4gcGFnZVByb3BzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKHBhZ2VQcm9wczogYW55KSB7XG4gIGNvbnN0IHN0YXRlID0gcGFnZVByb3BzW0FQT0xMT19TVEFURV9QUk9QX05BTUVdO1xuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oKCkgPT4gaW5pdGlhbGl6ZUFwb2xsbyhzdGF0ZSksIFtzdGF0ZV0pO1xuICByZXR1cm4gc3RvcmU7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apolloClient.tsx\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayLikeToArray; });\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanM/ZTg1NCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithoutHoles; });\n/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzPzA1MTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQTJFO0FBQzVEO0FBQ2YsaUNBQWlDLDJGQUFnQjtBQUNqRCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArray; });\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcz9mMmQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableSpread; });\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzPzBhM2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVNwcmVhZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toConsumableArray; });\n/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\");\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzP2NmYmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTZFO0FBQ0o7QUFDc0I7QUFDbEI7QUFDOUQ7QUFDZixTQUFTLDRGQUFpQixTQUFTLDBGQUFlLFNBQVMscUdBQTBCLFNBQVMsNEZBQWlCO0FBQy9HIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\n");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _unsupportedIterableToArray; });\n/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\");\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o, minLen);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzP2YyYjEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQTJFO0FBQzVEO0FBQ2Y7QUFDQSxvQ0FBb0MsMkZBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRiwyRkFBZ0I7QUFDdEciLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\n");

/***/ })

})