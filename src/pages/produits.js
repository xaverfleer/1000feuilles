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
    produits: "produits",
    product00: "croissant",
    product01: "delice",
    product02: "macarons-st-valentin",
    product03: "pain-aux-graines-crusti",
    product04: "sandwich-pain-festival",
    product05: "tourte-mousse-framboise-chocolat-au-lait",
  };

  const sharpImgs = Object.keys(imgFileNames).reduce((acc, curr) => {
    const fileName = imgFileNames[curr];
    const sharpImg = imgs.find((i) => i.name === fileName).childImageSharp;
    acc[curr] = sharpImg;
    return acc;
  }, {});

  return (
    <Layout mainImage={sharpImgs.main}>
      <ButtonBack to="/" label="← Page d'acceuil" />
      <section className={styles.section}>
        <h2 className={styles.section__title}>Nos produits</h2>
        <Link to="/croissant/">
          <div className={styles.products}>
            <GatsbyImage
              alt="Produit"
              className={styles.products__product}
              image={getImage(sharpImgs.product00)}
            />
            <GatsbyImage
              alt="Produit"
              className={styles.products__product}
              image={getImage(sharpImgs.product01)}
            />
            <GatsbyImage
              alt="Produit"
              className={styles.products__product}
              image={getImage(sharpImgs.product02)}
            />
            <GatsbyImage
              alt="Produit"
              className={styles.products__product}
              image={getImage(sharpImgs.product03)}
            />
            <GatsbyImage
              alt="Produit"
              className={styles.products__product}
              image={getImage(sharpImgs.product04)}
            />
            <GatsbyImage
              alt="Produit"
              className={styles.products__product}
              image={getImage(sharpImgs.product05)}
            />
          </div>
        </Link>
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
