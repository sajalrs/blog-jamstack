import React from "react";
import IconButton from "@material-ui/core/IconButton";
import { useRouter } from "next/router";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const NUM_OF_NAV_PAGES = 3;

type Props = {
  pageNumber: number;
  numOfPages: number;
};

const PageNav = ({ pageNumber, numOfPages }: Props) => {
  const router = useRouter();
  let navigablePages = [];
  let start =
    NUM_OF_NAV_PAGES * (Math.ceil(pageNumber / NUM_OF_NAV_PAGES) - 1) + 1;
  let end = Math.min(
    NUM_OF_NAV_PAGES * Math.ceil(pageNumber / NUM_OF_NAV_PAGES),
    numOfPages
  );
  if (pageNumber !== 1) {
    navigablePages.push(
      <IconButton
        onClick={() => {
          router.push(pageNumber === 2 ? `/` : `posts/pages/${pageNumber - 1}`);
        }}
      >
        <NavigateBeforeIcon />
      </IconButton>
    );
  }

  if (start !== 1) {
    navigablePages.push(
      <IconButton
        onClick={() => {
          router.push(`posts/pages/${start - 1}`);
        }}
      >
        {"..."}
      </IconButton>
    );
  }

  for (let i = start; i <= end; i++) {
    if (i === 1) {
      if (pageNumber == 1) {
        navigablePages.push(
          <IconButton
            disabled
            onClick={() => {
              router.push(`/`);
            }}
          >
            1
          </IconButton>
        );
      } else {
        navigablePages.push(
          <IconButton
            onClick={() => {
              router.push(`/`);
            }}
          >
            1
          </IconButton>
        );
      }
    } else if (pageNumber === i) {
      navigablePages.push(
        <IconButton
          disabled
          onClick={() => {
            router.push(`posts/pages/${i}`);
          }}
        >
          {i}
        </IconButton>
      );
    } else {
      navigablePages.push(
        <IconButton
          onClick={() => {
            router.push(`posts/pages/${i}`);
          }}
        >
          {i}
        </IconButton>
      );
    }
  }

  if (end !== numOfPages) {
    navigablePages.push(
      <IconButton
        onClick={() => {
          router.push(`posts/pages/${end + 1}`);
        }}
      >
        {"..."}
      </IconButton>
    );
  }

  if (pageNumber !== numOfPages) {
  
    navigablePages.push(<IconButton
      onClick={() => {
        router.push(`posts/pages/${pageNumber + 1}`);
      }}
    >
      <NavigateNextIcon />
    </IconButton>);
  }

  return <nav>{navigablePages}</nav>;
};

export default PageNav;
