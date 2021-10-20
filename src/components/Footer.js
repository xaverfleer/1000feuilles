import React from "react";
import * as styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} onClick={closeMenu}>
      <div>Grand'Rue 36, 1530 Payerne</div>
      <a href="tel:+41266602224">026 660 22 24</a>
    </footer>
  );
}

function closeMenu() {
  const html = document.querySelector("html");
  html.removeAttribute("is-menu-open");
}
