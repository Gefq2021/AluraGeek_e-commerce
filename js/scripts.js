const botonLogin = document.querySelector(".login");
const botonTodos = document.querySelectorAll(".todo");

// Para el Boton Login
botonLogin.addEventListener("click", e => {
    console.log("REaliza tu login");
    location.href = "login.html";
});

// Para todos los enlaces de Ver todo
botonTodos.forEach(index => {
    index.addEventListener("click", e => {
        console.log("Realiza tu login");
        location.href = "productos.html";
    });
});


