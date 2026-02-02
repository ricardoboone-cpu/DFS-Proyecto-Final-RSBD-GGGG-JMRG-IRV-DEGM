// ====== Lista de juegos ======
const games = [
  { 
    id: "1",
    title: "Sonic Frontiers",
    genre: "Action",
    year: 2022,
    image: "IMGS/juegos/SONICFRONTIERS.avif",
    trailer: "https://www.youtube.com/embed/F42pHusbeME?si=q8LvpNyYR95nx4Hx",
    description: "La más reciente aventura de Sonic The Hedgehog será un choque entre mundos. Una experiencia como ninguna otra antes, acelera a nuevos niveles y experimenta la emoción y la libertad de la alta velocidad en una zona abierta. Combate contra poderosos enemigos mientras recorres las islas de estrellas fugaces en paisajes llenos de densa vegetación, desbordantes cascadas, sofocantes desiertos, y más. Estas fiestas 2022, viaja a nuevos lugares."
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
    <p>Rescata a Chao, que se esconde en cada nivel, consigue la puntuación más alta en el pinball de la Zona Noches de Casino y visita el museo para ver arte, música y mucho más.</p>`
  },
  { 
    id: "3",
    title: "Sonic Racing: CrossWorlds",
    genre: "Racing",
    year: 2025,
    image: "IMGS/juegos/SONICCARRERAS.avif",
    trailer: "https://www.youtube.com/embed/MdwpXxYHyI8?si=FYxXZ2ATik6erXyj",
    description: ""
  },
  { 
    id: "4",
    title: "Football Manager 26",
    genre: "Racing",
    year: 2025,
    image: "IMGS/juegos/FULBO.jpg",
    trailer: "",
    description: ""
  },
  { 
    id: "5",
    title: "Shinobi: Art of Vengeance",
    genre: "Metroidvania",
    year: 2025,
    image: "IMGS/juegos/NINJA.jpg",
    trailer: "",
    description: ""
  },
  { 
    id: "6",
    title: "Yakuza Kiwami 2",
    genre: "Action",
    year: 2025,
    image: "IMGS/juegos/Yakuza2.jpg",
    trailer: "",
    description: ""
  },
  { 
    id: "7",
    title: "Yakuza Kiwami 3 & Dark Ties",
    genre: "Action",
    year: 2026,
    image: "IMGS/juegos/Yakuza3.jpg",
    trailer: "",
    description: ""
  },
  { 
    id: "8",
    title: "Persona 4 Revival",
    genre: "Rol",
    year: 2026,
    image: "IMGS/juegos/Persona4Revival.jpg",
    trailer: "",
    description: ""
  },
  { 
    id: "9",
    title: "Persona 5: The Phantom X",
    genre: "Rol",
    year: 2025,
    image: "IMGS/juegos/Persona5elfantasmadeX.jpg",
    trailer: "",
    description: ""
  },
  { 
    id: "10",
    title: "Two Point Museum",
    genre: "Crafting",
    year: 2025,
    image: "IMGS/juegos/Museum.jpg",
    trailer: "",
    description: ""
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

    // Cargar iframe del tráiler de YouTube si existe
    if (game.trailer) {
      trailerContainer.innerHTML = `
        <iframe 
          src="${game.trailer}" 
          title="Tráiler de ${game.title}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          style="position: absolute; top:0; left:0; width:100%; height:100%;"></iframe>
      `;
    } else {
      trailerContainer.innerHTML = "<p>No hay tráiler disponible.</p>";
    }

    // Información
    descEl.innerHTML = game.description || "<p>Información no disponible.</p>";
  }
}

// ====== Ejecutar ======
loadGame();