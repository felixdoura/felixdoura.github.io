import React from "react";
import { personal } from "../data/content";
import { useLang } from "../i18n";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t, tr } = useLang();
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.status}>
          <span className={styles.statusDot} />
          {tr(personal.status)}
        </p>
        <h1 className={styles.name}>
          <span className={styles.firstName}>{personal.firstName}</span>
          <span className={styles.lastName}> {personal.lastName}</span>
        </h1>
        <p className={styles.tagline}>
          {tr(personal.tagline)}
          <br />
          <span className={styles.taglineSub}>{tr(personal.taglineSub)}</span>
        </p>
        <div className={styles.roles}>
          {personal.roles.map((r, i) => (
            <span key={i} className={styles.badge}>{tr(r)}</span>
          ))}
          <span className={styles.badge}>{personal.location}</span>
        </div>
        <div className={styles.cta}>
          <button
            className={styles.btnPrimary}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t.hero.viewProjects}
          </button>
          <a
            href={`mailto:${personal.email}`}
            className={styles.btnGhost}
          >
            {t.hero.getInTouch}
          </a>
        </div>
      </div>
      <div className={styles.scanLine} aria-hidden="true" />
    </section>
  );
}
