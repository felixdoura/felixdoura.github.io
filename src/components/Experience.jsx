import React from "react";
import { experience, certifications } from "../data/content";
import { useLang } from "../i18n";
import styles from "./Section.module.css";
import s from "./Experience.module.css";

export default function Experience() {
  const { t, tr } = useLang();
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>// 04</p>
        <h2 className={styles.sectionTitle}>{t.sections.experience}</h2>
        <div className={s.timeline}>
          {experience.map((item, i) => (
            <div key={i} className={s.item}>
              <div className={s.dot} />
              <div className={s.content}>
                <p className={s.period}>{tr(item.period)}</p>
                <h3 className={s.role}>{tr(item.role)}</h3>
                <p className={s.company}>{tr(item.company)} · <span className={s.org}>{tr(item.org)}</span></p>
                <ul className={s.bullets}>
                  {item.bullets.map((b, j) => (
                    <li key={j} className={s.desc}>{tr(b)}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h3 className={s.certTitle}>{t.experience.certifications}</h3>
        <ul className={s.certList}>
          {certifications.map((c, i) => (
            <li key={i} className={s.cert}>
              <span className={s.certName}>{tr(c.name)}</span>
              <span className={s.certIssuer}>
                {c.issuer}
                {c.year && ` · ${c.year}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
