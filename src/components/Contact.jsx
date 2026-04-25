import React from "react";
import { personal } from "../data/content";
import styles from "./Section.module.css";
import s from "./Contact.module.css";

const links = [
  { label: "email", href: `mailto:${personal.email}`, text: personal.email },
  { label: "linkedin", href: personal.linkedin, text: "felixdoura" },
  { label: "github", href: personal.github, text: "github.com/felixdoura" },
  { label: "twitter", href: personal.twitter, text: "@felixdoura" },
];

export default function Contact() {
  return (
    <>
      <section id="contact" className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>// 05</p>
          <h2 className={styles.sectionTitle}>Contact</h2>
          <p className={s.intro}>
            Open to fullstack, game development and tech lead opportunities.
            <br />
            Let's talk.
          </p>
          <div className={s.links}>
            {links.map((l) => (
              <a key={l.label} href={l.href} target={l.label !== "email" ? "_blank" : undefined} rel="noreferrer" className={s.link}>
                <span className={s.linkLabel}>{l.label}</span>
                <span className={s.linkText}>{l.text}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <footer className={s.footer}>
        <span className={s.footerText}>felix doura © {new Date().getFullYear()}</span>
        <span className={s.footerText}>built with React · GitHub Pages</span>
      </footer>
    </>
  );
}
