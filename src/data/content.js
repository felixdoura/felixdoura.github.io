// Any text field can be a plain string (same in every language)
// or an object with one entry per language: { en: "...", es: "..." }.

export const personal = {
  firstName: "Felix",
  lastName: "Doura",
  handle: "felixdoura",
  tagline: {
    en: "I build software people play and use —",
    es: "Construyo software que la gente usa y juega —",
  },
  taglineSub: {
    en: "from pixel interfaces to game worlds.",
    es: "desde interfaces pixel a mundos de juego.",
  },
  status: {
    en: "open to new opportunities",
    es: "abierto a nuevas oportunidades",
  },
  location: "Buenos Aires, Argentina",
  email: "felixdoura@gmail.com",
  github: "https://github.com/felixdoura",
  linkedin: "https://www.linkedin.com/in/felixdoura/",
  portfolio: "https://felixdoura.github.io",
  roles: [
    "Tech Lead",
    { en: "Software Developer", es: "Desarrollador de Software" },
    "Chief Product Officer",
    { en: "Game Developer", es: "Desarrollador de Videojuegos" },
  ],
  about: [
    {
      label: { en: "Summary", es: "Resumen" },
      value: {
        en: "Technology executive with a proven track record bridging strategic leadership and hands-on technical execution. Full Stack engineer and AI specialist with deep expertise in cloud and on-premise architectures, agile delivery, and cross-functional team operations.",
        es: "Ejecutivo de tecnología con trayectoria comprobada uniendo liderazgo estratégico y ejecución técnica. Ingeniero Full Stack y especialista en IA, con experiencia en arquitecturas cloud y on-premise, entrega ágil y gestión de equipos multidisciplinarios.",
      },
    },
    {
      label: { en: "Currently", es: "Actualmente" },
      value: {
        en: "Chief of Staff at the Government of the City of Buenos Aires, overseeing strategic coordination across ministerial areas and driving digital transformation initiatives at scale.",
        es: "Jefe de Gabinete en el Gobierno de la Ciudad de Buenos Aires, a cargo de la coordinación estratégica entre áreas ministeriales e impulsando iniciativas de transformación digital a gran escala.",
      },
    },
    {
      label: { en: "Education", es: "Formación" },
      value: {
        en: "Software Engineering — Universidad de Belgrano (in progress, exp. 2028). CS50 — Harvard University (2023). Videogame Development & Design — Image Campus.",
        es: "Ingeniería en Software — Universidad de Belgrano (en curso, egreso est. 2028). CS50 — Harvard University (2023). Desarrollo y Diseño de Videojuegos — Image Campus.",
      },
    },
    {
      label: { en: "Languages", es: "Idiomas" },
      value: {
        en: "Spanish — Native · English — Professional",
        es: "Español — Nativo · Inglés — Profesional",
      },
    },
  ],
};

export const skills = [
  {
    name: { en: "Game dev", es: "Videojuegos" },
    items: ["Unity", "Unreal Engine", "WebGL", "Itch.io"],
  },
  {
    name: { en: "Languages", es: "Lenguajes" },
    items: ["JavaScript", "Python", "C", "C++", "C#", "PHP"],
  },
  {
    name: { en: "Frontend Frameworks & Libraries", es: "Frameworks y librerías frontend" },
    items: ["React", "React-Redux", "Angular", "Next.js", "Vue.js"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", ".NET", "Flask"],
  },
  {
    name: { en: "Databases", es: "Bases de datos" },
    items: ["MySQL", "MariaDB", "MongoDB"],
  },
  {
    name: { en: "Monitoring", es: "Monitoreo" },
    items: ["Elastic", "Dynatrace", "PRTG"],
  },
  {
    name: { en: "Tools & design", es: "Herramientas y diseño" },
    items: ["Git", "GitHub Actions", "Postman", "Figma"],
  },
];

export const experience = [
  {
    role: { en: "Chief of Staff", es: "Jefe de Gabinete" },
    company: { en: "Government of the City of Buenos Aires", es: "Gobierno de la Ciudad de Buenos Aires" },
    org: { en: "Public Sector", es: "Sector Público" },
    period: { en: "Current", es: "Actual" },
    bullets: [
      {
        en: "Lead strategic coordination across ministerial areas, aligning projects and programs with government-wide KPIs.",
        es: "Lidero la coordinación estratégica entre áreas ministeriales, alineando proyectos y programas con los KPIs de gobierno.",
      },
      {
        en: "Drive inter-ministerial technology and policy initiatives, supervising technical and budgetary reports.",
        es: "Impulso iniciativas interministeriales de tecnología y políticas públicas, supervisando informes técnicos y presupuestarios.",
      },
      {
        en: "Act as executive advisor to senior leadership, providing data-driven recommendations and process improvements.",
        es: "Asesoro a la alta dirección con recomendaciones basadas en datos y mejoras de procesos.",
      },
      {
        en: "Oversee compliance and monitoring of digital transformation roadmaps, ensuring on-time delivery of high-impact programs.",
        es: "Superviso el cumplimiento y seguimiento de las hojas de ruta de transformación digital, asegurando la entrega en tiempo de programas de alto impacto.",
      },
    ],
  },
  {
    role: { en: "Freelance Full Stack Web Developer", es: "Desarrollador Web Full Stack Freelance" },
    company: { en: "Multiple Clients", es: "Múltiples clientes" },
    org: { en: "Remote", es: "Remoto" },
    period: { en: "Previous", es: "Anterior" },
    bullets: [
      {
        en: "Designed, developed, and deployed end-to-end web applications managing full front-end and back-end architecture.",
        es: "Diseñé, desarrollé y desplegué aplicaciones web de punta a punta, gestionando toda la arquitectura front-end y back-end.",
      },
      {
        en: "Integrated RESTful APIs, implemented authentication and security best practices, and optimized for high-availability.",
        es: "Integré APIs RESTful, implementé autenticación y buenas prácticas de seguridad, y optimicé para alta disponibilidad.",
      },
      {
        en: "Managed hosting, CI/CD pipelines, version control, and ongoing maintenance for reliable digital solutions.",
        es: "Gestioné hosting, pipelines de CI/CD, control de versiones y mantenimiento continuo de soluciones digitales confiables.",
      },
      {
        en: "Delivered responsive UIs alongside scalable server-side systems, consistently meeting client timelines.",
        es: "Entregué interfaces responsive junto a sistemas server-side escalables, cumpliendo consistentemente los plazos de los clientes.",
      },
    ],
  },
  {
    role: { en: "Sales Supervisor", es: "Supervisor de Ventas" },
    company: "Work & Fun Ltd.",
    org: "Buenos Aires",
    period: { en: "Previous", es: "Anterior" },
    bullets: [
      {
        en: "Oversaw daily sales operations and led a team toward performance targets.",
        es: "Supervisé las operaciones diarias de ventas y lideré un equipo hacia sus objetivos de desempeño.",
      },
      {
        en: "Optimized workflows to improve operational efficiency and contributed to forecasting activities.",
        es: "Optimicé flujos de trabajo para mejorar la eficiencia operativa y participé en la proyección de ventas.",
      },
      {
        en: "Coordinated with senior management to implement promotional and commercial initiatives.",
        es: "Coordiné con la gerencia la implementación de iniciativas comerciales y promocionales.",
      },
    ],
  },
];

export const certifications = [
  { name: "CS50 — Computer Science", issuer: "Harvard University", year: "2023" },
  { name: "Full Stack Web Developer", issuer: "Digital House", year: "" },
  { name: { en: "Videogame Development & Design", es: "Desarrollo y Diseño de Videojuegos" }, issuer: "Image Campus", year: "" },
  { name: { en: "Public Policy & Project Management", es: "Políticas Públicas y Gestión de Proyectos" }, issuer: "Universidad Siglo 21", year: "" },
  { name: { en: "AI Productivity", es: "Productividad con IA" }, issuer: "EducaciónIT", year: "" },
];

// Featured projects. `type` must be one of the keys in ui.projectTypes
// ("gamedev", "webdev", ...). To add a project, copy one of these objects.
export const projects = [
  {
    type: "webdev",
    name: "Innova Desarrollo Social",
    description: {
      en: "Education platform with student accounts, course catalog, multiple payment methods and a custom admin panel. Students see all their courses in one place and download receipts and certificates; the team manages courses, pricing, payments, enrollments, coupons and certificates from the web.",
      es: "Plataforma educativa con cuentas de usuario, catálogo de cursos, varios medios de pago y un panel de administración propio. Cada alumna o alumno ve todos sus cursos en un solo lugar y descarga sus comprobantes y certificados; el equipo gestiona cursos, precios, pagos, inscriptos, cupones y certificados desde la web.",
    },
    tags: ["React", "Vite", "Netlify Functions", "Supabase", "Mercado Pago", "Resend"],
    url: "https://innovatrabajosocial.com.ar/",
    repo: null,
  },
  {
    type: "gamedev",
    name: "Felix Starship",
    description: {
      en: "Portfolio game built with LÖVE2D in Lua. A playable space shooter available on Itch.io.",
      es: "Juego portfolio hecho con LÖVE2D en Lua. Un shooter espacial jugable disponible en Itch.io.",
    },
    tags: ["LÖVE2D", "Lua", "Itch.io"],
    url: "https://felixdoura.itch.io/felix-starship-portfolio-game",
    repo: null,
  },
  {
    type: "webdev",
    name: "Portfolio site",
    description: {
      en: "Personal portfolio and project hub. Bilingual React app hosted on GitHub Pages.",
      es: "Portfolio personal y hub de proyectos. App React bilingüe alojada en GitHub Pages.",
    },
    tags: ["React", "JavaScript", "GitHub Pages"],
    url: "https://felixdoura.github.io",
    repo: "https://github.com/felixdoura/felixdoura.github.io",
  },
];
