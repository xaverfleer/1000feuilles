import React from "react";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import img from "../assets/images/huge-bread.jpg";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img
          alt="Pain de la boulangerie Aux 1000 Feuilles"
          className={styles.img}
          src={img}
        />
        <div className={styles.headerText}>
          <h1>Aux 1000 Feuilles</h1>
          <h2>Boulangerie – Patisserie – Confiserie</h2>
        </div>
      </header>
      <footer>
        <div>Grand'Rue 36, 1530 Payerne</div>
        <a href="tel:+41266602224">026 660 22 24</a>
      </footer>
    </div>
  );
}
