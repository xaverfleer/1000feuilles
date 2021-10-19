import React from "react";
import { graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import img from "../assets/images/huge-bread.jpg";

export default function Page({ data }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <GatsbyImage
          alt="Pain de la boulangerie Aux 1000 Feuilles"
          image={getImage(data.file.mainImg)}
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

export const pageQuery = graphql`
  {
    file(relativePath: { eq: "huge-bread.jpg" }) {
      mainImg: childImageSharp {
        gatsbyImageData(placeholder: BLURRED, width: 350)
      }
    }
  }
`;
