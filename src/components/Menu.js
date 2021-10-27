import React from "react";

import { Link } from "gatsby";
import * as styles from "./Menu.module.css";

export default function Menu() {
  return (
    <>
      <aside className={`menu ${styles.menu}`}>
        <Link
          className={styles.menu__entry}
          to="/"
          onClick={closeMenu}
          onKeyDown={handleEnterKey}
        >
          Acceuil
        </Link>
        <Link
          className={styles.menu__entry}
          to="/produits/"
          onClick={closeMenu}
          onKeyDown={handleEnterKey}
        >
          Produits
        </Link>
        <div className={styles.menu__entry}>Services</div>
        <div className={styles.menu__entry}>Adresse</div>
        <div className={styles.menu__entry}>Heures</div>
        <div className={styles.menu__entry}>Produits</div>
        <div className={styles.menu__entry}>Contact</div>
      </aside>
      <i className={`menu-btn ${styles.menuBtn}`} onClick={toggleMenu}>
        Menu
      </i>
    </>
  );

  function handleEnterKey(keyboardEvent) {
    keyboardEvent.key === "Enter" && keyboardEvent.target.click();
  }

  function toggleMenu() {
    const html = document.querySelector("html");
    const isMenuOpen = html.getAttribute("is-menu-open");
    isMenuOpen
      ? html.removeAttribute("is-menu-open")
      : html.setAttribute("is-menu-open", true);
  }

  function closeMenu() {
    const html = document.querySelector("html");
    html.removeAttribute("is-menu-open");
  }
}
