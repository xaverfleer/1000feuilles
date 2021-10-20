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
    <Layout mainImage={sharpImgs.main}>
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
      </section>
      <section className={styles.section}>
        <h2 className={styles.section__title}>Liens utiles</h2>
        <GatsbyImage alt="Liens utiles" image={getImage(sharpImgs.utiles)} />
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
