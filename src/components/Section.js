import React from "react";

import * as styles from "./Section.module.css";

export default function Section({ children }) {
  return <section className={styles.section}>{children}</section>;
}
