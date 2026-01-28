// ================= Clase Tarea =================
class Tarea {
    constructor(nombre, completada = false) {
        this.id = Date.now();
        this.nombre = nombre;
        this.completada = completada;
    }

    editar(nuevoNombre) {
        this.nombre = nuevoNombre;
    }

    cambiarEstado() {
        this.completada = !this.completada;
    }
}

// ================= Gestor de Tareas =================
class GestorDeTareas {
    constructor() {
        const tareasGuardadas = JSON.parse(localStorage.getItem("tareas")) || [];
        
        this.tareas = tareasGuardadas.map(t =>
            new Tarea(t.nombre, t.completada)
        );
    }

    agregarTarea(nombre) {
        const nuevaTarea = new Tarea(nombre);
        this.tareas.push(nuevaTarea);
        this.guardar();
    }

    eliminarTarea(id) {
        this.tareas = this.tareas.filter(tarea => tarea.id !== id);
        this.guardar();
    }

    editarTarea(id, nuevoNombre) {
        this.tareas.forEach(tarea => {
            if (tarea.id === id) {
                tarea.editar(nuevoNombre);
            }
        });
        this.guardar();
    }

    guardar() {
        localStorage.setItem("tareas", JSON.stringify(this.tareas));
    }
}

// ================= DOM =================
const gestor = new GestorDeTareas();

const inputTarea = document.getElementById("nuevaTarea");
const botonAgregar = document.getElementById("agregar");
const listaTareas = document.getElementById("listaTareas");
const contador = document.getElementById("contador");


// ================= Render =================
const renderTareas = () => {
    listaTareas.innerHTML = "";

    gestor.tareas.forEach(tarea => {
        const li = document.createElement("li");
        li.classList.add("tarea-item");

        // Agregar clase "completada" si corresponde
        if (tarea.completada) li.classList.add("completada");

        li.innerHTML = `
            <div class="tarea-izq">
                <label class="checkbox-personalizado">
                    <input type="checkbox" ${tarea.completada ? "checked" : ""}>
                    <span class="checkmark"></span>
                </label>
                <span class="tarea-texto">${tarea.nombre}</span>
            </div>
            <div class="tarea-botones">
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            </div>
            `;

        const pendientes = gestor.tareas.filter(t => !t.completada).length;
        contador.textContent = `Tareas pendientes: ${pendientes}`;


        // ================= Eventos de Tarea =================
        // Checkbox para marcar completada
        li.querySelector('input[type="checkbox"]').addEventListener('change', () => {
            tarea.cambiarEstado();
            gestor.guardar();
            renderTareas();
        });

        // Botón Editar
        li.querySelector(".editar").addEventListener("click", () => {
            const nuevoNombre = prompt("Editar tarea:", tarea.nombre);
            if (nuevoNombre && nuevoNombre.trim() !== "") {
                gestor.editarTarea(tarea.id, nuevoNombre.trim());
                renderTareas();
            }
        });

        // Botón Eliminar
        li.querySelector(".eliminar").addEventListener("click", () => {
            gestor.eliminarTarea(tarea.id);
            renderTareas();
        });

        listaTareas.appendChild(li);
    });
};

// ================= Eventos =================
botonAgregar.addEventListener("click", () => {
    const texto = inputTarea.value.trim();

    if (texto === "") {
        alert("No puedes agregar una tarea vacía");
        return;
    }

    gestor.agregarTarea(texto);
    inputTarea.value = "";
    inputTarea.focus();
    renderTareas();
});

// Agregar tarea presionando Enter
inputTarea.addEventListener("keyup", (e) => {
    if (e.key === "Enter") botonAgregar.click();
});

// ================= Inicial =================
renderTareas();
