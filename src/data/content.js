export const personal = {
  name: "Felix Doura",
  handle: "felixdoura",
  tagline: "I build software people play and use —",
  taglineSub: "from pixel interfaces to game worlds.",
  status: "open to new opportunities",
  location: "Buenos Aires, Argentina",
  email: "felixdoura@gmail.com",
  phone: "(+54) 11 3208 2425",
  github: "https://github.com/felixdoura",
  linkedin: "https://www.linkedin.com/in/felixdoura/",
  portfolio: "https://felixdoura.github.io",
  roles: ["Tech Lead ", "Software Developer", "Chief Product Officer", "Game Developer"],
  about: [
    {
      label: "Summary",
      value:
        "Technology executive with a proven track record bridging strategic leadership and hands-on technical execution. Full Stack engineer and AI specialist with deep expertise in cloud and on-premise architectures, agile delivery, and cross-functional team operations.",
    },
    {
      label: "Currently",
      value:
        "Chief of Staff at the Government of the City of Buenos Aires, overseeing strategic coordination across ministerial areas and driving digital transformation initiatives at scale.",
    },
    {
      label: "Education",
      value:
        "Software Engineering — Universidad de Belgrano (in progress, exp. 2028). CS50 — Harvard University (2023). Videogame Development & Design — Image Campus.",
    },
    {
      label: "Languages",
      value: "Spanish — Native · English — Professional",
    },
  ],
};

export const skills = [
  {
    name: "Leadership",
    items: ["Technology Strategy", "Team Management", "Executive Advisory", "Agile / Scrum", "Stakeholder Mgmt", "Budget Oversight"],
  },
  {
    name: "Engineering",
    items: ["Full Stack Dev", "Cloud Architecture", "On-Premise Infra", "API Design", "CI/CD", "DevOps", "QA"],
  },
  {
    name: "AI & Data",
    items: ["AI Integration", "AI Productivity", "Process Automation", "Systems Optimization"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "SASS"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", ".NET", "Python", "Flask", "REST APIs"],
  },
  {
    name: "Game Dev",
    items: ["Unity", "Unreal Engine", "C#", "C++", "WebGL"],
  },
  {
    name: "Databases",
    items: ["MySQL", "MariaDB", "MongoDB"],
  },
  {
    name: "Tools",
    items: ["Git", "GitHub Actions", "Postman", "Figma"],
  },
];

export const experience = [
  {
    role: "Chief of Staff",
    company: "Government of the City of Buenos Aires",
    org: "Public Sector",
    period: "Current",
    bullets: [
      "Lead strategic coordination across ministerial areas, aligning projects and programs with government-wide KPIs.",
      "Drive inter-ministerial technology and policy initiatives, supervising technical and budgetary reports.",
      "Act as executive advisor to senior leadership, providing data-driven recommendations and process improvements.",
      "Oversee compliance and monitoring of digital transformation roadmaps, ensuring on-time delivery of high-impact programs.",
    ],
  },
  {
    role: "Freelance Full Stack Web Developer",
    company: "Multiple Clients",
    org: "Remote",
    period: "Previous",
    bullets: [
      "Designed, developed, and deployed end-to-end web applications managing full front-end and back-end architecture.",
      "Integrated RESTful APIs, implemented authentication and security best practices, and optimized for high-availability.",
      "Managed hosting, CI/CD pipelines, version control, and ongoing maintenance for reliable digital solutions.",
      "Delivered responsive UIs alongside scalable server-side systems, consistently meeting client timelines.",
    ],
  },
  {
    role: "Sales Supervisor",
    company: "Work & Fun Ltd.",
    org: "Buenos Aires",
    period: "Previous",
    bullets: [
      "Oversaw daily sales operations and led a team toward performance targets.",
      "Optimized workflows to improve operational efficiency and contributed to forecasting activities.",
      "Coordinated with senior management to implement promotional and commercial initiatives.",
    ],
  },
];

export const certifications = [
  { name: "CS50 — Computer Science", issuer: "Harvard University", year: "2023" },
  { name: "Full Stack Web Developer", issuer: "Digital House", year: "" },
  { name: "Videogame Development & Design", issuer: "Image Campus", year: "" },
  { name: "Public Policy & Project Management", issuer: "Universidad Siglo 21", year: "" },
  { name: "AI Productivity", issuer: "EducaciónIT", year: "" },
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
