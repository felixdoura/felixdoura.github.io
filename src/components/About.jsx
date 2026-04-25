import React from "react";
import { personal } from "../data/content";
import styles from "./Section.module.css";
import aboutStyles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>// 01</p>
        <h2 className={styles.sectionTitle}>About</h2>
        <div className={aboutStyles.grid}>
          {personal.about.map((item) => (
            <div key={item.label} className={aboutStyles.card}>
              <p className={aboutStyles.cardLabel}>{item.label}</p>
              <p className={aboutStyles.cardValue}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
