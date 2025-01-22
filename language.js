const translations = {
  en: {
    aboutTitle: "About Me",
    aboutDescription: "I’m a Software Engineering student passionate about data science and artificial intelligence. I’m naturally curious and always eager to learn, especially about topics that push boundaries like AI. I’m fluent in Spanish and English (B2 certified) and enjoy working on innovative projects that turn data into meaningful insights. My goal is to grow my skills and contribute to impactful AI-driven solutions.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    contactTitle: "Contact",
    contactDescription: "Feel free to reach out via email or social media.",
    progTitle: "Programming Languages",
    devTools: "Development Tools",
    AI: "Data Science & AI",
    projects1Title: "Breast Cancer Prediction",
    projects1descri: "Predictive model for breast cancer using logistic regression with a 90% accuracy.",
    projects2Title: "Naive bayes implementation",
    projects2descri: "I developed a tweet author classification system using the Naive Bayes algorithm. The main goal of the project was to predict the author of a tweet based on its content. ",
    projects3Title: "EDA super store sales",
    projects3descri: "This project performs an Exploratory Data Analysis (EDA) on a sales dataset. The main objective is to explore the information contained within the data to better understand trends, patterns, and relationships between variables.",
    Experiencia: "Experience",
    job1Descri1: "Designed and implemented backend services using Firebase Database and Node.js, ensuring efficient integration with frontend applications for multiple projects.",
    job1Descri2: "Deployed backend services on Google Cloud Platform using command-line tools for basic environment setup and configuration.",
    nav1: "About me",
    certifications: "Certifications & Courses",
    buttonText: "Español"
  },
  es: {

    aboutTitle: "Sobre mí",
    aboutDescription: "Soy estudiante de Ingeniería de Software, apasionado por la ciencia de datos y la inteligencia artificial. Tengo una curiosidad natural y siempre estoy dispuesto a aprender, especialmente sobre temas que rompen fronteras como la IA. Hablo con fluidez español e inglés (certificación B2) y disfruto trabajar en proyectos innovadores que convierten los datos en información significativa. Mi objetivo es mejorar mis habilidades y contribuir a soluciones impactantes impulsadas por IA.",
    skillsTitle: "Habilidades",
    projectsTitle: "Proyectos",
    contactTitle: "Contacto",
    contactDescription: "No dudes en ponerte en contacto a través de correo electrónico o redes sociales.",
    progTitle: "Lenguajes de programación",
    devTools: "Herramientas de desarrollo",
    AI: "Ciencia de datos e IA",
    projects1Title: "Predicción de cáncer de mama",
    projects1descri: "Modelo predictivo para el cáncer de mama utilizando regresión logística con una precisión del 90%.",
    projects2Title: "Implementación de Naive Bayes",
    projects2descri: "Desarrollé un sistema de clasificación de autores de tuits utilizando el algoritmo Naive Bayes. El objetivo principal del proyecto era predecir el autor de un tuit basándose en su contenido.",
    projects3Title: "Análisis exploratorio de ventas en una tienda",
    projects3descri: "Este proyecto realiza un Análisis Exploratorio de Datos (EDA) sobre un conjunto de datos de ventas. El objetivo principal es explorar la información contenida en los datos para comprender mejor las tendencias, patrones y relaciones entre las variables.",
    Experiencia: "Experiencia",
    job1Descri1: "Diseñé e implementé servicios backend utilizando Firebase Database y Node.js, asegurando una integración eficiente con las aplicaciones frontend en varios proyectos.",
    job1Descri2: "Desplegué servicios backend en Google Cloud Platform utilizando herramientas de línea de comandos para la configuración básica del entorno.",
    nav1: "Sobre mí",
    certifications: "Certificaciones y cursos",
    buttonText: "English"
  },
};

let currentLanguage = "en"; // Idioma por defecto

function updateLanguage(lang) {
  currentLanguage = lang;
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
  });

  document.getElementById("language-toggle").textContent = translations[lang].buttonText;
}

document.getElementById("language-toggle").addEventListener("click", () => {
  const newLanguage = currentLanguage === "en" ? "es" : "en";
  updateLanguage(newLanguage);
});

// Inicializa con el idioma por defecto
updateLanguage(currentLanguage);
