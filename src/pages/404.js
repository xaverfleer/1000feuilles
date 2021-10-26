import React from "react";
import { Link, graphql } from "gatsby";
import "../assets/styles/style.css";

import Layout from "../components/Layout";
import Section from "../components/Section";

export default function Page() {
  return (
    <Layout>
      <Section>
        <h2>La page demandée n'existe pas.</h2>→ Retour à la&nbsp;
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
