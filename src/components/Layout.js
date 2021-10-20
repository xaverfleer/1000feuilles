import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "../components/Menu";

import * as styles from "./Layout.module.css";

export default function Layout({ children, mainImage }) {
  return (
    <div className={styles.wrapper}>
      <Header mainImage={mainImage} />
      {children}
      <Menu />
      <Footer />
    </div>
  );
}
