import React from "react";
import { Link, graphql } from "gatsby";
import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Page({ data }) {
  const imgs = data.allImgs.nodes;

  const imgFileNames = {
    services: "services",
    utiles: "utiles",
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
    <Layout>
      <Section>
        <h2 className={styles.section__title}>Nos produits</h2>
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
        </div>
        <Link className={`button ${styles.button}`} to="/produits/">
          Plus de produits
        </Link>
      </Section>
      <Section>
        <h2 className={styles.section__title}>Nos services</h2>
        <GatsbyImage alt="Services" image={getImage(sharpImgs.services)} />
      </Section>
      <Section>
        <h2 className={styles.section__title}>Horaire</h2>
        <table className={styles.opening}>
          <tbody>
            <tr>
              <td className={styles.opening__day}>Lundi – Vendredi</td>
              <td className={styles.opening__timeStart}>6:00</td>
              <td>–</td>
              <td className={styles.opening__timeEnd}>18:30</td>
            </tr>
            <tr>
              <td className={styles.opening__day}>Samedi</td>
              <td className={styles.opening__timeStart}>6:30</td>
              <td>–</td>
              <td className={styles.opening__timeEnd}>17:00</td>
            </tr>
            <tr>
              <td className={styles.opening__day}>Dimanche</td>
              <td className={styles.opening__timeStart}>7:00</td>
              <td>–</td>
              <td className={styles.opening__timeEnd}>17:00</td>
            </tr>
          </tbody>
        </table>
      </Section>
      <Section>
        <h2 className={styles.section__title}>Liens utiles</h2>
        <GatsbyImage alt="Liens utiles" image={getImage(sharpImgs.utiles)} />
      </Section>
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
