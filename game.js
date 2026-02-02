// ====== Lista de juegos ======
const games = [
  { 
    id: "1",
    title: "Sonic Frontiers",
    genre: "Action",
    year: 2022,
    image: "IMGS/juegos/SONICFRONTIERS.avif",
    trailer: "https://www.youtube.com/embed/F42pHusbeME?si=q8LvpNyYR95nx4Hx",
    description: "La más reciente aventura de Sonic The Hedgehog será un choque entre mundos. Una experiencia como ninguna otra antes, acelera a nuevos niveles y experimenta la emoción y la libertad de la alta velocidad en una zona abierta. Combate contra poderosos enemigos mientras recorres las islas de estrellas fugaces en paisajes llenos de densa vegetación, desbordantes cascadas, sofocantes desiertos, y más. Estas fiestas 2022, viaja a nuevos lugares.",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "2",
    title: "Shadow Generations",
    genre: "Action",
    year: 2024,
    image: "IMGS/juegos/SONICxSHADOW.avif",
    trailer: "https://www.youtube.com/embed/DeFcY54XNSA?si=xOGTwbY0jGxLKUON",
    description: `
    <p>Shadow the Hedgehog regresa con Sonic clásico y moderno en SONIC X SHADOW GENERATIONS, ¡una colección completamente nueva que incluye dos experiencias únicas!
    
    <p>Juega como Shadow en una nueva campaña con habilidades nunca antes vistas que demuestran por qué es conocido como la Forma de Vida Definitiva. Recorre escenarios icónicos de la historia de Shadow, descubre secretos ocultos en un extenso mundo central y desbloquea nuevos poderes para enfrentarte a Black Doom y salvar el mundo.</p>
    <p>SONIC</p>
    <p>El regreso de Shadow</p>
    <p>En esta nueva campaña independiente, el némesis de Shadow, Black Doom, ha resurgido y amenaza con apoderarse del mundo una vez más. Shadow debe viajar a su pasado, confrontar sus dolorosos recuerdos y desbloquear nuevos poderes oscuros para salvar el mundo.</p>
    <p>Shadow Evolved
    <p>Domina los nuevos poderes de Doom de Shadow para enfrentarte a hordas de enemigos y superar desafíos de plataformas como nunca antes. ¡Surfea sobre el agua, sobrevuela obstáculos y detén el tiempo con el regreso de Chaos Control! Un viaje a través del tiempo y las dimensiones.</p>
    <p>Revive los niveles característicos de las aventuras anteriores de Shadow y acelera a través de escenarios alucinantes en 3D y 2D, distorsionados por la influencia de Black Doom, mientras Shadow intenta reconstruir la línea temporal y frustrar sus malvados planes.</p>
    <p>Explora el nuevo espacio blanco</p>
    <p>Estira las piernas en un nuevo mundo central inspirado en la jugabilidad de zona abierta de Sonic Frontiers. ¡A medida que Shadow obtiene nuevos poderes, puede explorar más a fondo y descubrir los secretos que se esconden!</p>
    <p>Una aventura épica de Sonic que viaja en el tiempo</p>
    <p>¡El pasado se encuentra con el presente en SONIC GENERATIONS! Cuando el Dr. Eggman se alía con su yo del pasado y el misterioso Devorador de Tiempo para borrar sus derrotas pasadas y reescribir la historia, dispersan a Sonic y sus amigos por el espacio y el tiempo. ¡Ahora, el Sonic moderno y el clásico tendrán que unir fuerzas para derrotar a este trío malvado y restaurar la normalidad en su línea temporal! Lo mejor de ambos mundos, remasterizado</p>
    <p>Recorre una colección de grandes éxitos con versiones 3D y 2D de escenarios icónicos de anteriores juegos de Sonic, ahora con gráficos actualizados y cinemáticas rediseñadas.</p>
    <p>¡Más coleccionables, contenido adicional y mucho más!</p>
    <p>Rescata a Chao, que se esconde en cada nivel, consigue la puntuación más alta en el pinball de la Zona Noches de Casino y visita el museo para ver arte, música y mucho más.</p>`,
    sinopsis: "Shadow the Hedgehog está de regreso con Sonic clásico y moderno en SONIC X SHADOW GENERATIONS, ¡una colección completamente nueva que presenta dos experiencias únicas!",
    images: [
      "IMGS/juegosextras/SONICS1.jpg",
      "IMGS/juegosextras/SONICS2.jpg",
      "IMGS/juegosextras/SONICS3.webp"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "3",
    title: "Sonic Racing: CrossWorlds",
    genre: "Racing",
    year: 2025,
    image: "IMGS/juegos/SONICCARRERAS.avif",
    trailer: "https://www.youtube.com/embed/MdwpXxYHyI8?si=FYxXZ2ATik6erXyj",
    description: `<p>¡Corre por tierra, mar, aire y espacio en Sonic Racing: CrossWorlds! Usa los Rings de travesía para teletransportarte a dimensiones nuevas donde te esperan novedades en cada curva.</p>
    <p>Acelera hasta la victoria en solitario o con amigos en una gran variedad de modos en línea y sin conexión y compite contra jugadores de todo el mundo. Construye el vehículo definitivo que mejor se adapte a tu estilo de conducción, desbloquea artilugios para obtener ventaja y usa potenciadores para llevarte la victoria a casa.</p>
    <p>¡En sus marcas, listos, teletransporte!</p>
    <p>Compite en 24 pistas y viaja a 15 CrossWorlds con Rings de travesía, una mecánica de juego única que transporta a los personajes icónicos de los universos Sonic y SEGA a nuevas dimensiones. ¡Aprovecha que las carreras son imprevisibles para cambiar el paisaje de cada una a tu favor!</p>
    <p>Hazlo tuyo</p>
    <p>Mezcla y combina 45 vehículos originales únicos y 70 artilugios diferentes para mejorar tu vehículo, subir de nivel tu kart y crear la máquina definitiva que se adapte a tu estilo de conducción.</p>`,
    sinopsis: "Corre por tierra, mar, aire, espacio y tiempo en Sonic Racing: CrossWorlds. Viaja a través de los rings de travesía a dimensiones nuevas donde te esperan novedades en cada giro.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "4",
    title: "Football Manager 26",
    genre: "Racing",
    year: 2025,
    image: "IMGS/juegos/FULBO.jpg",
    trailer: "",
    description: "",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "5",
    title: "Shinobi: Art of Vengeance",
    genre: "Metroidvania",
    year: 2025,
    image: "IMGS/juegos/NINJA.jpg",
    trailer: "",
    description: "",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "6",
    title: "Yakuza Kiwami 2",
    genre: "Action",
    year: 2025,
    image: "IMGS/juegos/Yakuza2.jpg",
    trailer: "",
    description: "",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "7",
    title: "Yakuza Kiwami 3 & Dark Ties",
    genre: "Action",
    year: 2026,
    image: "IMGS/juegos/Yakuza3.jpg",
    trailer: "",
    description: "",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "8",
    title: "Persona 4 Revival",
    genre: "Rol",
    year: 2026,
    image: "IMGS/juegos/Persona4Revival.jpg",
    trailer: "",
    description: "",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "9",
    title: "Persona 5: The Phantom X",
    genre: "Rol",
    year: 2025,
    image: "IMGS/juegos/Persona5elfantasmadeX.jpg",
    trailer: "",
    description: "",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  },
  { 
    id: "10",
    title: "Two Point Museum",
    genre: "Crafting",
    year: 2025,
    image: "IMGS/juegos/Museum.jpg",
    trailer: "",
    description: "",
    sinopsis: "Sonic explora nuevas islas, enfrenta enemigos poderosos y descubre secretos en paisajes asombrosos. Una aventura abierta llena de velocidad y libertad.",
    images: [
      "IMGS/juegosextras/SONICF1.avif",
      "IMGS/juegosextras/SONICF2.png",
      "IMGS/juegosextras/SONICF3.jpg"
    ],
    comprar: [
      { nombre: "Steam", logo: "IMGS/logos/steam.png", link: "https://store.steampowered.com/app/1237320/Sonic_Frontiers/" },
      { nombre: "Epic Games", logo: "IMGS/logos/epic.png", link: "https://store.epicgames.com/es-ES/p/sonic-frontiers" }
    ]
  }
];

// ====== Obtener ID del juego desde la URL ======
const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

// ====== Elementos del DOM ======
const titleEl = document.getElementById("game-title");
const genreEl = document.getElementById("game-genre");
const yearEl = document.getElementById("game-year");
const imageEl = document.getElementById("game-image");
const trailerContainer = document.getElementById("game-trailer-container");
const descEl = document.getElementById("game-description");

// ====== Función para cargar juego ======
function loadGame() {
  if (!gameId) {
    titleEl.textContent = "Selecciona un juego desde la página principal";
    genreEl.textContent = "-";
    yearEl.textContent = "-";
    imageEl.src = "IMGS/juegos/default.jpg";
    imageEl.alt = "Sin selección";
    trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    descEl.innerHTML = "<p>Información no disponible.</p>";
    return;
  }

  const game = games.find(g => g.id === gameId);

  if (!game) {
    titleEl.textContent = "Juego no encontrado";
    genreEl.textContent = "-";
    yearEl.textContent = "-";
    imageEl.src = "IMGS/juegos/default.jpg";
    imageEl.alt = "Juego no encontrado";
    trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    descEl.innerHTML = "<p>Información no disponible.</p>";
  } else {
    titleEl.textContent = game.title;
    genreEl.textContent = game.genre;
    yearEl.textContent = game.year;
    imageEl.src = game.image;
    imageEl.alt = game.title;

    // ====== Tráiler ======
    if (game.trailer) {
      trailerContainer.innerHTML = `
        <iframe 
          src="${game.trailer}" 
          title="Tráiler de ${game.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          style="position: absolute; top:0; left:0; width:100%; height:100%; border-radius:10px;"></iframe>
      `;
    } else {
      trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    }

    // ====== Información ======
    descEl.innerHTML = game.description || "<p>Información no disponible.</p>";

// ====== Contenedor derecho (image + sinopsis + galería + comprar) ======
const rightColumn = imageEl.parentElement; // asumiendo que imageEl está dentro de la columna derecha

// Limpiamos elementos anteriores (opcional si recargas)
const existingContainers = rightColumn.querySelectorAll("#game-sinopsis, #game-gallery, #game-comprar");
existingContainers.forEach(el => el.remove());

// ====== Sinopsis ======
if (game.sinopsis) {
  const sinopsisContainer = document.createElement("p");
  sinopsisContainer.id = "game-sinopsis";
  sinopsisContainer.style.margin = "15px 0";
  sinopsisContainer.style.fontStyle = "italic";
  sinopsisContainer.textContent = game.sinopsis;
  rightColumn.appendChild(sinopsisContainer); // agregado primero
}

// ====== Galería ======
if (game.images && game.images.length) {
  const galleryContainer = document.createElement("div");
  galleryContainer.id = "game-gallery";
  galleryContainer.style.display = "flex";
  galleryContainer.style.flexDirection = "column";
  galleryContainer.style.alignItems = "center";
  galleryContainer.style.gap = "10px";
  galleryContainer.style.marginTop = "10px";

  game.images.forEach(imgSrc => {
    const img = document.createElement("img");
    img.src = imgSrc;
    img.style.width = "100%";
    img.style.maxWidth = "300px";
    img.style.height = "200px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 2px 6px rgba(0,0,0,0.5)";
    galleryContainer.appendChild(img);
  });

  rightColumn.appendChild(galleryContainer); // agregado después de la sinopsis
}

// ====== Sección Comprar ======
if (game.comprar && game.comprar.length) {
  const comprarContainer = document.createElement("div");
  comprarContainer.id = "game-comprar";
  comprarContainer.style.display = "flex";
  comprarContainer.style.flexWrap = "wrap";
  comprarContainer.style.justifyContent = "center";
  comprarContainer.style.gap = "10px";
  comprarContainer.style.marginTop = "15px";

  game.comprar.forEach(store => {
    const a = document.createElement("a");
    a.href = store.link;
    a.target = "_blank";
    a.style.display = "inline-block";
    a.style.padding = "5px 15px";
    a.style.backgroundColor = "rgba(0,0,0,0.3)";
    a.style.borderRadius = "10px";
    a.style.boxShadow = "0 2px 6px rgba(0,0,0,0.5)";
    a.style.transition = "0.3s";
    a.style.textDecoration = "none";

    a.onmouseover = () => a.style.transform = "scale(1.05)";
    a.onmouseout = () => a.style.transform = "scale(1)";

    const img = document.createElement("img");
    img.src = store.logo;
    img.alt = store.nombre;
    img.style.height = "40px";
    img.style.width = "auto";

    a.appendChild(img);
    comprarContainer.appendChild(a);
  });

  rightColumn.appendChild(comprarContainer); // abajo de la galería
}

  }
}

// ====== Ejecutar ======
loadGame();