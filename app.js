/**
 * ==========================================================================
 * LÓGICA PRINCIPAL DEL APLICATIVO - ÁLBUM DE MEMORIAS (AMPLIADO)
 * ==========================================================================
 */

// Base de Datos por Defecto Sólida e Inicial
const DEFAULT_DATABASE = {
  coverTitle: "Nuestra Historia",
  coverSubtitle: "Cada segundo contigo fue un regalo que guardaré en el corazón por siempre, y ese espacio estará ahí, para ti, sin importar cuando leas esto.",
  timerStartDate: "2025-05-05T18:50:00",
  timerLabel: "Tiempo transcurrido desde que se juntaron nuestras almas:",
  dedicationTitle: "Para Quien Marcó Mi Vida",
  dedicationText: `<p style="text-align:center;">Michela Giulieth Vinueza Herrera.<br>Feliz Cumpleaños. 🎂</p>
  <p style="text-align:center;">Hay momentos que cambian el rumbo de nuestro destino, y conocerte fue uno de los puntos de inflexión más hermoso en el mío.</p>
  <p style="text-align:center;">Desde el fondo de mi corazón espero que encuentres todo lo que busques en la vida, que cumplas tus metas y que nunca olvides la gran mujer que eres y lo importante que eres para mí.💗</p>
  <p style="text-align:center;">Ahora que nos tocará caminar por separado, mi mayor deseo es que el futuro sea increíblemente generoso con los ambos. Te mereces que la vida devuelva toda la luz y la bondad que pusiste en mis días.</p>
  <p style="text-align:center;">Doy y daré siempre gracias a Dios por cruzar nuestros caminos. Deseo que el futuro nos sonría a ambos, estemos donde estemos, y si tiene esa bondad, poder algún día encontrarnos nuevamente, en una situación completamente distinta y favorable para ambos.💗 Gracias por ser refugio en esos días grises.</p>
  <p style="text-align:center;">Espero que hoy sea un día increíble para ti y que lo disfrutes mucho, que puedas pasar tiempo rodeada de las personas que te quieren y estiman,</p>
  <p style="text-align:center;"><strong>Te Quiero💗</strong></p>`,
  navTabs: {
    home: "Inicio",
    dedication: "Carta",
    timeline: "Momentos",
    gallery: "Galería",
    letters: "Cartas"
  },
  animationSettings: {
    mode: "leaves",
    count: 50,
    speed: 12
  },
  footerTagline: "\"Ya que todo lo que me fue dado me será quitado, debo recordarlo.\"",
  footerCopyright: "© 2026 Con amor y nostalgia. Hecho para no olvidar.",
  logoText: "M&E",
  accentTheme: "rose",
  heroBgImage: "https://png.pngtree.com/background/20250213/original/pngtree-seamlessly-printed-jellyfish-textured-pastel-background-pattern-picture-image_15284715.jpg",
  timelineTitle: "Sendero de Nuestros Recuerdos",
  timelineSubtitle: "Un recorrido cronológico a través de los instantes que definieron nuestra historia",
  galleryTitle: "Álbum Fotográfico",
  gallerySubtitle: "Instantes congelados en el tiempo que iluminan nuestra memoria",
  lettersTitle: "Cartas✨",
  lettersSubtitle: "Correspondencia íntima y palabras resguardadas con nostalgia",
  timeline: [
    {
      id: 1,
      date: "2025-05-05",
      title: "EL Día Que Te Conocí",
      desc: "En un turno que estaba iniciando de una manera muy aburrida en el hospital, apareciste. \nUn cruce de miradas y una breve charla, bastó para poder conocer lo cálido de tu alma.\nNo imaginaba en lo importante que se volverían esos ojitos brillantes.",
      img: "https://i.postimg.cc/RCjxFx7x/Whats-App-Image-2026-05-29-at-22-49-20-(1).jpg"
    },
    {
      id: 2,
      date: "2025-05-20",
      title: "Nuestro Primer Beso",
      desc: "Durante una noche lluviosa y nublada, después de hablar en la terraza del Hospital D.G.D, mientras veíamos a la ciudad y luego de un cálido abrazo ❤️.",
      img: "https://i.postimg.cc/MHT1hz2d/Whats-App-Image-2026-05-30-at-19-56-59.jpg"
    },
    {
      id: 3,
      date: "2025-05-26",
      title: "Cumpleaños Eduardo-2025",
      desc: "Algo que para nada me esperaba, se me hizo muy lindo de tu parte, quedé sin palabras, incluso con ganitas de que se me salgan unas lágrimas, y al verte con el mechero te me hiciste muy tierna, y lo único que pude decirte fue, GRACIASS!! ❤️🩹✨",
      img: "https://i.postimg.cc/8zy0KM5L/Whats-App-Image-2026-06-02-at-12-26-51.jpg"
    },
    {
      id: 4,
      date: "2025-06-04",
      title: "Nuestra Primer Salida",
      desc: "Fuimos al cine, vimos \"Destino Final-Lazos de Sangre\", y esa noche pude por primera vez saludar a tu mamá, me sentí muy nervioso y no quería que se me note, pero agradecí mucho el poder hacerlo❤️.",
      img: "https://i.postimg.cc/g2B9VQww/Whats-App-Image-2026-05-31-at-09-42-19.jpg"
    },
    {
      id: 5,
      date: "2025-06-30",
      title: "Cumpleaños Michela-2025",
      desc: "Sabia que ése día ambos íbamos a estar con nuestros propios pendientes, pero quería hacer algo, y con lo que habíamos compartido hasta aquel día, sabía lo que quería darte, así que venía anticipándome, aunque creíste que lo había olvidado JJSJSJ.",
      img: "https://i.postimg.cc/V64rnf4B/Whats-App-Image-2026-06-02-at-12-49-13.jpg"
    },
    {
      id: 6,
      date: "2025-10-10",
      title: "Graduación Eduardo",
      desc: "Aquel día no solo estaba feliz por poder graduarme como paramédico, sino que también sería el día en donde le presentaría a mi mamá, la mujer que últimamente me hacía tan feliz ❤️🩹.",
      img: "https://i.postimg.cc/t4V3CVHC/Whats-App-Image-2026-05-31-at-10-19-02.jpg"
    },
    {
      id: 7,
      date: "2025-11-09",
      title: "Novios!!",
      desc: "Poder escuchar a tu mamá, poder tener su confianza de viajar juntos al sitio, y poder confesar mis sentimientos e intenciones hacia ti y el que me dieras la oportunidad de ser parte de tu vida, es algo por lo que siempre estaré agradecido contigo, tu mamá y Dios❤️🩹.",
      img: "https://i.postimg.cc/wxhQDNtt/Whats-App-Image-2026-05-31-at-10-03-29.jpg"
    },
    {
      id: 8,
      date: "2025-12-09",
      title: "Graduación Michela",
      desc: "Uno de los días donde más pudimos compartir junto a su mamá, me sentía muy nervioso, pero era algo que me hizo mucha ilusión, ya que cumpliamos de hecho el primer mes de novios❤️🩹",
      img: "https://i.postimg.cc/RCfnjz4x/Whats-App-Image-2026-05-31-at-09-53-10.jpg"
    },
    {
      id: 9,
      date: "2026-03-02",
      title: "Quito!",
      desc: "Un viaje que agradezco demasiado haber aceptado, pude conocer más facetas tuyas, y poder notar que en serio eres enemiga de Google Maps sjsk, y también notar de mejor manera lo feliz que me hacias y como me sacabas de mi burbuja de estrés❤️🩹.",
      img: "https://i.postimg.cc/Pfp2bJBn/Whats-App-Image-2026-06-02-at-12-59-21.jpg"
    },
    {
      id: 10,
      date: "2026-05-28",
      title: "Cumpleaños Eduardo-2026",
      desc: "No imaginas la bomba de sentimiento que me generó el ver que estuviste ahí al primer minuto del día 28, y poder leerse se sintió lindo, trasmitiéndome esa paz que siempre te ha caracterizado, ¡gracias! ❤️🩹✨.",
      img: "https://i.postimg.cc/YC939SfK/Whats-App-Image-2026-06-02-at-13-14-52.jpg"
    },
    {
      id: 11,
      date: "2026-06-30",
      title: "Cumpleaños Michela-2026",
      desc: "Espero que hoy sea un día especial para ti y puedas disfrutar con familia, amigos y toda la gente que te quiere, porque mereces todo lo lindo del mundo Michela,❤️🩹 ✨",
      img: "https://i.postimg.cc/BQTxHLps/FFCC.png"
    }
  ],
  gallery: [
    {
      id: 1,
      title: "EL Día Que Te Conocí",
      date: "2025-05-05",
      desc: "En un turno que estaba iniciando de una manera muy aburrida en el hospital, apareciste. Un cruce de miradas y una breve charla, bastó para poder conocer lo cálido de tu alma.",
      img: "https://i.postimg.cc/RCjxFx7x/Whats-App-Image-2026-05-29-at-22-49-20-(1).jpg"
    },
    {
      id: 2,
      title: "Nuestro Primer Beso",
      date: "2025-05-20",
      desc: "Durante una noche lluviosa y nublada, después de hablar en la terraza del Hospital D.G.D, mientras veíamos a la ciudad y luego de un cálido abrazo ❤️.",
      img: "https://i.postimg.cc/MHT1hz2d/Whats-App-Image-2026-05-30-at-19-56-59.jpg"
    },
    {
      id: 3,
      title: "Cumpleaños Eduardo-2025",
      date: "2025-05-26",
      desc: "Algo que para nada me esperaba, se me hizo muy lindo de tu parte, quedé sin palabras, incluso con ganitas de que se me salgan unas lágrimas.",
      img: "https://i.postimg.cc/8zy0KM5L/Whats-App-Image-2026-06-02-at-12-26-51.jpg"
    },
    {
      id: 4,
      title: "Nuestra Primer Salida",
      date: "2025-06-04",
      desc: "Fuimos al cine, vimos \"Destino Final-Lazos de Sangre\", y esa noche pude por primera vez saludar a tu mamá.",
      img: "https://i.postimg.cc/g2B9VQww/Whats-App-Image-2026-05-31-at-09-42-19.jpg"
    },
    {
      id: 5,
      title: "Cumpleaños Michela-2025",
      date: "2025-06-30",
      desc: "Sabia que ése día ambos íbamos a estar con nuestros propios pendientes, pero quería hacer algo.",
      img: "https://i.postimg.cc/V64rnf4B/Whats-App-Image-2026-06-02-at-12-49-13.jpg"
    },
    {
      id: 6,
      title: "Graduación Eduardo",
      date: "2025-10-10",
      desc: "Aquel día no solo estaba feliz por poder graduarme como paramédico, sino que también sería el día en donde le presentaría a mi mamá.",
      img: "https://i.postimg.cc/t4V3CVHC/Whats-App-Image-2026-05-31-at-10-19-02.jpg"
    },
    {
      id: 7,
      title: "Novios!!",
      date: "2025-11-09",
      desc: "Poder escuchar a tu mamá, poder tener su confianza de viajar juntos al sitio, y poder confesar mis sentimientos e intenciones hacia ti.",
      img: "https://i.postimg.cc/wxhQDNtt/Whats-App-Image-2026-05-31-at-10-03-29.jpg"
    },
    {
      id: 8,
      title: "Graduación Michela",
      date: "2025-12-09",
      desc: "Uno de los días donde más pudimos compartir junto a su mamá, me sentía muy nervioso, pero era algo que me hizo mucha ilusión, ya que cumpliamos de hecho el primer mes de novios❤️🩹",
      img: "https://i.postimg.cc/RCfnjz4x/Whats-App-Image-2026-05-31-at-09-53-10.jpg"
    },
    {
      id: 9,
      title: "Quito!",
      date: "2026-03-02",
      desc: "Un viaje que agradezco demasiado haber aceptado, pude conocer más facetas tuyas.",
      img: "https://i.postimg.cc/Pfp2bJBn/Whats-App-Image-2026-06-02-at-12-59-21.jpg"
    },
    {
      id: 10,
      title: "Cumpleaños Eduardo-2026",
      date: "2026-05-28",
      desc: "No imaginas la bomba de sentimiento que me generó el ver que estuviste ahí al primer minuto del día 28.",
      img: "https://i.postimg.cc/YC939SfK/Whats-App-Image-2026-06-02-at-13-14-52.jpg"
    },
    {
      id: 11,
      title: "Cumpleaños Michela-2026",
      date: "2026-06-30",
      desc: "Espero que hoy sea un día especial para ti y puedas disfrutar con familia, amigos y toda la gente que te quiere.",
      img: "https://i.postimg.cc/BQTxHLps/FFCC.png"
    }
  ],
  letters: [
    {
      id: 1,
      title: "Gracias!!",
      date: "00/00/0000",
      sender: "Eduardo",
      receiver: "Michela",
      text: "En serio, muchas gracias michela, ahora no sólo por haberme permitido ser parte de tu vida, sino por haber aparecido en la mía, trajiste paz, de un modo que no te imaginas.\n\nY el hecho de que mi mamá piense cada que le aviso que voy a salir, que es porque me voy a ver contigo, hace que caiga cada vez más en cuenta lo feliz que fui.\n\nDurante el tiempo que compartimos juntos, sentí que al fin pertenecía a un lugar, tuve por segunda vez un motivo por el cuál esforzarme y ser alguien. el primero como sabes fue vivir aquello con mi mamá en el hospital.\n\nDebí abrazarte más la última vez, pero aun así no me siento mal, ya que nunca olvidaré las veces que sí lo hice.\n\nTu devolviste sentido a mi vida, espero que Dios esté siempre contigo, porque lo mereces, eres increíble, así que ¡¡Ánimos!!  te estaré apoyando en silencio❤️🩹"
    },
    {
      id: 2,
      title: "Sobre Quito",
      date: "02/03/2026",
      sender: "Eduardo",
      receiver: "Michela",
      text: "Debo aceptar que en parte ya me había desanimado, era algo complicado, te salieron cosas de último momento, hasta cambiaste el horario, y para serte sincero yo ni siquiera había solicitado el permiso en el trabajo, pero ya me había comprometido y fui, e incluso estando allá pensé en regresarme, pero no sé, me quedé, y fue una buena elección, tanta que hasta mi estrés desapareció y pude dormir tan rápido y tan profundo que cuando desperté ni lo creía, no sé cuánto habría pasado desde que no dormía de ésa manera.\n\nY así hubieron muchas ocasiones en las que no sabia cómo reaccionar con lo que me hacías vivir, solo puedo sentir una profunda gratitud por la relación tan bonita que construimos, eres increíble y por eso tendrás siempre mis mejores deseos✨."
    },
    {
      id: 3,
      title: "LO SIENTO",
      date: "11/11/1111",
      sender: "Eduardo",
      receiver: "Michela",
      text: "Por no haber sido quizá el hombre que esperabas, por no saber manejar mis emociones, por no saber cuidar las tuyas, por no saber gestionar mi estrés, por no notar cambios en ti, por no minimizar las cosas, por exagerar las cosas, por no poder haber podido estado presente, por alejarnos cuando debí mantenernos cerca, por todas esas veces en las que te responsabilicé en tomar una decisión pensando que te daba libertad, por todas esas promesas que no se cumplirán, porque nunca quise lastimarte, Perdón."
    },
    {
      id: 4,
      title: "Nothing's New",
      date: "22/22/2222",
      sender: "Eduardo",
      receiver: "Michela",
      text: "Si por azares del destino, que de hecho no creo en ello, pero si por voluntad de Dios, nuestros caminos se llegaran a topar algún día, podría asegurar que yo no habría cambiado demasiado, seguiría tendiendo los mismos colores favoritos, escucharía la misma música, y me gustarían las mismas cosas, pero tendría las dudas de si a ti te seguirían gustando las fresas con crema, los gatos, el jugo de maracuyá, el número 4, la bachata, la letra V, si aun te gustarían las medusas, o el suchi jsjs, pero aún así, de lo que no tendría dudas es de que tu lugar en mi corazón seguiría estando ahí, a pesar del tiempo transcurrido, Así que, oraré siempre por tu felicidad, y que nuestras acciones sean sólo la excusa para que la mano de Dios obre en nuestras vidas✨."
    }
  ]
};

// Objeto de datos activo en memoria
let db = {};

// Estados del Sistema
let isAdminMode = false;
let activeLightboxIndex = 0;
let lightboxPlaylist = [];
let lightboxInterval = null;
let relationshipInterval = null;
let draggedMomentId = null;
let activeDragSticker = null;
let currentViewingLetter = null;

// Sincronización Global
window.syncDatabaseWithStorage = function() {
  saveDBToLocalStorage();
};

/**
 * INICIALIZACIÓN DE LA APLICACIÓN
 */
document.addEventListener("DOMContentLoaded", () => {
  loadDatabase();
  initTheme();
  initAccentTheme();
  initParticlesEngine();
  initRelationshipTimer();
  renderNavbarTabs();
  renderGlobalUIElements();
  renderTimeline();
  renderGallery();
  renderLettersGrid();
  setupEventListeners();
  setupScrollReveal();
  renderStickers();
  
  // Inicializar playlist musical
  MusicPlayer.playlist = db.playlist || MusicPlayer.playlist;
  MusicPlayer.loadPlaylistFromStorage();
  MusicPlayer.init();
  applyHeroBgImage(db.heroBgImage || "");
});

/**
 * ADMINISTRACIÓN DE BASE DE DATOS (LOCALSTORAGE & SHARE LINKS)
 */
function loadDatabase() {
  // Comprobar enlace compartido
  const sharedData = SharePDFUtils.getSharedDataFromURL();
  if (sharedData) {
    db = sharedData;
    showToast("Álbum compartido cargado correctamente", "success");
    createSaveSharedDataBanner();
  } else {
    // Cargar de LocalStorage
    const localData = localStorage.getItem("scrapbook_db_v5");
    if (localData) {
      try {
        db = JSON.parse(localData);
        // Migración/Compatibilidad básica por si faltaran llaves
        db.navTabs = db.navTabs || DEFAULT_DATABASE.navTabs;
        db.animationSettings = db.animationSettings || DEFAULT_DATABASE.animationSettings;
        db.letters = db.letters || DEFAULT_DATABASE.letters;
        db.footerTagline = db.footerTagline || DEFAULT_DATABASE.footerTagline;
        db.footerCopyright = db.footerCopyright || DEFAULT_DATABASE.footerCopyright;
        db.logoText = db.logoText || DEFAULT_DATABASE.logoText;
        db.accentTheme = db.accentTheme || DEFAULT_DATABASE.accentTheme;
        db.heroBgImage = db.heroBgImage || DEFAULT_DATABASE.heroBgImage;
        db.timelineTitle = db.timelineTitle || DEFAULT_DATABASE.timelineTitle;
        db.timelineSubtitle = db.timelineSubtitle || DEFAULT_DATABASE.timelineSubtitle;
        db.galleryTitle = db.galleryTitle || DEFAULT_DATABASE.galleryTitle;
        db.gallerySubtitle = db.gallerySubtitle || DEFAULT_DATABASE.gallerySubtitle;
        db.lettersTitle = db.lettersTitle || DEFAULT_DATABASE.lettersTitle;
        db.lettersSubtitle = db.lettersSubtitle || DEFAULT_DATABASE.lettersSubtitle;
      } catch (e) {
        console.error("Error al cargar base de datos local", e);
        db = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
      }
    } else {
      // Primera carga, clonar el objeto por defecto
      db = JSON.parse(JSON.stringify(DEFAULT_DATABASE));
      saveDBToLocalStorage();
    }
  }
  db.stickers = db.stickers || [];
  // Limpiar clave legacy que causaba conflicto con canciones guardadas
  localStorage.removeItem('memory_playlist_v2');
}

function saveDBToLocalStorage() {
  db.playlist = MusicPlayer.playlist;
  localStorage.setItem("scrapbook_db_v5", JSON.stringify(db));
}

function createSaveSharedDataBanner() {
  if (document.getElementById("shared-album-banner")) return;
  
  const div = document.createElement("div");
  div.id = "shared-album-banner";
  div.className = "glass-card animate-slide-up";
  div.style.position = "fixed";
  div.style.top = "90px";
  div.style.left = "50%";
  div.style.transform = "translateX(-50%)";
  div.style.zIndex = "80";
  div.style.padding = "10px 20px";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.gap = "14px";
  div.style.borderRadius = "30px";
  div.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
  
  div.innerHTML = `
    <span style="font-size:0.8rem;font-weight:500;color:var(--text-primary);"><i class="fa-solid fa-cloud-arrow-down" style="color:var(--accent-rose);"></i> Estás viendo un álbum compartido.</span>
    <button id="btn-save-shared-local" class="btn-primary btn-small"><i class="fa-solid fa-check"></i> Guardar en mi equipo</button>
    <button id="btn-close-shared-banner" style="background:none;border:none;cursor:pointer;font-size:1.1rem;color:var(--text-secondary);">&times;</button>
  `;
  
  document.body.appendChild(div);
  
  document.getElementById("btn-save-shared-local").addEventListener("click", () => {
    saveDBToLocalStorage();
    showToast("Álbum guardado localmente de forma permanente", "success");
    div.remove();
    window.history.replaceState(null, null, window.location.pathname);
  });
  
  document.getElementById("btn-close-shared-banner").addEventListener("click", () => {
    div.remove();
  });
}

/**
 * SISTEMA DE TEMAS (Claro/Oscuro)
 */
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  const body = document.body;
  const themeBtnIcon = document.querySelector("#btn-theme-toggle i");
  
  if (savedTheme === "dark") {
    body.className = "theme-dark";
    themeBtnIcon.className = "fa-solid fa-sun";
  } else {
    body.className = "theme-light";
    themeBtnIcon.className = "fa-solid fa-moon";
  }
}

function toggleTheme() {
  const body = document.body;
  const themeBtnIcon = document.querySelector("#btn-theme-toggle i");
  
  if (body.classList.contains("theme-light")) {
    body.className = "theme-dark";
    themeBtnIcon.className = "fa-solid fa-sun";
    localStorage.setItem("theme", "dark");
    showToast("Tema oscuro activado", "success");
  } else {
    body.className = "theme-light";
    themeBtnIcon.className = "fa-solid fa-moon";
    localStorage.setItem("theme", "light");
    showToast("Tema claro activado", "success");
  }
}

/**
 * SISTEMA DE TONO DE ACENTO (Rosa / Azul Pastel)
 */
const PASTEL_THEMES = ["rose", "blue", "mint", "lavender", "peach", "lilac", "sage", "yellow"];
const PASTEL_THEME_NAMES = {
  rose: "Rosa Pastel",
  blue: "Azul Pastel",
  mint: "Verde Menta",
  lavender: "Lavanda Pastel",
  peach: "Melocotón Pastel",
  lilac: "Lila Pastel",
  sage: "Verde Salvia",
  yellow: "Amarillo Pastel"
};

function initAccentTheme() {
  const accent = db.accentTheme || "rose";
  applyAccentTheme(accent);
}

function applyAccentTheme(accent) {
  const body = document.body;
  PASTEL_THEMES.forEach(t => body.classList.remove(`accent-${t}`));
  body.classList.add(`accent-${accent}`);
}

function toggleAccentTheme() {
  const currentAccent = db.accentTheme || "rose";
  let idx = PASTEL_THEMES.indexOf(currentAccent);
  if (idx === -1) idx = 0;
  const newAccent = PASTEL_THEMES[(idx + 1) % PASTEL_THEMES.length];
  db.accentTheme = newAccent;
  saveDBToLocalStorage();
  applyAccentTheme(newAccent);
  
  // Regenerar partículas para que adopten el color del tema
  initParticlesEngine();
  
  showToast(`Tono ${PASTEL_THEME_NAMES[newAccent]} activado`, "success");
}

/**
 * APLICAR FOTO DE PORTADA (FONDO HERO)
 */
function applyHeroBgImage(dataUrlOrUrl) {
  const heroBg = document.getElementById("hero-bg");
  if (!heroBg) return;
  if (dataUrlOrUrl) {
    heroBg.style.backgroundImage = `url('${dataUrlOrUrl}')`;
    heroBg.style.backgroundSize = "cover";
    heroBg.style.backgroundPosition = "center";
  } else {
    heroBg.style.backgroundImage = "";
  }
}

/**
 * MOTOR DE LIENZO DE PARTÍCULAS AJUSTABLES EN TIEMPO REAL
 */
let particleList = [];
let maxParticles = 35;
let particleBaseSpeed = 1.0;

function updateParticleIcon(mode) {
  const icon = document.querySelector("#btn-particle-toggle i");
  if (!icon) return;
  const iconClasses = {
    leaves: "fa-solid fa-leaf",
    hearts: "fa-solid fa-heart",
    flowers: "fa-solid fa-seedling",
    rain: "fa-solid fa-cloud-showers-water",
    snow: "fa-solid fa-snowflake",
    sparkles: "fa-solid fa-wand-magic-sparkles",
    music: "fa-solid fa-music",
    bubbles: "fa-solid fa-circle-dot",
    off: "fa-solid fa-ban"
  };
  icon.className = iconClasses[mode] || iconClasses.off;
}

function initParticlesEngine() {
  const canvas = document.getElementById("canvas-particles");
  const ctx = canvas.getContext("2d");
  
  // Cargar propiedades físicas de la base de datos
  const settings = db.animationSettings || DEFAULT_DATABASE.animationSettings;
  maxParticles = settings.count || 35;
  particleBaseSpeed = (settings.speed || 10) / 10;
  
  // Sincronizar el icono del navbar
  updateParticleIcon(settings.mode);
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.removeEventListener("resize", resizeCanvas);
  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();
  
  class Particle {
    constructor() {
      this.reset();
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.size = Math.random() * 8 + 6;
      this.speedY = (Math.random() * 0.8 + 0.4) * particleBaseSpeed;
      this.speedX = 0;
      this.angle = 0;
      this.spin = 0;
      this.swing = 0;
      this.swingDir = Math.random() * 100;
      this.opacity = 1;
      this.color = "rgba(0, 0, 0, 0)";
      
      const mode = settings.mode;
      
      if (mode === "leaves" || mode === "flowers") {
        this.y = -20;
        this.speedX = (Math.random() * 1.0 + 0.3) * particleBaseSpeed;
        this.angle = Math.random() * 360;
        this.spin = Math.random() * 1.2 - 0.6;
        if (mode === "leaves") {
          this.color = `rgba(244, ${180 + Math.floor(Math.random() * 40)}, ${180 + Math.floor(Math.random() * 40)}, ${Math.random() * 0.35 + 0.3})`;
        } else {
          const flowerColors = [
            `rgba(240, 170, 190, ${Math.random() * 0.35 + 0.45})`,
            `rgba(210, 180, 230, ${Math.random() * 0.35 + 0.45})`,
            `rgba(250, 200, 180, ${Math.random() * 0.35 + 0.45})`,
            `rgba(170, 210, 230, ${Math.random() * 0.35 + 0.45})`,
            `rgba(245, 230, 170, ${Math.random() * 0.35 + 0.45})`
          ];
          this.color = flowerColors[Math.floor(Math.random() * flowerColors.length)];
        }
      } else if (mode === "rain") {
        this.y = Math.random() * -50 - 20;
        this.size = Math.random() * 20 + 15; // Largo de la línea
        this.speedY = (Math.random() * 5 + 6) * particleBaseSpeed;
        this.speedX = (Math.random() * -1.5 - 0.5) * particleBaseSpeed;
        this.opacity = Math.random() * 0.25 + 0.15;
        this.color = `rgba(174, 219, 240, ${this.opacity})`;
      } else if (mode === "snow") {
        this.y = -20;
        this.size = Math.random() * 4 + 2;
        this.speedY = (Math.random() * 0.6 + 0.4) * particleBaseSpeed;
        this.speedX = (Math.random() * 0.3 - 0.15) * particleBaseSpeed;
        this.swing = Math.random() * 0.03 + 0.01;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
      } else if (mode === "sparkles") {
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 3;
        this.speedY = (Math.random() * -0.3 - 0.1) * particleBaseSpeed;
        this.speedX = (Math.random() * 0.4 - 0.2) * particleBaseSpeed;
        this.opacity = 0;
        this.fadeDirection = 1;
        this.fadeSpeed = Math.random() * 0.01 + 0.005;
        this.maxOpacity = Math.random() * 0.7 + 0.3;
      } else if (mode === "music") {
        this.y = canvas.height + 20;
        this.size = Math.random() * 10 + 12; // Tamaño fuente
        this.speedY = -(Math.random() * 0.8 + 0.4) * particleBaseSpeed;
        this.speedX = (Math.random() * 0.4 - 0.2) * particleBaseSpeed;
        this.swing = Math.random() * 0.04 + 0.01;
        this.opacity = Math.random() * 0.35 + 0.25;
        this.noteType = ["♪", "♫", "♬", "♩"][Math.floor(Math.random() * 4)];
        
        const musicColors = {
          rose: `rgba(${220 + Math.floor(Math.random() * 35)}, ${130 + Math.floor(Math.random() * 30)}, ${130 + Math.floor(Math.random() * 30)}, ${this.opacity})`,
          blue: `rgba(${130 + Math.floor(Math.random() * 30)}, ${180 + Math.floor(Math.random() * 30)}, ${220 + Math.floor(Math.random() * 25)}, ${this.opacity})`,
          mint: `rgba(${140 + Math.floor(Math.random() * 30)}, ${210 + Math.floor(Math.random() * 20)}, ${170 + Math.floor(Math.random() * 30)}, ${this.opacity})`,
          lavender: `rgba(${180 + Math.floor(Math.random() * 30)}, ${160 + Math.floor(Math.random() * 30)}, ${210 + Math.floor(Math.random() * 20)}, ${this.opacity})`,
          peach: `rgba(${220 + Math.floor(Math.random() * 15)}, ${170 + Math.floor(Math.random() * 25)}, ${150 + Math.floor(Math.random() * 30)}, ${this.opacity})`,
          lilac: `rgba(${210 + Math.floor(Math.random() * 20)}, ${160 + Math.floor(Math.random() * 30)}, ${190 + Math.floor(Math.random() * 30)}, ${this.opacity})`,
          sage: `rgba(${170 + Math.floor(Math.random() * 20)}, ${190 + Math.floor(Math.random() * 20)}, ${160 + Math.floor(Math.random() * 30)}, ${this.opacity})`,
          yellow: `rgba(${220 + Math.floor(Math.random() * 15)}, ${210 + Math.floor(Math.random() * 20)}, ${140 + Math.floor(Math.random() * 30)}, ${this.opacity})`
        };
        this.color = musicColors[db.accentTheme] || musicColors.rose;
      } else if (mode === "bubbles") {
        this.y = canvas.height + 30;
        this.size = Math.random() * 12 + 6; // Radio
        this.speedY = -(Math.random() * 0.6 + 0.3) * particleBaseSpeed;
        this.speedX = (Math.random() * 0.4 - 0.2) * particleBaseSpeed;
        this.swing = Math.random() * 0.03 + 0.01;
        this.opacity = Math.random() * 0.2 + 0.1;
      } else {
        // Modo "hearts" por defecto
        this.y = canvas.height + 20;
        this.speedY = -(Math.random() * 0.8 + 0.3) * particleBaseSpeed;
        this.speedX = (Math.random() * 0.6 - 0.3) * particleBaseSpeed;
        this.swing = Math.random() * 0.04 + 0.01;
        
        const heartColors = {
          rose: `rgba(${220 + Math.floor(Math.random() * 35)}, ${130 + Math.floor(Math.random() * 30)}, ${130 + Math.floor(Math.random() * 30)}, ${Math.random() * 0.35 + 0.3})`,
          blue: `rgba(${150 + Math.floor(Math.random() * 30)}, ${200 + Math.floor(Math.random() * 30)}, ${230 + Math.floor(Math.random() * 25)}, ${Math.random() * 0.35 + 0.3})`,
          mint: `rgba(${170 + Math.floor(Math.random() * 30)}, ${230 + Math.floor(Math.random() * 20)}, ${190 + Math.floor(Math.random() * 30)}, ${Math.random() * 0.35 + 0.3})`,
          lavender: `rgba(${200 + Math.floor(Math.random() * 30)}, ${180 + Math.floor(Math.random() * 30)}, ${230 + Math.floor(Math.random() * 20)}, ${Math.random() * 0.35 + 0.3})`,
          peach: `rgba(${240 + Math.floor(Math.random() * 15)}, ${190 + Math.floor(Math.random() * 25)}, ${170 + Math.floor(Math.random() * 30)}, ${Math.random() * 0.35 + 0.3})`,
          lilac: `rgba(${230 + Math.floor(Math.random() * 20)}, ${180 + Math.floor(Math.random() * 30)}, ${210 + Math.floor(Math.random() * 30)}, ${Math.random() * 0.35 + 0.3})`,
          sage: `rgba(${190 + Math.floor(Math.random() * 20)}, ${210 + Math.floor(Math.random() * 20)}, ${180 + Math.floor(Math.random() * 30)}, ${Math.random() * 0.35 + 0.3})`,
          yellow: `rgba(${240 + Math.floor(Math.random() * 15)}, ${230 + Math.floor(Math.random() * 20)}, ${160 + Math.floor(Math.random() * 30)}, ${Math.random() * 0.35 + 0.3})`
        };
        this.color = heartColors[db.accentTheme] || heartColors.rose;
      }
    }
    
    update() {
      const mode = settings.mode;
      
      if (mode === "leaves" || mode === "flowers") {
        this.y += this.speedY;
        this.x += this.speedX;
        this.angle += this.spin;
        
        if (this.y > canvas.height + 20 || this.x > canvas.width + 20) {
          this.reset();
        }
      } else if (mode === "rain") {
        this.y += this.speedY;
        this.x += this.speedX;
        
        if (this.y > canvas.height + 20 || this.x < -20) {
          this.reset();
        }
      } else if (mode === "snow") {
        this.y += this.speedY;
        this.swingDir += this.swing;
        this.x += Math.sin(this.swingDir) * 0.35 + this.speedX;
        
        if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
          this.reset();
        }
      } else if (mode === "sparkles") {
        this.y += this.speedY;
        this.x += this.speedX;
        this.opacity += this.fadeSpeed * this.fadeDirection;
        
        if (this.opacity >= this.maxOpacity) {
          this.opacity = this.maxOpacity;
          this.fadeDirection = -1;
        }
        
        if ((this.opacity <= 0 && this.fadeDirection === -1) || this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
          this.reset();
        }
      } else {
        // Alza vertical (hearts, music, bubbles)
        this.y += this.speedY;
        this.swingDir += this.swing;
        this.x += Math.sin(this.swingDir) * (mode === "bubbles" ? 0.6 : 0.4) + this.speedX;
        
        if (this.y < -30 || this.x < -30 || this.x > canvas.width + 30) {
          this.reset();
        }
      }
    }
    
    draw() {
      const mode = settings.mode;
      ctx.save();
      
      if (mode === "rain") {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x + this.speedX * 1.5, this.y + this.size);
        ctx.stroke();
      } else if (mode === "snow") {
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, 2 * Math.PI);
        ctx.fill();
      } else if (mode === "sparkles") {
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.moveTo(0, -this.size);
        ctx.quadraticCurveTo(0, 0, this.size, 0);
        ctx.quadraticCurveTo(0, 0, 0, this.size);
        ctx.quadraticCurveTo(0, 0, -this.size, 0);
        ctx.quadraticCurveTo(0, 0, 0, -this.size);
        ctx.closePath();
        ctx.fillStyle = `rgba(255, 242, 160, ${this.opacity})`;
        ctx.fill();
      } else if (mode === "music") {
        ctx.translate(this.x, this.y);
        ctx.font = `${this.size}px Arial, Helvetica, sans-serif`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.noteType, 0, 0);
      } else if (mode === "bubbles") {
        ctx.translate(this.x, this.y);
        ctx.beginPath();
        ctx.arc(0, 0, this.size, 0, 2 * Math.PI);
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
        
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.15})`;
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(-this.size * 0.4, -this.size * 0.4, this.size * 0.25, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 1.8})`;
        ctx.fill();
      } else {
        // leaves, flowers, hearts
        ctx.translate(this.x, this.y);
        ctx.fillStyle = this.color;
        
        if (mode === "leaves") {
          ctx.rotate((this.angle * Math.PI) / 180);
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size, this.size / 2, 0, 0, 2 * Math.PI);
          ctx.fill();
        } else if (mode === "flowers") {
          ctx.rotate((this.angle * Math.PI) / 180);
          ctx.beginPath();
          const numPetals = 5;
          const radius = this.size;
          for (let i = 0; i < numPetals; i++) {
            const angle = (i * 2 * Math.PI) / numPetals;
            const px = Math.cos(angle) * (radius * 0.5);
            const py = Math.sin(angle) * (radius * 0.5);
            ctx.arc(px, py, radius * 0.38, 0, 2 * Math.PI);
          }
          ctx.fill();
          ctx.beginPath();
          ctx.fillStyle = "rgba(255, 235, 140, 0.95)";
          ctx.arc(0, 0, radius * 0.22, 0, 2 * Math.PI);
          ctx.fill();
        } else {
          // hearts
          ctx.beginPath();
          const w = this.size;
          const h = this.size;
          ctx.moveTo(0, -h / 4);
          ctx.bezierCurveTo(-w / 2, -h * 0.7, -w, -h * 0.1, 0, h / 2);
          ctx.bezierCurveTo(w, -h * 0.1, w / 2, -h * 0.7, 0, -h / 4);
          ctx.fill();
        }
      }
      
      ctx.restore();
    }
  }
  
  // Re-poblar partículas
  function rebuildParticles() {
    particleList = [];
    for (let i = 0; i < maxParticles; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      particleList.push(p);
    }
  }
  
  rebuildParticles();
  
  // Exponer reconstrucción para sliders interactivos
  window.triggerParticlesRebuilt = function() {
    maxParticles = db.animationSettings.count;
    particleBaseSpeed = db.animationSettings.speed / 10;
    updateParticleIcon(db.animationSettings.mode);
    rebuildParticles();
  };

  function animateLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (settings.mode !== "off") {
      particleList.forEach((p) => {
        p.update();
        p.draw();
      });
    }
    
    requestAnimationFrame(animateLoop);
  }
  
  animateLoop();
}

/**
 * CONTADOR DE TIEMPO (TIMER DE ANIVERSARIO)
 */
function initRelationshipTimer() {
  if (relationshipInterval) clearInterval(relationshipInterval);
  
  document.getElementById("timer-label").textContent = db.timerLabel || "Tiempo transcurrido desde el inicio de nuestra historia:";
  
  function updateTimer() {
    const startDate = new Date(db.timerStartDate || "2023-09-21T19:30:00");
    const now = new Date();
    
    const diffMs = Math.abs(now - startDate);
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHours = Math.floor(diffMins / 60);
    const totalDays = Math.floor(diffHours / 24);
    
    const displayYears = Math.floor(totalDays / 365);
    const displayMonths = Math.floor((totalDays % 365) / 30);
    const displayDays = Math.floor((totalDays % 365) % 30);
    const displayHours = diffHours % 24;
    const displayMins = diffMins % 60;
    const displaySecs = diffSecs % 60;
    
    document.getElementById("t-years").textContent = String(displayYears).padStart(2, "0");
    document.getElementById("t-months").textContent = String(displayMonths).padStart(2, "0");
    document.getElementById("t-days").textContent = String(displayDays).padStart(2, "0");
    document.getElementById("t-hours").textContent = String(displayHours).padStart(2, "0");
    document.getElementById("t-mins").textContent = String(displayMins).padStart(2, "0");
    document.getElementById("t-secs").textContent = String(displaySecs).padStart(2, "0");
  }
  
  updateTimer();
  relationshipInterval = setInterval(updateTimer, 1000);
}

/**
 * ENLACES DEL NAVBAR Y TEXTOS GLOBALES DINÁMICOS
 */
function renderNavbarTabs() {
  const tabs = db.navTabs || DEFAULT_DATABASE.navTabs;
  
  document.getElementById("nav-tab-home").textContent = tabs.home;
  document.getElementById("nav-tab-dedication").textContent = tabs.dedication;
  document.getElementById("nav-tab-timeline").textContent = tabs.timeline;
  document.getElementById("nav-tab-gallery").textContent = tabs.gallery;
  document.getElementById("nav-tab-letters").textContent = tabs.letters;
  
  // Logotipo personalizable
  document.getElementById("nav-title-logo").textContent = db.logoText || DEFAULT_DATABASE.logoText;
}

function renderGlobalUIElements() {
  // Footer
  document.getElementById("lbl-footer-tagline").textContent = db.footerTagline || DEFAULT_DATABASE.footerTagline;
  document.getElementById("lbl-footer-copyright").innerHTML = db.footerCopyright || DEFAULT_DATABASE.footerCopyright;
}

/**
 * RECONSTRUIR LÍNEA DE TIEMPO (TIMELINE)
 */
function renderTimeline() {
  const container = document.getElementById("timeline-flow");
  container.innerHTML = "";
  
  // Usar el orden directo del arreglo para permitir reordenamiento manual
  const items = [...db.timeline];
  
  if (items.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align:center;padding:30px;max-width:600px;margin:0 auto;">
        <p style="color:var(--text-secondary);">No hay momentos registrados todavía.</p>
        ${isAdminMode ? '<button class="btn-primary" onclick="openAddMomentModal(\'timeline\')" style="margin-top:14px;"><i class="fa-solid fa-plus"></i> Añadir primer momento</button>' : ''}
      </div>
    `;
    return;
  }
  
  items.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    const div = document.createElement("div");
    div.className = `timeline-item ${isLeft ? 'left' : 'right'} scroll-reveal`;
    
    const dateObj = new Date(item.date + "T00:00:00");
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateFormatted = dateObj.toLocaleDateString('es-ES', options);

    div.innerHTML = `
      <div class="timeline-node"></div>
      <div class="timeline-content-card">
        ${item.img ? `
          <div class="timeline-img-wrapper">
            <img src="${item.img}" alt="${item.title}" class="timeline-img">
            <span class="timeline-badge">${dateFormatted}</span>
          </div>
        ` : `<div style="padding:10px 0;"><span class="timeline-badge" style="position:static;margin-left:24px;">${dateFormatted}</span></div>`}
        
        <div class="timeline-info">
          <h3 class="timeline-item-title">${item.title}</h3>
          <p class="timeline-item-desc">${item.desc}</p>
        </div>
        
        <div class="timeline-card-actions btn-admin-only" style="display: ${isAdminMode ? 'flex' : 'none'};">
          <button class="btn-icon btn-small btn-secondary" onclick="openEditMomentModal(${item.id}, 'timeline')" title="Editar momento">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button class="btn-icon btn-small btn-danger" onclick="deleteMoment(${item.id})" title="Eliminar momento">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    `;
    
    // Configurar Drag and Drop para reordenamiento
    if (isAdminMode) {
      div.setAttribute("draggable", "true");
      
      div.addEventListener("dragstart", (e) => {
        draggedMomentId = item.id;
        e.dataTransfer.effectAllowed = "move";
        div.classList.add("dragging");
      });
      
      div.addEventListener("dragend", () => {
        div.classList.remove("dragging");
        document.querySelectorAll(".timeline-item").forEach(el => el.classList.remove("drag-over"));
      });
      
      div.addEventListener("dragover", (e) => {
        e.preventDefault();
        div.classList.add("drag-over");
      });
      
      div.addEventListener("dragleave", () => {
        div.classList.remove("drag-over");
      });
      
      div.addEventListener("drop", (e) => {
        e.preventDefault();
        div.classList.remove("drag-over");
        if (draggedMomentId && draggedMomentId !== item.id) {
          reorderMoments(draggedMomentId, item.id);
        }
      });
    }
    
    container.appendChild(div);
  });
  
  setupScrollReveal();
}

function reorderMoments(draggedId, targetId) {
  const draggedIdx = db.timeline.findIndex(m => m.id === draggedId);
  const targetIdx = db.timeline.findIndex(m => m.id === targetId);
  if (draggedIdx === -1 || targetIdx === -1) return;
  
  const [draggedItem] = db.timeline.splice(draggedIdx, 1);
  db.timeline.splice(targetIdx, 0, draggedItem);
  
  saveDBToLocalStorage();
  renderTimeline();
  showToast("Orden de momentos actualizado", "success");
}

/**
 * RECONSTRUIR REJILLA GALERÍA
 */
function renderGallery(filter = "all") {
  const container = document.getElementById("gallery-grid-container");
  container.innerHTML = "";
  
  let photos = [...db.gallery];
  
  if (filter === "recent") {
    photos.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (filter === "older") {
    photos.sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  
  if (photos.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align:center;padding:30px;grid-column:1/-1;max-width:600px;margin:0 auto;">
        <p style="color:var(--text-secondary);">El álbum fotográfico se encuentra vacío.</p>
      </div>
    `;
    return;
  }
  
  lightboxPlaylist = photos;

  photos.forEach((photo, index) => {
    const card = document.createElement("div");
    card.className = "gallery-card scroll-reveal";
    
    card.innerHTML = `
      <img src="${photo.img}" alt="${photo.title}" class="gallery-card-img">
      <div class="gallery-card-info">
        <h4 class="gallery-card-title">${photo.title}</h4>
        <span class="gallery-card-date">${photo.date}</span>
      </div>
      
      <div class="gallery-card-admin-btns btn-admin-only" style="display: ${isAdminMode ? 'flex' : 'none'};">
        <button class="btn-gallery-action" onclick="event.stopPropagation(); openEditMomentModal(${photo.id}, 'gallery');" title="Editar foto" style="margin-right: 5px;">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button class="btn-gallery-action delete" onclick="event.stopPropagation(); deletePhoto(${photo.id});" title="Eliminar foto">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    
    card.addEventListener("click", () => openLightbox(index));
    container.appendChild(card);
  });
  
  setupScrollReveal();
}

/**
 * RECONSTRUIR CARTAS DE AMOR INDEPENDIENTES (SOBRES VINTAGE VIRTUALES)
 */
function renderLettersGrid() {
  const container = document.getElementById("envelopes-grid-container");
  container.innerHTML = "";
  
  const letters = db.letters || [];
  
  if (letters.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="text-align:center;padding:30px;grid-column:1/-1;max-width:600px;margin:0 auto;">
        <p style="color:var(--text-secondary);">No hay cartas de amor redactadas todavía.</p>
        ${isAdminMode ? '<button class="btn-primary" onclick="openAddLetterModal()" style="margin-top:14px;"><i class="fa-solid fa-feather"></i> Redactar primera carta</button>' : ''}
      </div>
    `;
    return;
  }
  
  letters.forEach((letter) => {
    const envelope = document.createElement("div");
    envelope.className = "envelope-card scroll-reveal";
    
    envelope.innerHTML = `
      <div class="envelope-meta">
        <span>Postal de Amor</span>
        <span>${letter.date}</span>
      </div>
      
      <h3 class="envelope-title">${letter.title}</h3>
      
      <div class="envelope-seal-wrapper">
        <div class="wax-seal" title="Hacer clic para abrir la carta">
          <i class="fa-solid fa-heart"></i>
        </div>
      </div>
      
      <div class="envelope-addresses">
        <span>${letter.sender || 'Remitente'}</span>
        <span>${letter.receiver || 'Destinatario'}</span>
      </div>
      
      <!-- Controles administrativos de cartas -->
      <div class="envelope-admin-btns btn-admin-only" style="display: ${isAdminMode ? 'flex' : 'none'};">
        <button class="btn-gallery-action" onclick="event.stopPropagation(); openEditLetterModal(${letter.id});" title="Editar carta">
          <i class="fa-solid fa-pen"></i>
        </button>
        <button class="btn-gallery-action delete" onclick="event.stopPropagation(); deleteLetter(${letter.id});" title="Eliminar carta">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    `;
    
    // Abrir carta
    envelope.addEventListener("click", () => openLetterViewer(letter));
    container.appendChild(envelope);
  });
  
  setupScrollReveal();
}

/**
 * SISTEMA ENVELOPE / LECTOR PARCHMENT DE CARTA
 */
function openLetterViewer(letter) {
  document.getElementById("view-letter-date").textContent = letter.date;
  document.getElementById("view-letter-sender").textContent = `De: ${letter.sender || 'Remitente'}`;
  document.getElementById("view-letter-receiver").textContent = `Para: ${letter.receiver || 'Destinatario'}`;
  document.getElementById("view-letter-title").textContent = letter.title;
  
  // Dar formato HTML con saltos de párrafo al texto
  const textHtml = letter.text.split("\n\n").map(p => `<p>${p}</p>`).join("");
  document.getElementById("view-letter-text").innerHTML = textHtml;
  
  openModal("modal-letter-viewer");
}

/**
 * ABRIR / CERRAR LIGHTBOX CAROUSEL
 */
function openLightbox(index) {
  if (lightboxPlaylist.length === 0) return;
  activeLightboxIndex = index;
  document.getElementById("gallery-lightbox").classList.add("active");
  updateLightboxContent();
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("gallery-lightbox").classList.remove("active");
  document.body.style.overflow = "auto";
  stopLightboxAutoplay();
}

function updateLightboxContent() {
  const photo = lightboxPlaylist[activeLightboxIndex];
  if (!photo) return;
  
  const img = document.getElementById("lightbox-img");
  const date = document.getElementById("lightbox-date");
  
  img.style.opacity = 0;
  
  setTimeout(() => {
    img.src = photo.img;
    document.getElementById("lightbox-title").textContent = photo.title;
    
    const dateObj = new Date(photo.date + "T00:00:00");
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    date.textContent = dateObj.toLocaleDateString('es-ES', options);
    
    document.getElementById("lightbox-desc").textContent = photo.desc || "";
    document.getElementById("lightbox-counter").textContent = `${activeLightboxIndex + 1} / ${lightboxPlaylist.length}`;
    img.style.opacity = 1;
  }, 150);
}

function nextLightboxImage() {
  activeLightboxIndex = (activeLightboxIndex + 1) % lightboxPlaylist.length;
  updateLightboxContent();
}

function prevLightboxImage() {
  activeLightboxIndex = (activeLightboxIndex - 1 + lightboxPlaylist.length) % lightboxPlaylist.length;
  updateLightboxContent();
}

function toggleLightboxAutoplay() {
  const playBtn = document.getElementById("lightbox-btn-play");
  const icon = playBtn.querySelector("i");
  
  if (lightboxInterval) {
    stopLightboxAutoplay();
    showToast("Carrusel automático de fotos pausado", "success");
  } else {
    icon.className = "fa-solid fa-pause";
    playBtn.classList.add("active");
    showToast("Carrusel automático iniciado", "success");
    lightboxInterval = setInterval(nextLightboxImage, 3000);
  }
}

function stopLightboxAutoplay() {
  const playBtn = document.getElementById("lightbox-btn-play");
  const icon = playBtn.querySelector("i");
  
  if (lightboxInterval) {
    clearInterval(lightboxInterval);
    lightboxInterval = null;
  }
  icon.className = "fa-solid fa-play";
  playBtn.classList.remove("active");
}

/**
 * CONFIGURACIÓN DE EVENT LISTENERS GENERICA
 */
function setupEventListeners() {
  // ---- Menú Hamburger Móvil ----
  const hamburger = document.getElementById("btn-nav-hamburger");
  const navLinksList = document.getElementById("nav-links-list");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinksList.classList.toggle("mobile-open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  // Cerrar menú al hacer clic en un enlace de navegación
  navLinksList.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinksList.classList.remove("mobile-open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Cerrar menú al redimensionar a escritorio
  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      navLinksList.classList.remove("mobile-open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });

  // Controles Navbar
  document.getElementById("btn-theme-toggle").addEventListener("click", toggleTheme);
  document.getElementById("btn-particle-toggle").addEventListener("click", toggleParticles);
  document.getElementById("btn-accent-toggle").addEventListener("click", toggleAccentTheme);
  document.getElementById("btn-share-album").addEventListener("click", openShareModal);
  document.getElementById("btn-download-pdf").addEventListener("click", () => {
    showToast("Generando libreta de recuerdos en PDF para impresión...", "success");
    SharePDFUtils.exportToPDF();
  });
  
  // Dashboard Admin Global
  document.getElementById("btn-global-settings").addEventListener("click", openGlobalSettingsModal);
  document.getElementById("btn-admin-toggle").addEventListener("click", toggleAdminMode);
  
  // Slider Aniversario
  document.getElementById("btn-edit-timer").addEventListener("click", () => {
    openModal("modal-timer-form");
    document.getElementById("timer-start-date").value = db.timerStartDate;
    document.getElementById("timer-custom-label").value = db.timerLabel;
  });

  document.getElementById("timer-form").addEventListener("submit", (e) => {
    e.preventDefault();
    db.timerStartDate = document.getElementById("timer-start-date").value;
    db.timerLabel = document.getElementById("timer-custom-label").value;
    saveDBToLocalStorage();
    initRelationshipTimer();
    closeModal("modal-timer-form");
    showToast("Fecha de aniversario actualizada", "success");
  });

  // Edición in-situ y guardado inmediato por blur
  setupInPlaceTextEditing("nav-title-logo", "logoText");
  setupInPlaceTextEditing("cover-title", "coverTitle");
  setupInPlaceTextEditing("cover-subtitle", "coverSubtitle");
  setupInPlaceTextEditing("dedication-title", "dedicationTitle");
  setupInPlaceTextEditing("dedication-text", "dedicationText");
  setupInPlaceTextEditing("lbl-section-timeline", "timelineTitle");
  setupInPlaceTextEditing("lbl-section-timeline-sub", "timelineSubtitle");
  setupInPlaceTextEditing("lbl-section-gallery", "galleryTitle");
  setupInPlaceTextEditing("lbl-section-gallery-sub", "gallerySubtitle");
  setupInPlaceTextEditing("lbl-section-letters", "lettersTitle");
  setupInPlaceTextEditing("lbl-section-letters-sub", "lettersSubtitle");

  // Pestañas editables por Blur
  const editableTabs = ["nav-tab-home", "nav-tab-dedication", "nav-tab-timeline", "nav-tab-gallery", "nav-tab-letters"];
  editableTabs.forEach((tabId) => {
    const el = document.getElementById(tabId);
    el.addEventListener("blur", () => {
      if (isAdminMode) {
        const key = el.getAttribute("data-tab-key");
        db.navTabs[key] = el.textContent.trim();
        saveDBToLocalStorage();
        showToast("Nombre de pestaña guardado", "success");
      }
    });
  });

  // Timeline & fotos files upload
  document.getElementById("btn-add-moment").addEventListener("click", openAddMomentModal);
  document.getElementById("btn-add-photo").addEventListener("click", () => {
    openAddMomentModal();
    document.getElementById("moment-modal-title").innerHTML = '<i class="fa-solid fa-plus"></i> Añadir Foto / Recuerdo';
  });

  // Carga local e in-canvas compress
  const fileInput = document.getElementById("moment-img-file");
  const uploadPreview = document.getElementById("file-upload-preview");
  const uploadPrevSrc = document.getElementById("img-upload-prev-src");
  
  fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      compressAndLoadImage(file, (base64Str) => {
        uploadPrevSrc.src = base64Str;
        uploadPreview.style.display = "flex";
        document.getElementById("moment-img-url").value = "";
      });
    }
  });

  document.getElementById("btn-remove-uploaded-img").addEventListener("click", () => {
    fileInput.value = "";
    uploadPreview.style.display = "none";
    uploadPrevSrc.src = "";
  });

  document.getElementById("moment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    saveMomentForm();
  });

  // Filtros Galería
  const filterBtns = document.querySelectorAll(".gallery-filters .filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.getAttribute("data-filter"));
    });
  });

  // Lightbox e impresiones
  document.getElementById("lightbox-btn-close").addEventListener("click", closeLightbox);
  document.getElementById("lightbox-btn-next").addEventListener("click", nextLightboxImage);
  document.getElementById("lightbox-btn-prev").addEventListener("click", prevLightboxImage);
  document.getElementById("lightbox-btn-play").addEventListener("click", toggleLightboxAutoplay);

  document.addEventListener("keydown", (e) => {
    const lBox = document.getElementById("gallery-lightbox");
    if (lBox.classList.contains("active")) {
      if (e.key === "ArrowRight") nextLightboxImage();
      if (e.key === "ArrowLeft") prevLightboxImage();
      if (e.key === "Escape") closeLightbox();
    }
  });

  // Visor Pergamino Carta
  document.getElementById("btn-close-letter-viewer").addEventListener("click", () => {
    closeModal("modal-letter-viewer");
  });

  // Cartas Modales Formularios
  document.getElementById("btn-add-letter").addEventListener("click", openAddLetterModal);
  document.getElementById("letter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    saveLetterForm();
  });

  // Ajustes Generales Admin
  const sliderCount = document.getElementById("settings-particle-count");
  const sliderSpeed = document.getElementById("settings-particle-speed");
  
  sliderCount.addEventListener("input", (e) => {
    document.getElementById("lbl-particle-count").textContent = e.target.value;
  });
  sliderSpeed.addEventListener("input", (e) => {
    document.getElementById("lbl-particle-speed").textContent = (e.target.value / 10).toFixed(1);
  });

  document.getElementById("global-settings-form").addEventListener("submit", (e) => {
    e.preventDefault();
    saveGlobalSettingsForm();
  });

  document.getElementById("btn-reset-db").addEventListener("click", resetDatabaseToDefault);

  // Hero background file picker
  const heroFileInput = document.getElementById("settings-hero-file");
  const heroPreviewWrapper = document.getElementById("hero-preview-wrapper");
  const heroPreviewImg = document.getElementById("hero-preview-img");

  heroFileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      compressAndLoadHeroImage(file, (base64Str) => {
        heroPreviewImg.src = base64Str;
        heroPreviewWrapper.style.display = "block";
        document.getElementById("settings-hero-url").value = "";
      });
    }
  });

  document.getElementById("btn-remove-hero-img").addEventListener("click", () => {
    heroFileInput.value = "";
    heroPreviewImg.src = "";
    heroPreviewWrapper.style.display = "none";
    document.getElementById("settings-hero-url").value = "";
    // Clear hero bg from db
    db.heroBgImage = "";
    applyHeroBgImage("");
    saveDBToLocalStorage();
    showToast("Foto de portada eliminada", "success");
  });

  // Música bottom controls
  document.getElementById("player-btn-play").addEventListener("click", () => MusicPlayer.playPause());
  document.getElementById("player-btn-prev").addEventListener("click", () => MusicPlayer.prev());
  document.getElementById("player-btn-next").addEventListener("click", () => MusicPlayer.next());
  document.getElementById("player-btn-mute").addEventListener("click", () => MusicPlayer.toggleMute());
  document.getElementById("player-btn-autoplay").addEventListener("click", () => MusicPlayer.toggleAutoplay());
  
  document.getElementById("player-btn-list").addEventListener("click", (e) => {
    e.stopPropagation();
    document.getElementById("player-playlist-menu").classList.toggle("active");
  });
  document.addEventListener("click", () => {
    document.getElementById("player-playlist-menu").classList.remove("active");
  });
  document.getElementById("player-playlist-menu").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.getElementById("player-volume-slider").addEventListener("input", (e) => {
    MusicPlayer.setVolume(parseInt(e.target.value));
  });

  const progBar = document.getElementById("player-progress-bar");
  progBar.addEventListener("click", (e) => {
    const rect = progBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = clickX / rect.width;
    MusicPlayer.seekToPercent(pct);
  });

  document.getElementById("btn-admin-playlist").addEventListener("click", () => {
    openModal("modal-playlist-admin");
    MusicPlayer.renderAdminPlaylist();
  });

  document.getElementById("playlist-add-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const t = document.getElementById("new-song-title").value;
    const a = document.getElementById("new-song-artist").value;
    const u = document.getElementById("new-song-yt-url").value;
    
    if (MusicPlayer.addTrack(t, a, u)) {
      document.getElementById("new-song-title").value = "";
      document.getElementById("new-song-artist").value = "";
      document.getElementById("new-song-yt-url").value = "";
    }
  });

  // Modales genéricos
  const closeBtns = document.querySelectorAll("[data-close]");
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => closeModal(btn.getAttribute("data-close")));
  });

  // Stickers Event Listeners
  const btnAddSticker = document.getElementById("btn-add-sticker");
  if (btnAddSticker) {
    btnAddSticker.addEventListener("click", () => {
      openModal("modal-sticker-selector");
    });
  }

  document.querySelectorAll(".sticker-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      const emoji = opt.getAttribute("data-value");
      addEmojiSticker(emoji);
    });
  });

  const stickerImgFileInput = document.getElementById("sticker-img-file");
  if (stickerImgFileInput) {
    stickerImgFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        compressAndLoadSticker(file, (base64Str) => {
          addCustomImageSticker(base64Str);
          stickerImgFileInput.value = "";
        });
      }
    });
  }

  document.getElementById("btn-confirm-login").addEventListener("click", confirmAdminLogin);
  document.getElementById("admin-pin-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") confirmAdminLogin();
  });
}

/**
 * COMPRESIÓN IMÁGENES CLIENT-SIDE (BASE64 CANVAS COMPRESS)
 */
function compressAndLoadImage(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      const MAX_WIDTH = 600;
      const MAX_HEIGHT = 600;
      let w = img.width;
      let h = img.height;
      
      if (w > h) {
        if (w > MAX_WIDTH) {
          h *= MAX_WIDTH / w;
          w = MAX_WIDTH;
        }
      } else {
        if (h > MAX_HEIGHT) {
          w *= MAX_HEIGHT / h;
          h = MAX_HEIGHT;
        }
      }
      
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      
      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.6);
      callback(compressedDataUrl);
    };
  };
}

/**
 * COMPRESIÓN IMÁGENES PORTADA (ALTA RESOLUCIÓN PARA FONDO FULL-SCREEN)
 */
function compressAndLoadHeroImage(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      const MAX_WIDTH = 1920;
      const MAX_HEIGHT = 1080;
      let w = img.width;
      let h = img.height;
      
      if (w > h) {
        if (w > MAX_WIDTH) {
          h *= MAX_WIDTH / w;
          w = MAX_WIDTH;
        }
      } else {
        if (h > MAX_HEIGHT) {
          w *= MAX_HEIGHT / h;
          h = MAX_HEIGHT;
        }
      }
      
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      
      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.75);
      callback(compressedDataUrl);
    };
  };
}

/**
 * EDICIÓN DE TEXTO DIRECTA EN CLIC (BLUR AUTO-SAVE)
 */
function setupInPlaceTextEditing(elementId, dbFieldKey) {
  const el = document.getElementById(elementId);
  if (!el) return;
  
  if (db[dbFieldKey]) {
    el.innerHTML = db[dbFieldKey];
  }
  
  el.addEventListener("blur", () => {
    if (isAdminMode) {
      db[dbFieldKey] = el.innerHTML.trim();
      saveDBToLocalStorage();
      showToast("Texto guardado automáticamente", "success");
    }
  });
}

/**
 * MODAL MÓDULO AUXILIAR
 */
function openModal(id) {
  document.getElementById(id).classList.add("active");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("active");
  if (id === "modal-admin-login") {
    document.getElementById("admin-pin-input").value = "";
    document.getElementById("login-error-msg").style.display = "none";
  }
}

/**
 * MODO ADMINISTRACIÓN (LOGIN PIN / DASHBOARD PANEL ACCESOS)
 */
function toggleAdminMode() {
  if (isAdminMode) {
    isAdminMode = false;
    document.body.classList.remove("admin-mode");
    document.getElementById("btn-admin-toggle").classList.remove("active");
    document.getElementById("btn-admin-toggle").title = "Activar Modo Edición";
    document.getElementById("btn-admin-toggle").innerHTML = '<i class="fa-solid fa-lock"></i>';
    
    toggleAdminUIElements(false);
    showToast("Modo administrador desactivado", "success");
  } else {
    openModal("modal-admin-login");
    document.getElementById("admin-pin-input").focus();
  }
}

function confirmAdminLogin() {
  const pinInput = document.getElementById("admin-pin-input");
  const errorMsg = document.getElementById("login-error-msg");
  
  if (pinInput.value === "1234") {
    isAdminMode = true;
    document.body.classList.add("admin-mode");
    document.getElementById("btn-admin-toggle").classList.add("active");
    document.getElementById("btn-admin-toggle").title = "Cerrar Edición";
    document.getElementById("btn-admin-toggle").innerHTML = '<i class="fa-solid fa-lock-open"></i>';
    
    toggleAdminUIElements(true);
    closeModal("modal-admin-login");
    showToast("Modo Edición Activado en Vivo", "success");
  } else {
    errorMsg.style.display = "block";
    pinInput.value = "";
    pinInput.focus();
  }
}

function toggleAdminUIElements(show) {
  // Habilitar editable
  document.getElementById("nav-title-logo").contentEditable = show ? "true" : "false";
  document.getElementById("cover-title").contentEditable = show ? "true" : "false";
  document.getElementById("cover-subtitle").contentEditable = show ? "true" : "false";
  document.getElementById("dedication-title").contentEditable = show ? "true" : "false";
  document.getElementById("dedication-text").contentEditable = show ? "true" : "false";
  
  const editableSectionTitles = [
    "lbl-section-timeline", "lbl-section-timeline-sub",
    "lbl-section-gallery", "lbl-section-gallery-sub",
    "lbl-section-letters", "lbl-section-letters-sub"
  ];
  editableSectionTitles.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.contentEditable = show ? "true" : "false";
  });

  // Navbar editables
  const navTabsIds = ["nav-tab-home", "nav-tab-dedication", "nav-tab-timeline", "nav-tab-gallery", "nav-tab-letters"];
  navTabsIds.forEach(id => {
    document.getElementById(id).contentEditable = show ? "true" : "false";
  });

  document.getElementById("btn-edit-timer").style.display = show ? "inline-flex" : "none";
  document.getElementById("btn-admin-playlist").style.display = show ? "inline-flex" : "none";
  document.getElementById("btn-global-settings").style.display = show ? "inline-flex" : "none";

  const adminBtns = document.querySelectorAll(".btn-admin-only");
  adminBtns.forEach((btn) => {
    btn.style.display = show ? "inline-flex" : "none";
  });
  
  renderTimeline();
  renderGallery();
  renderLettersGrid();
  renderStickers();
}

/**
 * FORMULARIO DE LÍNEA DE TIEMPO Y GALERÍA (CREAR / EDITAR RECUERDOS)
 */
function openAddMomentModal(type = "timeline") {
  document.getElementById("moment-form").reset();
  document.getElementById("moment-edit-id").value = "";
  document.getElementById("moment-target-type").value = type;
  document.getElementById("file-upload-preview").style.display = "none";
  document.getElementById("img-upload-prev-src").src = "";
  
  document.getElementById("moment-show-timeline").checked = (type === "timeline" || type === "all");
  document.getElementById("moment-show-gallery").checked = (type === "gallery" || type === "all");
  
  if (type === "gallery") {
    document.getElementById("moment-modal-title").innerHTML = '<i class="fa-solid fa-plus"></i> Añadir Foto / Recuerdo';
  } else {
    document.getElementById("moment-modal-title").innerHTML = '<i class="fa-solid fa-plus"></i> Añadir Nuevo Recuerdo';
  }
  openModal("modal-moment-form");
}

function openEditMomentModal(id, type = "timeline") {
  const list = type === "gallery" ? db.gallery : db.timeline;
  const item = list.find((t) => t.id === id);
  if (!item) return;
  
  document.getElementById("moment-edit-id").value = item.id;
  document.getElementById("moment-target-type").value = type;
  document.getElementById("moment-title").value = item.title;
  document.getElementById("moment-date").value = item.date;
  document.getElementById("moment-desc").value = item.desc || "";
  
  const existsInTimeline = db.timeline && db.timeline.some(t => t.id === item.id);
  const existsInGallery = db.gallery && db.gallery.some(g => g.id === item.id);
  document.getElementById("moment-show-timeline").checked = existsInTimeline;
  document.getElementById("moment-show-gallery").checked = existsInGallery;
  
  const imgUrlInput = document.getElementById("moment-img-url");
  const filePrev = document.getElementById("file-upload-preview");
  const filePrevSrc = document.getElementById("img-upload-prev-src");
  
  if (item.img) {
    if (item.img.startsWith("data:image")) {
      imgUrlInput.value = "";
      filePrevSrc.src = item.img;
      filePrev.style.display = "flex";
    } else {
      imgUrlInput.value = item.img;
      filePrev.style.display = "none";
      filePrevSrc.src = "";
    }
  } else {
    imgUrlInput.value = "";
    filePrev.style.display = "none";
    filePrevSrc.src = "";
  }
  
  if (type === "gallery") {
    document.getElementById("moment-modal-title").innerHTML = '<i class="fa-solid fa-pen"></i> Editar Foto de Galería';
  } else {
    document.getElementById("moment-modal-title").innerHTML = '<i class="fa-solid fa-pen"></i> Editar Recuerdo';
  }
  openModal("modal-moment-form");
}

function saveMomentForm() {
  const idVal = document.getElementById("moment-edit-id").value;
  const targetType = document.getElementById("moment-target-type").value || "timeline";
  const title = document.getElementById("moment-title").value;
  const date = document.getElementById("moment-date").value;
  const desc = document.getElementById("moment-desc").value;
  const imgUrl = document.getElementById("moment-img-url").value;
  const uploadedImgSrc = document.getElementById("img-upload-prev-src").src;
  
  const showTimeline = document.getElementById("moment-show-timeline").checked;
  const showGallery = document.getElementById("moment-show-gallery").checked;
  
  if (!showTimeline && !showGallery) {
    showToast("Debes seleccionar al menos una sección de destino", "error");
    return;
  }
  
  let finalImg = "";
  if (uploadedImgSrc && uploadedImgSrc.startsWith("data:image")) {
    finalImg = uploadedImgSrc;
  } else if (imgUrl) {
    finalImg = imgUrl;
  } else {
    finalImg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' fill='%23e8a79b'><rect width='100' height='100' fill='%23f6efe6'/><path d='M30 40a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm-15 45h70L65 45 45 65l-10-10L15 85z'/></svg>";
  }

  db.timeline = db.timeline || [];
  db.gallery = db.gallery || [];

  if (idVal) {
    const id = parseInt(idVal);
    
    if (showTimeline) {
      const idx = db.timeline.findIndex((t) => t.id === id);
      if (idx !== -1) {
        db.timeline[idx] = { id, title, date, desc, img: finalImg };
      } else {
        db.timeline.push({ id, title, date, desc, img: finalImg });
      }
    } else {
      db.timeline = db.timeline.filter((t) => t.id !== id);
    }
    
    if (showGallery) {
      const idx = db.gallery.findIndex((g) => g.id === id);
      if (idx !== -1) {
        db.gallery[idx] = { id, title, date, desc, img: finalImg };
      } else {
        db.gallery.push({ id, title, date, desc, img: finalImg });
      }
    } else {
      db.gallery = db.gallery.filter((g) => g.id !== id);
    }
    showToast("Recuerdo actualizado correctamente", "success");
  } else {
    const newId = Date.now();
    const newItem = { id: newId, title, date, desc, img: finalImg };
    if (showTimeline) db.timeline.push(newItem);
    if (showGallery) db.gallery.push(newItem);
    showToast("Nuevo recuerdo guardado", "success");
  }
  
  saveDBToLocalStorage();
  renderTimeline();
  renderGallery();
  closeModal("modal-moment-form");
}

function deleteMoment(id) {
  if (confirm("¿Deseas eliminar este momento de la historia?")) {
    db.timeline = db.timeline.filter((t) => t.id !== id);
    saveDBToLocalStorage();
    renderTimeline();
    showToast("Recuerdo eliminado", "success");
  }
}

function deletePhoto(id) {
  if (confirm("¿Deseas eliminar esta foto de la galería?")) {
    db.gallery = db.gallery.filter((g) => g.id !== id);
    saveDBToLocalStorage();
    renderGallery();
    showToast("Foto eliminada", "success");
  }
}

/**
 * FORMULARIO DE CARTAS DE AMOR INDEPENDIENTES
 */
function openAddLetterModal() {
  document.getElementById("letter-form").reset();
  document.getElementById("letter-edit-id").value = "";
  document.getElementById("letter-modal-title").innerHTML = '<i class="fa-solid fa-feather"></i> Redactar Carta';
  openModal("modal-letter-form");
}

function openEditLetterModal(id) {
  const letters = db.letters || [];
  const letter = letters.find((l) => l.id === id);
  if (!letter) return;
  
  document.getElementById("letter-edit-id").value = letter.id;
  document.getElementById("letter-title").value = letter.title;
  document.getElementById("letter-sender").value = letter.sender || "";
  document.getElementById("letter-receiver").value = letter.receiver || "";
  document.getElementById("letter-date").value = letter.date;
  document.getElementById("letter-text").value = letter.text;
  
  document.getElementById("letter-modal-title").innerHTML = '<i class="fa-solid fa-pen"></i> Editar Carta';
  openModal("modal-letter-form");
}

function saveLetterForm() {
  const idVal = document.getElementById("letter-edit-id").value;
  const title = document.getElementById("letter-title").value;
  const sender = document.getElementById("letter-sender").value;
  const receiver = document.getElementById("letter-receiver").value;
  const date = document.getElementById("letter-date").value;
  const text = document.getElementById("letter-text").value;
  
  db.letters = db.letters || [];
  
  if (idVal) {
    const id = parseInt(idVal);
    const index = db.letters.findIndex((l) => l.id === id);
    if (index !== -1) {
      db.letters[index] = { id, title, sender, receiver, date, text };
    }
    showToast("Carta actualizada", "success");
  } else {
    const newId = Date.now();
    db.letters.push({ id: newId, title, sender, receiver, date, text });
    showToast("Carta sellada y guardada", "success");
  }
  
  saveDBToLocalStorage();
  renderLettersGrid();
  closeModal("modal-letter-form");
}

function deleteLetter(id) {
  if (confirm("¿Estás seguro de que deseas eliminar y destruir esta carta de amor?")) {
    db.letters = db.letters.filter((l) => l.id !== id);
    saveDBToLocalStorage();
    renderLettersGrid();
    showToast("Carta eliminada", "success");
  }
}

/**
 * MODAL DE AJUSTES GLOBALES ADMINISTRADOR (SLIDERS, NAVBARS, FOOTERS)
 */
function openGlobalSettingsModal() {
  const settings = db.animationSettings || DEFAULT_DATABASE.animationSettings;
  
  // Cargar sliders y combos
  document.getElementById("settings-particle-mode").value = settings.mode;
  document.getElementById("settings-particle-count").value = settings.count;
  document.getElementById("lbl-particle-count").textContent = settings.count;
  
  document.getElementById("settings-particle-speed").value = settings.speed;
  document.getElementById("lbl-particle-speed").textContent = (settings.speed / 10).toFixed(1);
  
  // Cargar color de acento
  document.getElementById("settings-accent-theme").value = db.accentTheme || "rose";
  
  // Cargar textos de navegación
  const navs = db.navTabs || DEFAULT_DATABASE.navTabs;
  document.getElementById("setting-tab-home").value = navs.home;
  document.getElementById("setting-tab-dedication").value = navs.dedication;
  document.getElementById("setting-tab-timeline").value = navs.timeline;
  document.getElementById("setting-tab-gallery").value = navs.gallery;
  document.getElementById("setting-tab-letters").value = navs.letters;
  
  // Cargar textos pie de página
  document.getElementById("settings-footer-tagline").value = db.footerTagline || DEFAULT_DATABASE.footerTagline;
  document.getElementById("settings-footer-copyright").value = db.footerCopyright || DEFAULT_DATABASE.footerCopyright;
  
  openModal("modal-global-settings");
  
  // Cargar foto de portada
  const heroInput = document.getElementById("settings-hero-url");
  const heroPreviewWrapper = document.getElementById("hero-preview-wrapper");
  const heroPreviewImg = document.getElementById("hero-preview-img");
  const currentHeroBg = db.heroBgImage || "";
  
  if (currentHeroBg) {
    if (currentHeroBg.startsWith("data:image")) {
      heroInput.value = "";
      heroPreviewImg.src = currentHeroBg;
      heroPreviewWrapper.style.display = "block";
    } else {
      heroInput.value = currentHeroBg;
      heroPreviewWrapper.style.display = "none";
    }
  } else {
    heroInput.value = "";
    heroPreviewWrapper.style.display = "none";
  }
}

function saveGlobalSettingsForm() {
  // Guardar foto de portada
  const heroFileInput = document.getElementById("settings-hero-file");
  const heroUrlInput = document.getElementById("settings-hero-url");
  const heroPreviewImg = document.getElementById("hero-preview-img");
  const heroPreviewWrapper = document.getElementById("hero-preview-wrapper");
  
  const uploadedHeroSrc = heroPreviewImg.src;
  
  if (heroPreviewWrapper.style.display !== "none" && uploadedHeroSrc && uploadedHeroSrc.startsWith("data:image")) {
    db.heroBgImage = uploadedHeroSrc;
  } else if (heroUrlInput.value.trim()) {
    db.heroBgImage = heroUrlInput.value.trim();
  } else {
    // No change if both are empty — preserve existing
  }
  
  applyHeroBgImage(db.heroBgImage || "");

  // Guardar partículas
  db.animationSettings = {
    mode: document.getElementById("settings-particle-mode").value,
    count: parseInt(document.getElementById("settings-particle-count").value),
    speed: parseInt(document.getElementById("settings-particle-speed").value)
  };
  
  // Guardar tono de acento
  db.accentTheme = document.getElementById("settings-accent-theme").value;
  applyAccentTheme(db.accentTheme);
  
  // Guardar pestañas
  db.navTabs = {
    home: document.getElementById("setting-tab-home").value,
    dedication: document.getElementById("setting-tab-dedication").value,
    timeline: document.getElementById("setting-tab-timeline").value,
    gallery: document.getElementById("setting-tab-gallery").value,
    letters: document.getElementById("setting-tab-letters").value
  };
  
  // Guardar pie de pagina
  db.footerTagline = document.getElementById("settings-footer-tagline").value;
  db.footerCopyright = document.getElementById("settings-footer-copyright").value;
  
  saveDBToLocalStorage();
  
  // Refrescar UI inmediata
  initParticlesEngine();
  // Forzar reconstruccion en canvas si aplica
  if (window.triggerParticlesRebuilt) {
    window.triggerParticlesRebuilt();
  }
  
  renderNavbarTabs();
  renderGlobalUIElements();
  
  closeModal("modal-global-settings");
  showToast("Ajustes globales actualizados", "success");
}

function resetDatabaseToDefault() {
  if (confirm("ATENCIÓN: ¿Seguro que deseas borrar el contenido personalizado y restaurar los valores iniciales de fábrica? Esta acción no se puede deshacer.")) {
    localStorage.removeItem("scrapbook_db_v2");
    localStorage.removeItem("memory_playlist");
    showToast("Restableciendo datos...", "success");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }
}

/**
 * MODAL COMPARTIR ÁLBUM COMPLETO
 */
function openShareModal() {
  saveDBToLocalStorage();
  
  const linkInput = document.getElementById("share-link-url");
  const successMsg = document.getElementById("copy-success-msg");
  
  const shareLink = SharePDFUtils.generateShareLink(db);
  linkInput.value = shareLink;
  successMsg.style.display = "none";
  
  openModal("modal-share-album");
  linkInput.select();
  
  const btnCopy = document.getElementById("btn-copy-share-link");
  btnCopy.replaceWith(btnCopy.cloneNode(true));
  
  document.getElementById("btn-copy-share-link").addEventListener("click", () => {
    linkInput.select();
    navigator.clipboard.writeText(shareLink).then(() => {
      successMsg.style.display = "block";
      showToast("¡Enlace copiado al portapapeles!", "success");
    }).catch((err) => {
      console.error("No se pudo copiar el enlace:", err);
      showToast("Error al copiar enlace", "error");
    });
  });
}

function toggleParticles() {
  const mode = db.animationSettings.mode;
  let newMode = "leaves";
  
  const cycle = ["leaves", "hearts", "flowers", "rain", "snow", "sparkles", "music", "bubbles", "off"];
  let idx = cycle.indexOf(mode);
  if (idx === -1) idx = 0;
  newMode = cycle[(idx + 1) % cycle.length];
  
  const modeNames = {
    leaves: "Lluvia de Pétalos de Sakura",
    hearts: "Lluvia de Corazones",
    flowers: "Lluvia de Flores",
    rain: "Lluvia Romántica",
    snow: "Nieve Suave",
    sparkles: "Estrellas Brillantes",
    music: "Notas Musicales Flotantes",
    bubbles: "Burbujas de Ensueño",
    off: "Animaciones de fondo desactivadas"
  };
  
  showToast(modeNames[newMode], "success");
  
  db.animationSettings.mode = newMode;
  saveDBToLocalStorage();
  initParticlesEngine();
}

/**
 * SISTEMA SCROLL REVEAL (INTERSECTION OBSERVER)
 */
function setupScrollReveal() {
  const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  const revealElements = document.querySelectorAll(".scroll-reveal");
  revealElements.forEach((el) => {
    observer.observe(el);
  });
}

/**
 * SISTEMA NOTIFICACIONES FLOTANTES (TOASTS)
 */
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === "error") {
    icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  }
  
  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  toast.offsetHeight; // Forzar reflow
  toast.classList.add("active");
  
  setTimeout(() => {
    toast.classList.remove("active");
    toast.addEventListener("transitionend", () => toast.remove());
  }, 3500);
}

/**
 * SISTEMA DE DECORACIÓN Y STICKERS INTERACTIVOS
 */
function renderStickers() {
  const container = document.getElementById("stickers-container");
  if (!container) return;
  container.innerHTML = "";
  
  const stickers = db.stickers || [];
  
  stickers.forEach((sticker) => {
    const el = document.createElement("div");
    el.className = "scrapbook-sticker";
    el.style.left = `${sticker.left}%`;
    el.style.top = `${sticker.top}%`;
    el.style.setProperty("--sticker-scale", sticker.scale || 1.0);
    el.style.setProperty("--sticker-rotate", `${sticker.rotation || 0}deg`);
    el.setAttribute("data-id", sticker.id);
    
    if (sticker.type === "emoji") {
      el.innerHTML = `<span style="font-size: 3.5rem; display: block; user-select: none; line-height: 1;">${sticker.value}</span>`;
    } else {
      el.innerHTML = `<img src="${sticker.value}" alt="Sticker" style="user-select: none;">`;
    }
    
    if (isAdminMode) {
      const controls = document.createElement("div");
      controls.className = "sticker-controls";
      controls.innerHTML = `
        <button class="btn-delete-sticker" title="Eliminar Sticker">
          <i class="fa-solid fa-trash"></i>
        </button>
        <div class="sticker-control-group">
          <label>Escala</label>
          <input type="range" class="sticker-scale-slider" min="0.3" max="2.5" step="0.1" value="${sticker.scale || 1.0}">
        </div>
        <div class="sticker-control-group">
          <label>Giro</label>
          <input type="range" class="sticker-rotate-slider" min="-180" max="180" step="5" value="${sticker.rotation || 0}">
        </div>
      `;
      
      controls.querySelector(".btn-delete-sticker").addEventListener("click", (e) => {
        e.stopPropagation();
        deleteSticker(sticker.id);
      });
      
      const scaleSlider = controls.querySelector(".sticker-scale-slider");
      scaleSlider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value);
        el.style.setProperty("--sticker-scale", val);
        sticker.scale = val;
        saveDBToLocalStorage();
      });
      
      const rotateSlider = controls.querySelector(".sticker-rotate-slider");
      rotateSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        el.style.setProperty("--sticker-rotate", `${val}deg`);
        sticker.rotation = val;
        saveDBToLocalStorage();
      });
      
      el.appendChild(controls);
      
      el.addEventListener("mousedown", (e) => onStickerStartDrag(e, sticker, el));
      el.addEventListener("touchstart", (e) => onStickerStartDrag(e, sticker, el));
    }
    
    container.appendChild(el);
  });
}

function calculateViewportCenterPercentY() {
  const scrollTop = window.scrollY || window.pageYOffset;
  const viewportCenterY = scrollTop + (window.innerHeight / 2);
  const bodyHeight = document.body.offsetHeight || document.documentElement.scrollHeight || 1000;
  return (viewportCenterY / bodyHeight) * 100;
}

function addEmojiSticker(emoji) {
  const newSticker = {
    id: Date.now(),
    type: "emoji",
    value: emoji,
    left: 50,
    top: calculateViewportCenterPercentY(),
    scale: 1.0,
    rotation: 0
  };
  
  db.stickers = db.stickers || [];
  db.stickers.push(newSticker);
  saveDBToLocalStorage();
  renderStickers();
  closeModal("modal-sticker-selector");
  showToast("Sticker añadido. ¡Arrástralo a donde quieras!", "success");
}

function addCustomImageSticker(base64Str) {
  const newSticker = {
    id: Date.now(),
    type: "image",
    value: base64Str,
    left: 50,
    top: calculateViewportCenterPercentY(),
    scale: 1.0,
    rotation: 0
  };
  
  db.stickers = db.stickers || [];
  db.stickers.push(newSticker);
  saveDBToLocalStorage();
  renderStickers();
  closeModal("modal-sticker-selector");
  showToast("Tu sticker personalizado ha sido añadido", "success");
}

function compressAndLoadSticker(file, callback) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(event) {
    const img = new Image();
    img.src = event.target.result;
    img.onload = function() {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      
      const MAX_WIDTH = 150;
      const MAX_HEIGHT = 150;
      let w = img.width;
      let h = img.height;
      
      if (w > h) {
        if (w > MAX_WIDTH) {
          h *= MAX_WIDTH / w;
          w = MAX_WIDTH;
        }
      } else {
        if (h > MAX_HEIGHT) {
          w *= MAX_HEIGHT / h;
          h = MAX_HEIGHT;
        }
      }
      
      canvas.width = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
      
      const compressedDataUrl = canvas.toDataURL("image/png");
      callback(compressedDataUrl);
    };
  };
}

function deleteSticker(id) {
  if (confirm("¿Deseas eliminar este sticker decorativo?")) {
    db.stickers = db.stickers.filter(s => s.id !== id);
    saveDBToLocalStorage();
    renderStickers();
    showToast("Sticker eliminado", "success");
  }
}

function onStickerStartDrag(e, sticker, el) {
  if (!isAdminMode) return;
  if (e.target.closest('.sticker-controls')) return;
  
  // Si no está seleccionado, seleccionarlo y deseleccionar los otros
  document.querySelectorAll('.scrapbook-sticker').forEach(item => {
    if (item !== el) item.classList.remove('selected');
  });
  el.classList.add('selected');
  
  const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
  const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
  
  activeDragSticker = {
    sticker: sticker,
    element: el,
    startX: clientX,
    startY: clientY,
    startLeft: parseFloat(el.style.left) || 50,
    startTop: parseFloat(el.style.top) || 50
  };
  
  el.classList.add('dragging');
  
  const dragMoveHandler = (evt) => onStickerDrag(evt);
  const dragEndHandler = () => {
    el.classList.remove('dragging');
    saveDBToLocalStorage();
    document.removeEventListener('mousemove', dragMoveHandler);
    document.removeEventListener('mouseup', dragEndHandler);
    document.removeEventListener('touchmove', dragMoveHandler);
    document.removeEventListener('touchend', dragEndHandler);
    activeDragSticker = null;
  };
  
  document.addEventListener('mousemove', dragMoveHandler);
  document.addEventListener('mouseup', dragEndHandler);
  document.addEventListener('touchmove', dragMoveHandler, { passive: false });
  document.addEventListener('touchend', dragEndHandler);
}

function onStickerDrag(e) {
  if (!activeDragSticker) return;
  
  if (e.cancelable) e.preventDefault();
  
  const clientX = e.clientX !== undefined ? e.clientX : e.touches[0].clientX;
  const clientY = e.clientY !== undefined ? e.clientY : e.touches[0].clientY;
  
  const deltaX = clientX - activeDragSticker.startX;
  const deltaY = clientY - activeDragSticker.startY;
  
  const bodyWidth = document.body.offsetWidth || window.innerWidth;
  const bodyHeight = document.body.offsetHeight || document.documentElement.scrollHeight || 1000;
  
  const pctDeltaX = (deltaX / bodyWidth) * 100;
  const pctDeltaY = (deltaY / bodyHeight) * 100;
  
  let newLeft = activeDragSticker.startLeft + pctDeltaX;
  let newTop = activeDragSticker.startTop + pctDeltaY;
  
  newLeft = Math.max(0, Math.min(100, newLeft));
  newTop = Math.max(0, Math.min(100, newTop));
  
  activeDragSticker.element.style.left = `${newLeft}%`;
  activeDragSticker.element.style.top = `${newTop}%`;
  
  activeDragSticker.sticker.left = newLeft;
  activeDragSticker.sticker.top = newTop;
}
