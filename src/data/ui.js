// Interface strings (labels, buttons, messages) in each language.
export const ui = {
  en: {
    nav: {
      about: "about",
      skills: "skills",
      projects: "projects",
      experience: "experience",
      contact: "contact",
    },
    langSwitch: "Cambiar a español",
    hero: {
      viewProjects: "View projects",
      getInTouch: "Get in touch",
    },
    sections: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    projects: {
      allRepos: "All repos",
      loading: "fetching repos...",
      error: "could not load repos from GitHub API.",
      noDescription: "No description yet.",
      showAll: (n) => `show all ${n} repos`,
      live: "Live / Demo",
      source: "Source code",
    },
    projectTypes: {
      gamedev: "game dev",
      webdev: "web dev",
      backend: "backend",
      other: "other",
    },
    filters: { all: "all" },
    experience: {
      certifications: "Certifications",
    },
    contact: {
      intro: "Open to fullstack, game development and tech lead opportunities.",
      cta: "Let's talk.",
      builtWith: "built with React · GitHub Pages",
    },
  },
  es: {
    nav: {
      about: "sobre mí",
      skills: "skills",
      projects: "proyectos",
      experience: "experiencia",
      contact: "contacto",
    },
    langSwitch: "Switch to English",
    hero: {
      viewProjects: "Ver proyectos",
      getInTouch: "Contactame",
    },
    sections: {
      about: "Sobre mí",
      skills: "Skills",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    projects: {
      allRepos: "Todos los repos",
      loading: "cargando repos...",
      error: "no se pudieron cargar los repos desde la API de GitHub.",
      noDescription: "Sin descripción todavía.",
      showAll: (n) => `ver los ${n} repos`,
      live: "Demo en vivo",
      source: "Código fuente",
    },
    projectTypes: {
      gamedev: "videojuegos",
      webdev: "desarrollo web",
      backend: "backend",
      other: "otros",
    },
    filters: { all: "todos" },
    experience: {
      certifications: "Certificaciones",
    },
    contact: {
      intro: "Abierto a oportunidades fullstack, de desarrollo de videojuegos y de liderazgo técnico.",
      cta: "Hablemos.",
      builtWith: "hecho con React · GitHub Pages",
    },
  },
};
