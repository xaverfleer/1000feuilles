import React from "react";
import { Link, graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Header from "../components/Header";
import Menu from "../components/Menu.js";

export default function Page({ data }) {
  const imgs = data.allImgs.nodes;

  const imgFileNames = {
    main: "huge-bread",
    produits: "produits",
    services: "services",
    utiles: "utiles",
  };

  const sharpImgs = Object.keys(imgFileNames).reduce((acc, curr) => {
    const fileName = imgFileNames[curr];
    const sharpImg = imgs.find((i) => i.name === fileName).childImageSharp;
    acc[curr] = sharpImg;
    return acc;
  }, {});

  return (
    <div className={styles.wrapper}>
      <Header mainImage={sharpImgs.main} />
      <main onClick={closeMenu}>
        <section className={styles.section}>
          <h2 className={styles.section__title}>Nos produits</h2>
          <Link to="produits">
            <GatsbyImage alt="Produits" image={getImage(sharpImgs.produits)} />
          </Link>
        </section>
        <section className={styles.section}>
          <h2 className={styles.section__title}>Nos services</h2>
          <GatsbyImage alt="Services" image={getImage(sharpImgs.services)} />
        </section>
        <section className={styles.section}>
          <h2 className={styles.section__title}>Liens utiles</h2>
          <GatsbyImage alt="Liens utiles" image={getImage(sharpImgs.utiles)} />
        </section>
      </main>
      <footer className={styles.footer}>
        <div>Grand'Rue 36, 1530 Payerne</div>
        <a href="tel:+41266602224">026 660 22 24</a>
      </footer>
      <i className={styles.menuBtn} onClick={toggleMenu}>
        Menu
      </i>
      <Menu />
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
