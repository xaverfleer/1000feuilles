import React from "react";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, StaticQuery, graphql } from "gatsby";

import * as styles from "./Header.module.css";

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
        {
          file(name: { eq: "huge-bread" }) {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      `}
      render={(data) => (
        <header className={styles.header}>
          <Link to="/">
            <GatsbyImage
              alt="Pain délicieux"
              image={getImage(data.file.childImageSharp.gatsbyImageData)}
            />
          </Link>
          <div className={styles.header__text}>
            <h1>Aux 1000 Feuilles</h1>
            <div className={styles.header__subtitle}>
              Boulangerie – Patisserie – Confiserie
            </div>
          </div>
        </header>
      )}
    />
  );
}
