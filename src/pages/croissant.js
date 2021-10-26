import React from "react";
import { Link, graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import ButtonBack from "../components/ButtonBack";

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
    <Layout mainImage={sharpImgs.main}>
      <ButtonBack to="/produits/" label="← Tous les produits" />
      <section className={styles.section}>
        <h1 className={styles.section__title}>Croissant au beurre</h1>
        <GatsbyImage alt="Croissant" image={getImage(sharpImgs.produit)} />
        <h2>A Savoir</h2>
        <p>
          Pour cette recette de viennoiserie, on utilise une farine fleur, on y
          ajoute du lait, du beurre, des œufs et du sucre, cuite dans un four à
          sol en pierre.
        </p>
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
