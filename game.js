// Obtener el ID desde la URL
const params = new URLSearchParams(window.location.search);
const gameId = params.get("id");

const container = document.getElementById("gameDetail");

async function loadGame() {
    try {
        // Fetch al backend Express
        const res = await fetch(`http://localhost:3000/api/games/${gameId}`);
        if (!res.ok) throw new Error("Juego no encontrado");

        const game = await res.json();

        container.innerHTML = `
            <h1>${game.title}</h1>
            <img src="http://localhost:3000${game.image}" alt="${game.title}" style="max-width:600px;">
            <p><strong>Género:</strong> ${game.genre}</p>
            <p><strong>Año:</strong> ${game.year}</p>
        `;
    } catch (err) {
        container.innerHTML = `<p>Error al cargar el juego: ${err.message}</p>`;
    }
}

loadGame();
