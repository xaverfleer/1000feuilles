import React from "react";
import * as styles from "./Footer.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a
          href="https://www.facebook.com/Aux1000Feuilles/"
          rel="noopener nofollow"
        >
          <StaticImage
            alt="Facebook - Aux 1000 Feuilles"
            className={styles.social}
            src="../assets/images/facebook.svg"
          />
        </a>
        <a
          href="https://www.instagram.com/aux1000feuilles/"
          rel="noopener nofollow"
        >
          <StaticImage
            alt="Instagram - Aux 1000 Feuilles"
            src="../assets/images/instagram.svg"
            className={styles.social}
          />
        </a>
      </div>
      <address>
        <div>Aux 1000 Feuilles SA</div>
        <div>Grand'Rue 36, 1530 Payerne</div>
        <div>
          tel.{" "}
          <a className="text-link" href="tel:+41266602224">
            026 660 22 24
          </a>
        </div>
      </address>
    </footer>
  );
}
