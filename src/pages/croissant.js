import React from "react";
import { graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Header from "../components/Header";
import Menu from "../components/Menu.js";

export default function Page({ data }) {
  const imgs = data.allImgs.nodes;

  const imgFileNames = {
    main: "huge-bread",
    produit: "croissant",
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
          <h1 className={styles.section__title}>Croissant au beurre</h1>
          <GatsbyImage alt="Croissant" image={getImage(sharpImgs.produit)} />
          <h2>A Savoir</h2>
          <p>
            Pour cette recette de viennoiserie, on utilise une farine fleur, on
            y ajoute du lait, du beurre, des œufs et du sucre, cuite dans un
            four à sol en pierre.
          </p>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>Grand'Rue 36, 1530 Payerne</div>
        <a href="tel:+41266602224">026 660 22 24</a>
      </footer>
      <Menu />
    </div>
  );

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
