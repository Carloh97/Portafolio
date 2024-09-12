// Función para activar/desactivar cada sección
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link'); // Seleccionamos todos los elementos con la clase 'nav-link'

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
        // Remover 'active' de todos los enlaces
        navLinks.forEach(nav => nav.classList.remove('active'));

        // Agregar 'active' al enlace clikeado
        this.classList.add('active');
        });
    });
    });

// Proyectos
const proyectos = [
    {
    name: "Aerolíneas",
    img: "./assets/img/aerolineas.png",
    github: "https://github.com",
    },
    {
    name: "Calculadora",
    img: "./assets/img/calculadora.png",
    github: "https://github.com",
    },
    {
    name: "Tiempo",
    img: "./assets/img/tiempo.png",
    github: "https://github.com",
    },
];

// Función para definir cada modal
function modalcito(i) {
    const modal = document.querySelector("#exampleModal");
    const h1 = modal.querySelector("h1");
    h1.innerHTML = proyectos[i].name;
    const img = modal.querySelector("img");
    img.setAttribute("src", proyectos[i].img);
    const a = modal.querySelector("a");
    a.setAttribute("href", proyectos[i].github);
}

// Función de animación de escritura con la biblioteca Typed.js
document.addEventListener("DOMContentLoaded", function () {
    new Typed("#typewriter", {
        strings: ["Desarrollador Web Full Stack", "Programador", "Diseñador"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
    });
    });


