import React, { useState } from "react";
import { projects as featured, personal } from "../data/content";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { useLang } from "../i18n";
import styles from "./Section.module.css";
import s from "./Projects.module.css";

const CATEGORIES = ["all", "gamedev", "webdev", "backend", "other"];

const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

const GithubIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

function langToCategory(lang) {
  if (!lang) return "other";
  const l = lang.toLowerCase();
  if (["c#", "c++", "lua", "gdscript"].includes(l)) return "gamedev";
  if (["javascript", "typescript", "html", "css", "vue"].includes(l)) return "webdev";
  if (["python", "java", "go", "rust", "php"].includes(l)) return "backend";
  return "other";
}

function FeaturedCard({ project }) {
  const { t, tr } = useLang();
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardType}>{t.projectTypes[project.type] ?? project.type}</span>
        <div className={s.cardLinks}>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className={s.cardLink} title={t.projects.live}>
              <ExternalIcon />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer" className={s.cardLink} title={t.projects.source}>
              <GithubIcon />
            </a>
          )}
        </div>
      </div>
      <h3 className={s.cardName}>{project.name}</h3>
      <p className={s.cardDesc}>{tr(project.description)}</p>
      <div className={s.cardTags}>
        {project.tags.map((t) => <span key={t} className={s.tag}>{t}</span>)}
      </div>
    </div>
  );
}

function RepoCard({ repo }) {
  const { t } = useLang();
  const category = langToCategory(repo.language);
  return (
    <div className={s.card}>
      <div className={s.cardHeader}>
        <span className={s.cardType}>{t.projectTypes[category]}</span>
        <div className={s.cardLinks}>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noreferrer" className={s.cardLink} title={t.projects.live}>
              <ExternalIcon />
            </a>
          )}
          <a href={repo.html_url} target="_blank" rel="noreferrer" className={s.cardLink} title={t.projects.source}>
            <GithubIcon />
          </a>
        </div>
      </div>
      <h3 className={s.cardName}>{repo.name.replace(/-/g, " ")}</h3>
      <p className={s.cardDesc}>{repo.description || t.projects.noDescription}</p>
      <div className={s.cardFooter}>
        {repo.language && <span className={s.tag}>{repo.language}</span>}
        {repo.stargazers_count > 0 && (
          <span className={s.stat}>★ {repo.stargazers_count}</span>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  const { repos, loading, error } = useGithubRepos(personal.handle);
  const { t } = useLang();

  const filteredRepos = repos.filter((r) => {
    if (filter === "all") return true;
    return langToCategory(r.language) === filter;
  });

  const visibleRepos = showAll ? filteredRepos : filteredRepos.slice(0, 6);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.sectionLabel}>// 03</p>
        <h2 className={styles.sectionTitle}>{t.sections.projects}</h2>

        <div className={s.featuredGrid}>
          {featured.map((p) => <FeaturedCard key={p.name} project={p} />)}
        </div>

        <div className={s.filterRow}>
          <span className={s.filterLabel}>{t.projects.allRepos}</span>
          <div className={s.filters}>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`${s.filterBtn} ${filter === c ? s.active : ""}`}
                onClick={() => { setFilter(c); setShowAll(false); }}
              >
                {c === "all" ? t.filters.all : t.projectTypes[c]}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className={s.statusMsg}>{t.projects.loading}</p>}
        {error && <p className={s.statusMsg}>{t.projects.error}</p>}

        {!loading && !error && (
          <>
            <div className={s.repoGrid}>
              {visibleRepos.map((r) => <RepoCard key={r.id} repo={r} />)}
            </div>
            {filteredRepos.length > 6 && !showAll && (
              <button className={s.showMore} onClick={() => setShowAll(true)}>
                {t.projects.showAll(filteredRepos.length)}
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
