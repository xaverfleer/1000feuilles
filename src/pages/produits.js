import React from "react";
import { graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Page({ data }) {
  const imgs = data.allImgs.nodes;

  const imgFileNames = {
    main: "huge-bread",
    produits: "produits",
  };

  const sharpImgs = Object.keys(imgFileNames).reduce((acc, curr) => {
    const fileName = imgFileNames[curr];
    const sharpImg = imgs.find((i) => i.name === fileName).childImageSharp;
    acc[curr] = sharpImg;
    return acc;
  }, {});

  return (
    <div className={styles.wrapper}>
      <header className={styles.header} onClick={closeMenu}>
        <GatsbyImage alt="Pain délicieux" image={getImage(sharpImgs.main)} />
        <div className={styles.header__text}>
          <h1>Aux 1000 Feuilles</h1>
          <h2>Boulangerie – Patisserie – Confiserie</h2>
        </div>
      </header>
      <main onClick={closeMenu}>
        <section className={styles.section}>
          <h2 className={styles.section__title}>Nos produits</h2>
          <GatsbyImage alt="Produits" image={getImage(sharpImgs.produits)} />
        </section>
      </main>
      <footer className={styles.footer}>
        <div>Grand'Rue 36, 1530 Payerne</div>
        <a href="tel:+41266602224">026 660 22 24</a>
      </footer>
      <i className={styles.menuBtn} onClick={toggleMenu}>
        Menu
      </i>
      <aside className={styles.menu}>
        <div className={styles.menu__entry}>Acceuil</div>
        <div className={styles.menu__entry}>Produits</div>
        <div className={styles.menu__entry}>Services</div>
        <div className={styles.menu__entry}>Adresse</div>
        <div className={styles.menu__entry}>Heures</div>
        <div className={styles.menu__entry}>Produits</div>
        <div className={styles.menu__entry}>Contact</div>
      </aside>
    </div>
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

export const pageQuery = graphql`
  {
    allImgs: allFile(sort: { fields: name }) {
      distinct(field: sourceInstanceName)
      nodes {
        name
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`;
