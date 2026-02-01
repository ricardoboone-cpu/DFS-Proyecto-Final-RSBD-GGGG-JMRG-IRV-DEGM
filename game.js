// --- Config ---
const API_BASE = "http://localhost:3000/api/games";

// --- DOM refs ---
const titleEl = document.getElementById("game-title");
const genreEl = document.getElementById("game-genre");
const yearEl = document.getElementById("game-year");
const imageEl = document.getElementById("game-image");

// --- Obtener ID desde la URL ---
const urlParams = new URLSearchParams(window.location.search);
const gameId = urlParams.get("id");

// --- Cargar juego desde backend ---
async function loadGame() {
  if (!gameId) {
    titleEl.textContent = "ID de juego no provisto";
    return;
  }

  try {
    const res = await fetch(`${API_BASE}/${gameId}`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const game = await res.json();

    titleEl.textContent = game.title || "Sin título";
    genreEl.textContent = game.genre || "-";
    yearEl.textContent = game.year || "-";

    // imagen: usar host del backend + ruta guardada en Mongo
    imageEl.src = `http://localhost:3000${game.image}`;
    imageEl.alt = game.title || "Imagen del juego";
  } catch (err) {
    console.error("Error cargando juego:", err);
    titleEl.textContent = "Juego no encontrado";
    genreEl.textContent = "-";
    yearEl.textContent = "-";
    imageEl.src = "IMGS/error.png"; // opcional
    imageEl.alt = "Error";
  }
}

// --- Menú hamburguesa (misma lógica que en sega.html) ---
function setupHamburger() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  if (!menuToggle || !navbar) return;

  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  // cerrar menú al hacer click en un link (útil en móviles)
  navbar.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navbar.classList.remove('active'));
  });

  // cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') navbar.classList.remove('active');
  });
}

// --- Inicializar ---
document.addEventListener('DOMContentLoaded', () => {
  setupHamburger();
  loadGame();
});
