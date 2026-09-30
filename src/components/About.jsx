import React from "react";
import { personal } from "../data/content";
import { useLang } from "../i18n";
import styles from "./Section.module.css";
import aboutStyles from "./About.module.css";

export default function About() {
  const { t, tr } = useLang();
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>// 01</p>
        <h2 className={styles.sectionTitle}>{t.sections.about}</h2>
        <div className={aboutStyles.grid}>
          {personal.about.map((item) => (
            <div key={item.label.en} className={aboutStyles.card}>
              <p className={aboutStyles.cardLabel}>{tr(item.label)}</p>
              <p className={aboutStyles.cardValue}>{tr(item.value)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
