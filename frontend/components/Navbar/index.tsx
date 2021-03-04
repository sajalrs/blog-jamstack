import React, {
  useState,
  useRef,
  useEffect,
  MouseEvent,
  KeyboardEvent,
} from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuList from "@material-ui/core/MenuList";
import Tooltip from "@material-ui/core/Tooltip";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";

export const MENU_QUERY = gql`
  query MenuQuery {
    headerMenu {
      url
      label
      type
    }
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    "menu-item": {
      width: "100vw",
    },
    title: {
      width: "min-content",
      height: "min-content",
      display: "inline",
      fontFamily: "Kalam",
    },
    "title-container": {
      flexGrow: 1,
    },
    "header-options": {
      display: "flex",
    },
    "menu-button": {
      marginRight: theme.spacing(1),
    },

    "header-options-button": {
      margin: theme.spacing(1),
      fontSize: "1rem",
      color: "#fff",
      "&:hover": {
        color: "#fff",
        backgroundColor: theme.palette.primary.dark,
      },
    },
    "menu-list-grow": {
      left: 0,
    },
  })
);

export type MenuListItem = {
  title: string;
  pageURL: string;
};

type Props = {
  menuListItems: MenuListItem[];
};

const Navbar = ({menuListItems}: Props) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isMobile) {
      setOpen(false);
    }
  }, [isMobile]);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <AppBar position="static" ref={anchorRef}>
        <Toolbar>
          <div className={classes["title-container"]}>
            <Tooltip title="Sajal Satyal">
              <Typography variant="h5" className={classes.title}>
                सजल सत्याल
              </Typography>
            </Tooltip>
          </div>
          {isMobile ? (
            <div>
              <IconButton
                onClick={handleToggle}
                color="inherit"
                className={classes["menu-button"]}
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "right top" : "left bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          {menuListItems.map((item, index) => {
                            const { title, pageURL } = item;
                            return (
                              <MenuItem
                                key={index}
                                className={classes["menu-item"]}
                                onClick={() => router.push(pageURL)}
                              >
                                {`${title} `}
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          ) : (
            <div className={classes["header-options"]}>
              {menuListItems.map((item, index) => {
                const { title, pageURL } = item;
                return (
                  <Button
                    key={index}
                    className={classes["header-options-button"]}
                    onClick={() => router.push(pageURL)}
                  >
                    {`${title} `}
                  </Button>
                );
              })}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
