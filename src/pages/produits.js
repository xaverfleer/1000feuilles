import React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";

import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ButtonBack from "../components/ButtonBack";
import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Page({ data }) {
  const imgs = data.allImgs.nodes;

  const imgFileNames = {
    marcheBroyard: "marche-broyard",
    product00: "croissant",
    product01: "delice",
    product02: "macarons-st-valentin",
    product03: "sandwich-pain-festival",
    product04: "tourte-mousse-framboise-chocolat-au-lait",
    tourte00: "tourte-mille-feuilles",
    tourte01: "tourte-mousse-framboise-chocolat-au-lait",
    tourte02: "tourte-st-honoré",
    tourte03: "tourte-mousse",
    tourte04: "meringue-citron",
    pain00: "pain-aux-graines-crusti",
    pain01: "pain-balance",
    pain02: "pain-le-naturel",
    pain03: "pain-mi-blanc",
    pain04: "pain-tessinois",
    pain05: "pain-tradilin",
    pain06: "tresse",
  };

  const sharpImgs = Object.keys(imgFileNames).reduce((acc, curr) => {
    const fileName = imgFileNames[curr];
    const sharpImg = imgs.find((i) => i.name === fileName).childImageSharp;
    acc[curr] = sharpImg;
    return acc;
  }, {});

  return (
    <Layout>
      <Helmet>
        <title>Produits | Aux 1000 Feuilles</title>
      </Helmet>
      <ButtonBack to="/" label="← Page d'acceuil" />
      <Section>
        <h2>Nos produits</h2>
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
          </div>
        </Link>
      </Section>
      <Section>
        <h2>Nos tourtes</h2>
        <div className={styles.products}>
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.tourte00)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.tourte01)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.tourte02)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.tourte03)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.tourte04)}
          />
        </div>
      </Section>
      <Section>
        <h2>Nos pains</h2>
        <div className={styles.products}>
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.pain00)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.pain01)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.pain02)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.pain03)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.pain04)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.pain05)}
          />
          <GatsbyImage
            alt="Produit"
            className={styles.products__product}
            image={getImage(sharpImgs.pain06)}
          />
        </div>
      </Section>
      <Section>
        <h2>Marché en ligne</h2>
        <p>
          Trouovez nos articles en ligne au sur le{" "}
          <a
            className="text-link"
            href="https://marche-broyard.ch/"
            alt="Marché Broyard"
          >
            Marché Broyard
          </a>
          .
        </p>
        <a href="https://marche-broyard.ch" alt="Marché Broyard">
          <GatsbyImage image={getImage(sharpImgs.marcheBroyard)} />
        </a>
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
