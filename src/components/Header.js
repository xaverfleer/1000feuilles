import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import * as styles from "./Header.module.css";

export default function Menu({ mainImage }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <GatsbyImage alt="Pain délicieux" image={getImage(mainImage)} />
      </Link>
      <div className={styles.header__text}>
        <h1>Aux 1000 Feuilles</h1>
        <h2 className={styles.header__subtitle}>
          Boulangerie – Patisserie – Confiserie
        </h2>
      </div>
    </header>
  );
}
