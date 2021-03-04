import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CopyrightIcon from "@material-ui/icons/Copyright";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import { useRouter } from "next/router";
import {MenuListItem} from "../../components/Navbar"


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
      display: "flex",
      // alignItems: "center",
      color: theme.palette.primary.dark,
      justifyContent: "center",
      backgroundColor: theme.palette.primary.light,
      padding: theme.spacing(4),
    },
    bottomFooter: {
      display: "flex",
      color: "white",
      // alignItems: "center",
      justifyContent: "center",

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
        pageURL: "/",
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
        pageURL: "/",
      },
      {
        title: "LinkedIn",
        pageURL: "/",
      },
      {
        title: "Facebook",
        pageURL: "/",
      },

      {
        title: "Twitter",
        pageURL: "/",
      },
    ],
  },
  {
    title: "Legal",
    array: [
      {
        title: "Privacy",
        pageURL: "/",
      },
      {
        title: "Terms of Service",
        pageURL: "/",
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


const Footer = ({menuListItems}: Props) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.topFooter}>
        {FooterLinks.map((item, index) => {
          const { title, array } = item;
          return (
            <Grid key={index} item xs={6} sm={4} className={classes.columns}>
              <Typography variant="h4" className={classes.columnHeader}>
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
            </Grid>
          );
        })}
      </Grid>
      <Grid container spacing={3} className={classes.bottomFooter}>
        <Grid item xs={12} sm={3}>
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
        </Grid>

        <Grid item xs={12} sm={3}>
          <div className={classes.footerRows}>
            {menuListItems.map((item, index) => {
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
        </Grid>
        <Grid item xs={12} sm={3}>
          <div className={classes.footerRows}>
            <IconButton
              className={`${classes.miniFooterItems} ${classes.bottomFooterIconLinks}`}
            >
              <CopyrightIcon />
            </IconButton>
            <IconButton
              className={`${classes.miniFooterItems} ${classes.bottomFooterIconLinks}`}
            >
              <CopyrightIcon />
            </IconButton>
            <IconButton
              className={`${classes.miniFooterItems} ${classes.bottomFooterIconLinks}`}
            >
              <CopyrightIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
