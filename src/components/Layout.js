import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "../components/Menu";

import * as styles from "./Layout.module.css";

export default function Layout({ children, mainImage }) {
  const html = document?.querySelector("html");
  html &&
    html.addEventListener("click", (event) => {
      const isMenuOpen = html.getAttribute("is-menu-open");
      const clickedInsideMenu = event.target.closest(".menu");
      const clickedMenuBtn = event.target.closest(".menu-btn");
      if (isMenuOpen && !(clickedInsideMenu || clickedMenuBtn)) closeMenu();
    });

  return (
    <div className={styles.wrapper}>
      <Header mainImage={mainImage} />
      <main>{children}</main>
      <Menu />
      <Footer />
    </div>
  );
}

function closeMenu() {
  const html = document.querySelector("html");

  html.removeAttribute("is-menu-open");
}
