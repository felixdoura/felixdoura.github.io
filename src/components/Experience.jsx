import React from "react";
import { experience } from "../data/content";
import styles from "./Section.module.css";
import s from "./Experience.module.css";

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>// 04</p>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={s.timeline}>
          {experience.map((item, i) => (
            <div key={i} className={s.item}>
              <div className={s.dot} />
              <div className={s.content}>
                <p className={s.period}>{item.period}</p>
                <h3 className={s.role}>{item.role}</h3>
                <p className={s.company}>{item.company} · <span className={s.org}>{item.org}</span></p>
                <p className={s.desc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
