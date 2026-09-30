import React from "react";
import { personal } from "../data/content";
import { useLang } from "../i18n";
import styles from "./Section.module.css";
import s from "./Contact.module.css";

const links = [
  { label: "email", href: `mailto:${personal.email}`, text: personal.email },
  { label: "linkedin", href: personal.linkedin, text: "felixdoura" },
  { label: "github", href: personal.github, text: "github.com/felixdoura" },
];

export default function Contact() {
  const { t } = useLang();
  return (
    <>
      <section id="contact" className={styles.section}>
        <div className={styles.inner}>
          <p className={styles.sectionLabel}>// 05</p>
          <h2 className={styles.sectionTitle}>{t.sections.contact}</h2>
          <p className={s.intro}>
            {t.contact.intro}
            <br />
            {t.contact.cta}
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
        <span className={s.footerText}>{t.contact.builtWith}</span>
      </footer>
    </>
  );
}
