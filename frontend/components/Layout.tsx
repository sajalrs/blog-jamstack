import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar, { MenuListItem } from "./Navbar";
import Footer from "./Footer";
type Props = {
  children?: ReactNode;
  title?: string;
  menuListItems: MenuListItem[];
};

const Layout = ({ children, title = "This is the default title", menuListItems }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Navbar menuListItems={menuListItems}/>
    </header>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
