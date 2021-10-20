import React from "react";
import { Link, graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

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
    <Layout mainImage={sharpImgs.main}>
      <main onClick={closeMenu}>
        <section className={styles.section}>
          <h2 className={styles.section__title}>Nos produits</h2>
          <Link to="/croissant/">
            <GatsbyImage alt="Produits" image={getImage(sharpImgs.produits)} />
          </Link>
        </section>
      </main>
    </Layout>
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
