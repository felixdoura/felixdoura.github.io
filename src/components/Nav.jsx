import React, { useState, useEffect } from "react";
import { personal } from "../data/content";
import styles from "./Nav.module.css";

const links = ["about", "skills", "projects", "experience", "contact"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className={styles.link}>
              {l}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
