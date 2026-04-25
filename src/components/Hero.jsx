import React from "react";
import { personal } from "../data/content";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.content}>
        <p className={styles.status}>
          <span className={styles.statusDot} />
          {personal.status}
        </p>
        <h1 className={styles.name}>
          <span className={styles.firstName}>{personal.name.split(" ")[0]}</span>
          <span className={styles.lastName}> {personal.name.split(" ")[1]}</span>
        </h1>
        <p className={styles.tagline}>
          {personal.tagline}
          <br />
          <span className={styles.taglineSub}>{personal.taglineSub}</span>
        </p>
        <div className={styles.roles}>
          {personal.roles.map((r) => (
            <span key={r} className={styles.badge}>{r}</span>
          ))}
          <span className={styles.badge}>{personal.location}</span>
        </div>
        <div className={styles.cta}>
          <button
            className={styles.btnPrimary}
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View projects
          </button>
          <a
            href={`mailto:${personal.email}`}
            className={styles.btnGhost}
          >
            Get in touch
          </a>
        </div>
      </div>
      <div className={styles.scanLine} aria-hidden="true" />
    </section>
  );
}
