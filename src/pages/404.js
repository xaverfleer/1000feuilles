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
        <title>Page introuvable | Aux 1000 feuilles</title>
      </Helmet>
      <Section>
        <h2>La page demandée n'existe&nbsp;pas.</h2>→ Retour à la&nbsp;
        <Link className="text-link" to="/">
          page d'accueil
        </Link>
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
