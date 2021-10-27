import React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";

import "../assets/styles/style.css";
import * as styles from "../assets/styles/index.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import ContactForm from "../components/ContactForm";
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
      <Helmet>
        <title>Aux 1000 Feuilles</title>
        <meta
          name="description"
          content="Boulangerie - Patisserie - Confiserie – Payerne"
        />
      </Helmet>
      <Section>
        <h2>Nos produits</h2>
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
        <h2>Nos services</h2>
        <GatsbyImage alt="Services" image={getImage(sharpImgs.services)} />
      </Section>
      <Section>
        <h2>Horaire</h2>
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
        <h2>Nous trouver</h2>
        <address className={styles.address}>
          <div>Aux 1000 Feuilles SA</div>
          <div>Grand'Rue 36, 1530 Payerne</div>
          <div>
            tel. <a href="tel:+41266602224">026 660 22 24</a>
          </div>
        </address>
        <iframe
          className={styles.googleMap}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.151053208753!2d6.93722054869384!3d46.82102647249106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e76e928305853%3A0xcbdaa328750307f4!2sAux%201000%20Feuilles%20SA!5e0!3m2!1sfr!2sch!4v1572257894116!5m2!1sfr!2sch"
          allowFullScreen=""
          width="600"
          height="450"
          frameBorder="0"
        ></iframe>
      </Section>
      <Section>
        <h2>Liens utiles</h2>
        <GatsbyImage alt="Liens utiles" image={getImage(sharpImgs.utiles)} />
      </Section>
      <Section>
        <h2>Contactez nous</h2>
        <ContactForm />
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
