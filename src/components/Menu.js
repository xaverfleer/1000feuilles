import React from "react";

import { Link } from "gatsby";
import * as styles from "./Menu.module.css";

export default function Menu() {
  return (
    <>
      <aside className={styles.menu}>
        <Link className={styles.menu__entry} to="/">
          Acceuil
        </Link>
        <Link className={styles.menu__entry} to="/produits/">
          Produits
        </Link>
        <div className={styles.menu__entry}>Services</div>
        <div className={styles.menu__entry}>Adresse</div>
        <div className={styles.menu__entry}>Heures</div>
        <div className={styles.menu__entry}>Produits</div>
        <div className={styles.menu__entry}>Contact</div>
      </aside>
      <i className={styles.menuBtn} onClick={toggleMenu}>
        Menu
      </i>
    </>
  );

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
