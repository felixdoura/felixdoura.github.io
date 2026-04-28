export const personal = {
  name: "Felix Doura",
  handle: "felixdoura",
  tagline: "I build software people play and use —",
  taglineSub: "from pixel interfaces to game worlds.",
  status: "Currently working at the Goverment of the City of Buenos Aires",
  location: "Buenos Aires, Argentina",
  email: "felixdoura@gmail.com",
  github: "https://github.com/felixdoura",
  linkedin: "https://www.linkedin.com/in/felixdoura/",
  twitter: "https://twitter.com/felixdoura",
  portfolio: "https://felixdoura.github.io",
  roles: ["Tech Leader", "Software Developer", "C.P.O."],
  about: [
    {
      label: "Background",
      value:
        "Developer with experience building web applications end-to-end and shipping games. I work at the intersection of software engineering, interactive experiences, and technical leadership.",
    },
    {
      label: "Currently",
      value:
        "Deputy Manager at Dirección General de Sistemas de Atención Ciudadana, Gobierno de la Ciudad de Buenos Aires.",
    },
    {
      label: "Education",
      value: "Software Engineering, Computer Science, Videogame Development & Fullstack Web Programming",
    },
    {
      label: "Interests",
      value:
        "Game jams, open source tooling, interactive web experiences, and pushing Unity's WebGL builds to their limits.",
    },
  ],
};

export const skills = [
  {
    name: "Game dev",
    items: ["Unity", "Unreal Engine", "WebGL", "Itch.io"],
  },
  {
    name: "Languages",
    items: ["JavaScript", "Python", "C", "C++", "C#", "PHP"],
  },
  {
    name: "Frontend Frameworks & Libraries",
    items: ["React", "React-Redux", "Angular", "Next.js", "Vue.js"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", ".NET", "Flask"],
  },
  {
    name: "Databases",
    items: ["MySQL", "MariaDB", "MongoDB"],
  },
  {
    name: "Monitoring",
    items: ["Elastic", "Dynatrace", "PRTG"],
  },
  {
    name: "Tools & design",
    items: ["Git", "GitHub Actions", "Postman", "Figma"],
  },
];

export const experience = [
  {
    role: "Chief of Staff",
    company: "Dirección General de Sistemas de Atención Ciudadana (DGSACIU)",
    org: "Gobierno de la Ciudad de Buenos Aires",
    period: "2023 — present",
    description:
      "Tech leadership in the digital systems division of the Buenos Aires city government. Coordination across engineering teams, architecture decisions, and delivery ownership for citizen-facing platforms.",
  },
  {
    role: "Frontend Developer",
    company: "Alarmas & Seguridad",
    org: "Buenos Aires",
    period: "2022 — 2023",
    description:
      "Built and maintained web interfaces for a security company. Focused on responsive UI, performance optimization, and integration with backend services.",
  },
  {
    role: "Frontend Developer",
    company: "GAOTek",
    org: "Remote",
    period: "2021 — 2022",
    description:
      "Developed frontend components and contributed to product UI for an international electronics company.",
  },
];

export const projects = [
  {
    type: "Game dev",
    name: "Felix Starship",
    description: "Portfolio game built with LÖVE2D in Lua. A playable space shooter available on Itch.io.",
    tags: ["LÖVE2D", "Lua", "Itch.io"],
    url: "https://felixdoura.itch.io/felix-starship-portfolio-game",
    repo: null,
  },
  {
    type: "Fullstack",
    name: "Portfolio site",
    description: "Personal portfolio and project hub. React app hosted on GitHub Pages.",
    tags: ["React", "JavaScript", "GitHub Pages"],
    url: "https://felixdoura.github.io",
    repo: "https://github.com/felixdoura/felixdoura.github.io",
  },
];
