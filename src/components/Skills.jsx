import React from "react";
import { skills } from "../data/content";
import styles from "./Section.module.css";
import s from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>// 02</p>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={s.grid}>
          {skills.map((group) => (
            <div key={group.name} className={s.group}>
              <p className={s.groupName}>{group.name}</p>
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
