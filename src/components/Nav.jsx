import React, { useState, useEffect } from "react";
import { personal } from "../data/content";
import { useLang, LANGS } from "../i18n";
import styles from "./Nav.module.css";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className={styles.logoText}>{personal.handle}</span>
        <span className={styles.cursor} />
      </div>
      <div className={styles.right}>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l}>
              <button onClick={() => scrollTo(l)} className={styles.link}>
                {t.nav[l]}
              </button>
            </li>
          ))}
        </ul>
        <button
          className={styles.langSwitch}
          onClick={() => setLang(lang === "en" ? "es" : "en")}
          aria-label={t.langSwitch}
          title={t.langSwitch}
        >
          {LANGS.map((l) => (
            <span key={l} className={l === lang ? styles.langActive : styles.langOption}>
              {l}
            </span>
          ))}
        </button>
      </div>
    </nav>
  );
}
