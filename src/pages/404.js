import React from "react";
import { Link, graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import Layout from "../components/Layout";

export default function Page({ data }) {
  const imgs = data.allImgs.nodes;

  const imgFileNames = {
    main: "huge-bread",
  };

  const sharpImgs = Object.keys(imgFileNames).reduce((acc, curr) => {
    const fileName = imgFileNames[curr];
    const sharpImg = imgs.find((i) => i.name === fileName).childImageSharp;
    acc[curr] = sharpImg;
    return acc;
  }, {});

  return (
    <Layout mainImage={sharpImgs.main}>
      <section className={styles.section}>
        <h2 className={styles.section__title}>
          La page demandée n'existe pas.
        </h2>
        → Retour à la&nbsp;
        <Link to="/">page d'accueil</Link>
      </section>
    </Layout>
  );
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
