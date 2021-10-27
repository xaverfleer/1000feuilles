import React from "react";
import { Link, graphql } from "gatsby";
import Helmet from "react-helmet";

import "../assets/styles/style.css";

import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Page() {
  return (
    <Layout>
      <Helmet>
        <title>message envoyé | aux 1000 feuilles</title>
      </Helmet>
      <Section>
        <h2>Merci</h2>
        <p>
          Nous vous remercions pour votre message et nous vous contacterons dès
          que possible.
        </p>
        → Retour à la&nbsp;
        <Link to="/">page d'accueil</Link>
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
