import React from "react";
import { skills } from "../data/content";
import { useLang } from "../i18n";
import styles from "./Section.module.css";
import s from "./Skills.module.css";

export default function Skills() {
  const { t, tr } = useLang();
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>// 02</p>
        <h2 className={styles.sectionTitle}>{t.sections.skills}</h2>
        <div className={s.grid}>
          {skills.map((group) => (
            <div key={group.name.en ?? group.name} className={s.group}>
              <p className={s.groupName}>{tr(group.name)}</p>
              <div className={s.tags}>
                {group.items.map((item) => (
                  <span key={item} className={s.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
