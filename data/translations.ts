export type Lang = "en" | "es";

const en = {
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
  hero: {
    badge: "Available for opportunities",
    greeting: "Hi, I'm",
    name: "David Gómez",
    roles: [
      "Software Engineer & Full-Stack Developer",
      "React · Next.js · Spring Boot",
      "Laravel · Python · PostgreSQL",
    ],
    description:
      "I build full-stack web applications with React, Next.js, Spring Boot and Laravel, and I automate processes with Python and RPA. Systems Engineering student and Programming Assistant at Universidad de Antioquia.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    downloadCV: "Download CV",
  },
  about: {
    title: "About",
    eyebrow: "Who I am",
    fullName: "David Gómez Agudelo",
    p1: "I'm a Systems Engineering student (9th semester) at Universidad de Antioquia and a Programming Assistant there, where I build internal tools and document management applications that simplify real workflows.",
    p2: "My sweet spot is full-stack development: fast, accessible frontends with React and Next.js, and robust backends with Spring Boot and Laravel. I also enjoy automating processes with Python and RPA, and I'm curious about data science.",
    p3: "I care about clean architecture, maintainable code and measurable impact — like eliminating dozens of daily manual emails with a tool that centralizes a whole process.",
    fact: "Based in",
    factValue: "Medellín, Colombia",
    email: "David.gomez.agudelo9@gmail.com",
    phone: "(+57) 321 645 5813",
    openToWork: "Open to full-time & freelance opportunities",
  },
  experience: {
    title: "Experience",
    eyebrow: "Where I've worked",
    present: "Present",
    jobs: [
      {
        role: "Programming Assistant",
        company: "Universidad de Antioquia",
        location: "Medellín, Colombia",
        period: "Mar 2026 – Present",
        stack: ["Laravel", "PHP", "MySQL"],
        points: [
          "Developed and implemented ARCA, a Laravel document management web app for teaching applicants, integrating authentication through an institutional API. The system eliminated around 50 daily emails to the responsible assistant by centralizing the process in a single traceable flow.",
          "Develop and maintain internal tools and academic applications in PHP and MySQL, ensuring stability and correct operation of existing systems.",
          "Optimize complex SQL queries and write detailed technical documentation, improving system performance and enabling knowledge transfer to the team.",
          "Collaborate with the IT team on external API integrations, promoting scalability of university services.",
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    eyebrow: "Things I've built",
    viewProject: "View project",
    source: "Source",
    comingSoon: "Coming soon",
    list: [
      {
        name: "IPS Centir Billing",
        description:
          "Full-stack electronic health billing platform with Admissions and Administration modules, aligned with DIAN and Ministry of Health requirements. The invoice is created, signed and sent to DIAN and the Ministry of Health.",
        stack: ["Next.js", "Spring Boot", "PostgreSQL", "Python", "Selenium"],
        url: "",
        source: "",
      },
      {
        name: "School Management System",
        description:
          "Complete application for school administration covering users, groups, subjects and grades. Complex relationship mapping with JPA and Hibernate, centralized exception handling and secure Google OAuth2 authentication with role-based access.",
        stack: ["React", "Spring Boot", "Spring Data JPA", "MySQL"],
        url: "",
        source: "https://github.com/David-Gomez49/school-management-backend",
        sourceLabel: "Backend",
        source2: "https://github.com/S4NT14G0V/School-management-frontend",
        source2Label: "Frontend",
      },
      {
        name: "Popular News Prediction",
        description:
          "Machine learning classifier that predicts news popularity from title, category, publication day and keywords, with a reproducible Jupyter pipeline including full EDA and evaluation using Accuracy, Precision, Recall and a confusion matrix.",
        stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
        url: "https://github.com/David-Gomez49/Proyecto-Modelos-II/blob/main/Reporte_Proyecto_Modelos.pdf",
        source: "",
      },
      {
        name: "Fiction Discovery",
        description:
          "Full-stack platform to explore, import and organize stories. Live demo without a backend or database that showcases the complete experience — authentication, importing and an admin panel. The frontend is open source; the backend is private.",
        stack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
        url: "https://fanfic-test-temp.vercel.app/",
        source: "https://github.com/David-Gomez49/fanfic-frontend",
      },
      {
        name: "OpenFit",
        description:
          "Multi-platform nutrition app for logging meals and weight, available for mobile (Android & iOS) and web. Live demo without a backend or database that showcases the complete experience — AI meal logging with the Gemini API, dashboard and progress tracking.",
        stack: ["React Native", "Expo", "Supabase", "Gemini API"],
        url: "https://open-fit-pi.vercel.app/",
        source: "https://github.com/David-Gomez49/OpenFit",
      },
    ],
  },
  skills: {
    title: "Skills",
    eyebrow: "My toolbox",
    languages: {
      label: "Languages",
      items: ["Java", "PHP", "Python", "JavaScript", "SQL"],
    },
    frameworks: {
      label: "Frameworks & Libraries",
      items: ["Laravel", "Spring Boot", "Next.js", "React", "Tailwind CSS", "Hibernate"],
    },
    data: {
      label: "Data & ML",
      items: ["Pandas", "NumPy", "scikit-learn", "Data Science", "Machine Learning"],
    },
    tools: {
      label: "Tools & DevOps",
      items: ["Git", "Docker", "MySQL", "PostgreSQL", "Supabase", "Selenium"],
    },
    qa: {
      label: "QA",
      items: ["Unit Testing", "Integration Testing", "JUnit", "Postman", "Manual Testing"],
    },
  },
  contact: {
    title: "Contact",
    eyebrow: "Get in touch",
    heading: "Let's build something together",
    description:
      "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Drop me a line — I'll get back to you as soon as I can.",
    email: "Say hello",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    rights: "All rights reserved.",
    built: "Built with Next.js, Tailwind CSS & React Bits",
  },
};

const es: typeof en = {
  nav: {
    about: "Sobre mí",
    experience: "Experiencia",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  hero: {
    badge: "Disponible para oportunidades",
    greeting: "Hola, soy",
    name: "David Gómez",
    roles: [
      "Ingeniero de Software y Desarrollador Full-Stack",
      "React · Next.js · Spring Boot",
      "Laravel · Python · PostgreSQL",
    ],
    description:
      "Construyo aplicaciones web full-stack con React, Next.js, Spring Boot y Laravel, y automatizo procesos con Python y RPA. Estudiante de Ingeniería de Sistemas y Auxiliar de Programación en la Universidad de Antioquia.",
    viewProjects: "Ver proyectos",
    contactMe: "Contáctame",
    downloadCV: "Descargar CV",
  },
  about: {
    title: "Sobre mí",
    eyebrow: "Quién soy",
    fullName: "David Gómez Agudelo",
    p1: "Soy estudiante de Ingeniería de Sistemas (9.º semestre) en la Universidad de Antioquia y Auxiliar de Programación allí, donde construyo herramientas internas y aplicativos de gestión documental que simplifican flujos reales de trabajo.",
    p2: "Mi punto fuerte es el desarrollo full-stack: frontends rápidos y accesibles con React y Next.js, y backends robustos con Spring Boot y Laravel. También disfruto automatizar procesos con Python y RPA, y me interesa la ciencia de datos.",
    p3: "Me importan la arquitectura limpia, el código mantenible y el impacto medible — como eliminar decenas de correos manuales diarios con una herramienta que centraliza un proceso completo.",
    fact: "Ubicación",
    factValue: "Medellín, Colombia",
    email: "David.gomez.agudelo9@gmail.com",
    phone: "(+57) 321 645 5813",
    openToWork: "Abierto a oportunidades full-time y freelance",
  },
  experience: {
    title: "Experiencia",
    eyebrow: "Dónde he trabajado",
    present: "Actualidad",
    jobs: [
      {
        role: "Auxiliar de Programación",
        company: "Universidad de Antioquia",
        location: "Medellín, Colombia",
        period: "Mar 2026 – Actualidad",
        stack: ["Laravel", "PHP", "MySQL"],
        points: [
          "Desarrollé e implementé ARCA, un aplicativo web en Laravel de gestión documental para aspirantes docentes, integrando autenticación mediante una API institucional. El sistema eliminó alrededor de 50 correos diarios al auxiliar encargado, centralizando el proceso en un único flujo con trazabilidad completa.",
          "Desarrollo y mantenimiento de herramientas internas y aplicaciones académicas en PHP y MySQL, asegurando estabilidad y correcto funcionamiento de los sistemas existentes.",
          "Optimizo consultas complejas en SQL y redacto documentación técnica detallada, mejorando el rendimiento del sistema y facilitando la transferencia de conocimiento al equipo.",
          "Colaboro con el equipo de TI en la integración de APIs externas, promoviendo la escalabilidad de los servicios de la universidad.",
        ],
      },
    ],
  },
  projects: {
    title: "Proyectos",
    eyebrow: "Lo que he construido",
    viewProject: "Ver proyecto",
    source: "Código",
    comingSoon: "Próximamente",
    list: [
      {
        name: "Facturación IPS Centir",
        description:
          "Plataforma full-stack de facturación electrónica en salud con módulos de Admisiones y Administración, alineada con los requerimientos de la DIAN y el Ministerio de Salud. La factura se crea, se firma y se envía a la DIAN y al Ministerio de Salud.",
        stack: ["Next.js", "Spring Boot", "PostgreSQL", "Python", "Selenium"],
        url: "",
        source: "",
      },
      {
        name: "Sistema de Gestión Escolar",
        description:
          "Aplicación integral para la administración de colegios con módulos de usuarios, grupos, materias y calificaciones. Mapeo de relaciones complejas con JPA y Hibernate, manejo centralizado de excepciones y autenticación segura con Google OAuth2 y control por roles.",
        stack: ["React", "Spring Boot", "Spring Data JPA", "MySQL"],
        url: "",
        source: "https://github.com/David-Gomez49/school-management-backend",
        sourceLabel: "Backend",
        source2: "https://github.com/S4NT14G0V/School-management-frontend",
        source2Label: "Frontend",
      },
      {
        name: "Predicción de Noticias Populares",
        description:
          "Clasificador de machine learning que predice la popularidad de noticias según título, categoría, día de publicación y palabras clave, con un pipeline reproducible en Jupyter que incluye EDA completo y evaluación con Accuracy, Precision, Recall y matriz de confusión.",
        stack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
        url: "https://github.com/David-Gomez49/Proyecto-Modelos-II/blob/main/Reporte_Proyecto_Modelos.pdf",
        source: "",
      },
      {
        name: "Fiction Discovery",
        description:
          "Plataforma full-stack para explorar, importar y organizar historias. Demo en vivo sin backend ni base de datos que muestra la experiencia completa: autenticación, importación y panel de administración. El frontend es de código abierto; el backend es privado.",
        stack: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
        url: "https://fanfic-test-temp.vercel.app/",
        source: "https://github.com/David-Gomez49/fanfic-frontend",
      },
      {
        name: "OpenFit",
        description:
          "App de nutrición multi-plataforma para registrar comidas y peso, disponible para celular (Android e iOS) y web. Demo en vivo sin backend ni base de datos que muestra la experiencia completa: registro de comidas con IA (Gemini API), dashboard y seguimiento de progreso.",
        stack: ["React Native", "Expo", "Supabase", "Gemini API"],
        url: "https://open-fit-pi.vercel.app/",
        source: "https://github.com/David-Gomez49/OpenFit",
      },
    ],
  },
  skills: {
    title: "Habilidades",
    eyebrow: "Mi caja de herramientas",
    languages: {
      label: "Lenguajes",
      items: ["Java", "PHP", "Python", "JavaScript", "SQL"],
    },
    frameworks: {
      label: "Frameworks y librerías",
      items: ["Laravel", "Spring Boot", "Next.js", "React", "Tailwind CSS", "Hibernate"],
    },
    data: {
      label: "Datos y ML",
      items: ["Pandas", "NumPy", "scikit-learn", "Data Science", "Machine Learning"],
    },
    tools: {
      label: "Herramientas y DevOps",
      items: ["Git", "Docker", "MySQL", "PostgreSQL", "Supabase", "Selenium"],
    },
    qa: {
      label: "QA",
      items: ["Pruebas unitarias", "Pruebas de integración", "JUnit", "Postman", "Pruebas manuales"],
    },
  },
  contact: {
    title: "Contacto",
    eyebrow: "Hablemos",
    heading: "Construyamos algo juntos",
    description:
      "Siempre estoy abierto a hablar de nuevos proyectos, ideas creativas u oportunidades de formar parte de tu visión. Escríbeme: te responderé lo antes posible.",
    email: "Escríbeme",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  footer: {
    rights: "Todos los derechos reservados.",
    built: "Hecho con Next.js, Tailwind CSS y React Bits",
  },
};

export const translations: Record<Lang, typeof en> = { en, es };