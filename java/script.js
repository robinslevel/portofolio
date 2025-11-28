// ---------- YEAR IN FOOTER ----------
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// ---------- SCROLL REVEAL ----------
const fadeEls = document.querySelectorAll(".fade-in");
if (fadeEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );
  fadeEls.forEach((el) => observer.observe(el));
}

// ---------- LANGUAGE SWITCHER ----------

const translations = {
  en: {
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    "hero-pill": "UX / UI Design Student · CMD",
    "hero-title-line1": "Hi, I’m Robin.",
    "hero-title-tagline": "I design calm, playful experiences.",
    "hero-subtitle":
      "I’m a UX / UI design student at CMD Hogeschool van Amsterdam. I like turning complex ideas into interfaces that feel intuitive, friendly, and a bit cosmic — combining research, visual design, and micro-interactions.",
    "hero-tag-uxui": "UX / UI",
    "hero-tag-interaction": "Interaction Design",
    "hero-tag-behavior": "Behavior & Psychology",
    "hero-cta-portfolio": "View my portfolio",
    "hero-cta-contact": "Let’s connect",
    "hero-meta":
      "Currently studying at CMD Hogeschool van Amsterdam · Open to internships & collabs",
    "hero-badge-text": "Designing experiences as a CMD student",

    "about-title": "About Me",
    "about-text":
      "I’m Robin Korkor, a UX / UI design student at CMD Hogeschool van Amsterdam. I’m curious about how design can make complex spaces — like museums, streets, and digital interfaces — feel calmer and more intuitive. I enjoy connecting behavior insights with visual design, and I like projects where I can combine research, interaction flows, and visual polish.",

    "skills-title": "Skills Matrix",
    "skills-subtitle": "A snapshot of the skills I’m building at CMD, grouped by area.",
    "skills-research-title": "Research",
    "skills-research-text":
      "Interviews, simple surveys, observation, user journeys, and basic usability testing.",
    "skills-interaction-title": "Interaction Design",
    "skills-interaction-text":
      "User flows, wireframes, information architecture, and prototyping.",
    "skills-ui-title": "UI & Visual Design",
    "skills-ui-text":
      "Layouts, components, typography, color, and accessible visual systems.",
    "skills-tools-title": "Tools & Handoff",
    "skills-tools-text":
      "Design tools (e.g. Figma), basic HTML/CSS, and preparing work for developers or teams.",

    "cv-title": "Education & Experience",
    "cv-education-title": "Education",
    "cv-education-text":
      "CMD Hogeschool van Amsterdam\nUX / UI & interaction design student\nFocus on digital products, behavior, and urban interaction.",
    "cv-projects-title": "Project Experience",
    "cv-projects-text":
      "University projects around museum experiences, city spaces, and digital products, including concepting, research, and interface design.",
    "cv-collab-title": "Collaboration",
    "cv-collab-text":
      "Used to working in small multidisciplinary student teams, presenting concepts, and collecting feedback from peers and stakeholders.",

    "hobbies-title": "Hobbies & Interests",
    "hobbies-subtitle": "Things I enjoy that influence how I design and see the world.",
    "hobby-museums-title": "Museums & Exhibitions",
    "hobby-museums-text":
      "I like exploring museums and thinking about how visitors move, feel, and interact with stories and spaces.",
    "hobby-games-title": "Games & Interaction",
    "hobby-games-text":
      "Games inspire how I think about feedback, flow, and making experiences playful.",
    "hobby-city-title": "City & Public Space",
    "hobby-city-text":
      "I’m interested in how design can make streets, squares, and routes more usable and inclusive.",
    "hobby-visual-title": "Visual Experiments",
    "hobby-visual-text":
      "I like trying new visual styles, motion, and micro-interactions to build my design language."
  },

  nl: {
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    "hero-pill": "UX / UI Designstudent · CMD",
    "hero-title-line1": "Hoi, ik ben Robin.",
    "hero-title-tagline": "Ik ontwerp rustige, speelse ervaringen.",
    "hero-subtitle":
      "Ik ben een UX / UI designstudent aan CMD Hogeschool van Amsterdam. Ik vertaal complexe ideeën naar interfaces die intuïtief, vriendelijk en een beetje kosmisch aanvoelen – met een combinatie van onderzoek, visual design en micro-interacties.",
    "hero-tag-uxui": "UX / UI",
    "hero-tag-interaction": "Interaction Design",
    "hero-tag-behavior": "Gedrag & Psychologie",
    "hero-cta-portfolio": "Bekijk mijn portfolio",
    "hero-cta-contact": "Laten we connecten",
    "hero-meta":
      "Momenteel student aan CMD Hogeschool van Amsterdam · Open voor stages & samenwerkingen",
    "hero-badge-text": "Ervaringen ontwerpen als CMD-student",

    "about-title": "Over mij",
    "about-text":
      "Ik ben Robin Korkor, een UX / UI designstudent aan CMD Hogeschool van Amsterdam. Ik ben nieuwsgierig naar hoe design complexe plekken – zoals musea, straten en digitale interfaces – rustiger en intuïtiever kan maken. Ik verbind graag gedragsinzichten met visueel ontwerp en werk het liefst aan projecten waarin onderzoek, flows en visual design samenkomen.",

    "skills-title": "Skillmatrix",
    "skills-subtitle":
      "Een overzicht van de skills die ik bij CMD ontwikkel, gegroepeerd per gebied.",
    "skills-research-title": "Onderzoek",
    "skills-research-text":
      "Interviews, korte vragenlijsten, observatie, user journeys en eenvoudige usabilitytests.",
    "skills-interaction-title": "Interaction Design",
    "skills-interaction-text":
      "User flows, wireframes, informatiearchitectuur en prototyping.",
    "skills-ui-title": "UI & Visueel ontwerp",
    "skills-ui-text":
      "Layouts, componenten, typografie, kleur en toegankelijke visuele systemen.",
    "skills-tools-title": "Tools & Handoff",
    "skills-tools-text":
      "Designtools (zoals Figma), basis HTML/CSS en werk voorbereiden voor developers of teams.",

    "cv-title": "Opleiding & Ervaring",
    "cv-education-title": "Opleiding",
    "cv-education-text":
      "CMD Hogeschool van Amsterdam\nUX / UI & interaction designstudent\nFocus op digitale producten, gedrag en urban interaction.",
    "cv-projects-title": "Projectervaring",
    "cv-projects-text":
      "Schoolprojecten rond museumervaringen, stedelijke ruimtes en digitale producten, inclusief concepting, onderzoek en interface-ontwerp.",
    "cv-collab-title": "Samenwerking",
    "cv-collab-text":
      "Ervaring met werken in kleine multidisciplinaire studententeams, concepten presenteren en feedback ophalen bij medestudenten en stakeholders.",

    "hobbies-title": "Hobby’s & interesses",
    "hobbies-subtitle":
      "Dingen die ik leuk vind en die mijn blik op design beïnvloeden.",
    "hobby-museums-title": "Musea & tentoonstellingen",
    "hobby-museums-text":
      "Ik bezoek graag musea en let op hoe bezoekers bewegen, zich voelen en met verhalen en ruimtes omgaan.",
    "hobby-games-title": "Games & interactie",
    "hobby-games-text":
      "Games inspireren hoe ik denk over feedback, flow en speelsheid in een ervaring.",
    "hobby-city-title": "Stad & openbare ruimte",
    "hobby-city-text":
      "Ik ben geïnteresseerd in hoe design straten en pleinen gebruiksvriendelijker en inclusiever kan maken.",
    "hobby-visual-title": "Visuele experimenten",
    "hobby-visual-text":
      "Ik experimenteer graag met nieuwe stijlen, motion en micro-interacties om mijn designtaal te ontwikkelen."
  },

  fr: {
    "nav-home": "Accueil",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    "hero-pill": "Étudiant en UX / UI · CMD",
    "hero-title-line1": "Salut, moi c’est Robin.",
    "hero-title-tagline": "Je conçois des expériences calmes et ludiques.",
    "hero-subtitle":
      "Je suis étudiant en UX / UI design à la CMD Hogeschool van Amsterdam. J’aime transformer des idées complexes en interfaces intuitives, accueillantes et un peu cosmiques, en combinant recherche, design visuel et micro-interactions.",
    "hero-tag-uxui": "UX / UI",
    "hero-tag-interaction": "Interaction Design",
    "hero-tag-behavior": "Comportement & Psychologie",
    "hero-cta-portfolio": "Voir mon portfolio",
    "hero-cta-contact": "Entrer en contact",
    "hero-meta":
      "Actuellement étudiant à CMD Hogeschool van Amsterdam · Ouvert aux stages et collaborations",
    "hero-badge-text": "Conception d’expériences en tant qu’étudiant CMD",

    "about-title": "À propos de moi",
    "about-text":
      "Je suis Robin Korkor, étudiant en UX / UI design à la CMD Hogeschool van Amsterdam. Je m’intéresse à la façon dont le design peut rendre des espaces complexes – musées, rues ou interfaces numériques – plus calmes et intuitifs. J’aime relier les insights comportementaux au design visuel et travailler sur des projets qui combinent recherche, flux d’interaction et esthétique.",

    "skills-title": "Matrice de compétences",
    "skills-subtitle":
      "Un aperçu des compétences que je développe à CMD, regroupées par domaine.",
    "skills-research-title": "Recherche",
    "skills-research-text":
      "Interviews, petits questionnaires, observation, parcours utilisateurs et tests de base.",
    "skills-interaction-title": "Interaction Design",
    "skills-interaction-text":
      "User flows, wireframes, architecture de l’information et prototypage.",
    "skills-ui-title": "UI & Design visuel",
    "skills-ui-text":
      "Layouts, composants, typographie, couleur et systèmes visuels accessibles.",
    "skills-tools-title": "Outils & Handoff",
    "skills-tools-text":
      "Outils de design (comme Figma), HTML/CSS de base et préparation du travail pour les développeurs ou les équipes.",

    "cv-title": "Formation & Expérience",
    "cv-education-title": "Formation",
    "cv-education-text":
      "CMD Hogeschool van Amsterdam\nÉtudiant en UX / UI & interaction design\nFocalisé sur les produits numériques, le comportement et l’espace urbain.",
    "cv-projects-title": "Expériences de projet",
    "cv-projects-text":
      "Projets scolaires autour des expériences muséales, de l’espace urbain et des produits numériques, incluant conception, recherche et UI.",
    "cv-collab-title": "Collaboration",
    "cv-collab-text":
      "Habitué à travailler en petites équipes multidisciplinaires, à présenter des concepts et à recueillir du feedback.",

    "hobbies-title": "Loisirs & centres d’intérêt",
    "hobbies-subtitle":
      "Des choses que j’aime et qui influencent ma manière de concevoir.",
    "hobby-museums-title": "Musées & expositions",
    "hobby-museums-text":
      "J’aime visiter des musées et observer comment les visiteurs se déplacent, ressentent et interagissent avec les histoires.",
    "hobby-games-title": "Jeux & interaction",
    "hobby-games-text":
      "Les jeux m’inspirent pour penser au feedback, au flow et au côté ludique d’une expérience.",
    "hobby-city-title": "Ville & espace public",
    "hobby-city-text":
      "Je m’intéresse à la façon dont le design peut rendre rues et places plus utilisables et inclusives.",
    "hobby-visual-title": "Expérimentations visuelles",
    "hobby-visual-text":
      "J’aime expérimenter de nouveaux styles, motion et micro-interactions pour développer mon langage visuel."
  }
};

const languageShort = {
  en: "EN",
  nl: "NL",
  fr: "FR"
};

function setLanguage(lang) {
  if (!translations[lang]) return;

  document.documentElement.lang = lang;

  try {
    localStorage.setItem("portfolio-lang", lang);
  } catch (e) {}

  // Active state in all dropdown options
  document.querySelectorAll(".lang-option").forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });

  // Label in the pill (desktop + mobile)
  document.querySelectorAll(".lang-current-label").forEach((el) => {
    el.textContent = languageShort[lang] || lang.toUpperCase();
  });

  // Apply translations
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const txt = dict[key];
    if (!txt) return;

    if (txt.includes("\n")) {
      el.innerHTML = txt.replace(/\n/g, "<br />");
    } else {
      el.textContent = txt;
    }
  });
}

// Init language on load
(function initLanguage() {
  let lang = "en";
  try {
    const stored = localStorage.getItem("portfolio-lang");
    if (stored && translations[stored]) lang = stored;
  } catch (e) {}
  setLanguage(lang);
})();

// Option clicks
document.querySelectorAll(".lang-option").forEach((opt) => {
  opt.addEventListener("click", () => {
    const lang = opt.dataset.lang;
    setLanguage(lang);
    // close all dropdowns after selecting (desktop + mobile)
    document.querySelectorAll(".lang-dropdown").forEach((dd) =>
      dd.classList.remove("open")
    );
  });
});

// Open/close dropdown
document.querySelectorAll(".lang-dropdown").forEach((dropdown) => {
  const current = dropdown.querySelector(".lang-current");
  if (!current) return;
  current.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".lang-dropdown").forEach((dd) =>
    dd.classList.remove("open")
  );
});

// ---------- OPTIONAL PORTFOLIO FILTERS ----------
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card[data-category]");

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.getAttribute("data-filter");

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      projectCards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        if (filter === "all" || categories.includes(filter)) {
          card.classList.remove("hidden");
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// ---------- MOBILE MENU ----------
const mobileToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileToggle && mobileMenu) {
  const closeMenu = () => {
    mobileMenu.classList.remove("open");
    mobileToggle.classList.remove("open");
    document.body.classList.remove("no-scroll");
  };

  mobileToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    mobileToggle.classList.toggle("open", isOpen);
    document.body.classList.toggle("no-scroll", isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // NEW: explicit close button inside the overlay
  const closeButtons = mobileMenu.querySelectorAll(".mobile-menu-close");
  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      closeMenu();
    });
  });
}
