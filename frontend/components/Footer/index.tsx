import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { useRouter } from "next/router";
import { MenuListItem } from "../../components/Navbar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    columnHeader: {
      color: "black",
    },
    footerRows: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    columns: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    miniFooterItems: {
      color: "white",
      padding: theme.spacing(1),
    },
    topFooter: {
      // display: "flex",
      // alignItems: "center",
      color: theme.palette.primary.dark,
      // justifyContent: "center",
      backgroundColor: theme.palette.primary.light,
      // padding: theme.spacing(4),
    },
    bottomFooter: {
      // display: "flex",
      color: "white",
      // alignItems: "center",
      // justifyContent: "center",

      backgroundColor: theme.palette.primary.dark,
    },
    bottomFooterLinks: {
      "&:hover": {
        color: "#c1c1c1",
        textDecoration: "underline",
      },
    },
    bottomFooterIconLinks: {
      "&:hover": {
        color: "#c1c1c1",
      },
    },
    topFooterLinks: {
      "&:hover": {
        color: "white",
      },
    },
    nepaliText: {
      fontFamily: "Kalam",
    },
  })
);

const FooterLinks = [
  {
    title: "About",
    array: [
      {
        title: "About Me",
        pageURL: "/about",
      },
      {
        title: "Contact Me",
        pageURL: "/",
      },
    ],
  },
  {
    title: "Social",
    array: [
      {
        title: "GitHub",
        pageURL: "https://github.com/sajalrs",
      },
      {
        title: "LinkedIn",
        pageURL: "https://www.linkedin.com/in/sajal-satyal-8470b0182/",
      },
      {
        title: "Facebook",
        pageURL: "https://www.facebook.com/sajal.raj.satyal/",
      },

      {
        title: "Twitter",
        pageURL: "https://twitter.com/SajalSatyal",
      },
    ],
  },
  {
    title: "Legal",
    array: [
      {
        title: "Privacy",
        pageURL: "/privacy",
      },
      {
        title: "Terms of Service",
        pageURL: "/terms-of-service",
      },
    ],
  },
];

// const MenuListItems = [
//   {
//     title: "Home",
//     pageURL: "/",
//   },
//   {
//     title: "About",
//     pageURL: "/",
//   },
//   {
//     title: "Blog",
//     pageURL: "/",
//   },
// ];

type Props = {
  menuListItems: MenuListItem[];
};

const Footer = ({ menuListItems }: Props) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <div
        className={`${classes.topFooter} grid items-center justify-center grid-cols-1 md:grid-cols-3 p-4`}
      >
        {FooterLinks.map((item) => {
          const { title, array } = item;
          return (
            <div className={`${classes.columns}`}>
              <Typography variant="h4" className={`${classes.columnHeader}`}>
                {title}
              </Typography>
              {array.map((item, index) => {
                const { title, pageURL } = item;
                return (
                  <Typography
                    key={index}
                    variant="h6"
                    onClick={() => {
                      router.push(pageURL);
                    }}
                    className={classes.topFooterLinks}
                  >
                    {title}
                  </Typography>
                );
              })}
            </div>
          );
        })}
      </div>
      <div
        className={`${classes.bottomFooter} grid items-center justify-center grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1`}
      >
        <div className={classes.footerRows}>
          <Tooltip title="Sajal Satyal" placement="top">
            <Typography
              variant="h6"
              className={`${classes.miniFooterItems} ${classes.nepaliText}`}
            >
              सजल सत्याल
            </Typography>
          </Tooltip>
          <CopyrightIcon />
          <Typography variant="subtitle1" className={classes.miniFooterItems}>
            Copyright
          </Typography>
        </div>
        <div className={classes.footerRows}>
          {menuListItems &&
            menuListItems.map((item, index) => {
              const { title, pageURL } = item;
              return (
                <Typography
                  key={index}
                  variant="subtitle1"
                  onClick={() => {
                    router.push(pageURL);
                  }}
                  className={`${classes.miniFooterItems} ${classes.bottomFooterLinks}`}
                >
                  {title}
                </Typography>
              );
            })}
        </div>
        <div className={classes.footerRows}>
          <IconButton
            className={`${classes.miniFooterItems} ${classes.bottomFooterIconLinks}`}
            onClick={() => {
              router.push("https://www.facebook.com/sajal.raj.satyal/");
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            className={`${classes.miniFooterItems} ${classes.bottomFooterIconLinks}`}
            onClick={() => {
              router.push("https://twitter.com/SajalSatyal");
            }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            className={`${classes.miniFooterItems} ${classes.bottomFooterIconLinks}`}
            onClick={() => {
              router.push("https://github.com/sajalrs");
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            className={`${classes.miniFooterItems} ${classes.bottomFooterIconLinks}`}
            onClick={() => {
              router.push(
                "https://www.linkedin.com/in/sajal-satyal-8470b0182/"
              );
            }}
          >
            <LinkedInIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
