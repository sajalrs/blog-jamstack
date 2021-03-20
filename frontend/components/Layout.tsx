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
  <div className="min-h-screen flex flex-col justify-between">
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
      <Footer menuListItems={menuListItems}/>
    </footer>
  </div>
);

export default Layout;
