
const formaulario = document.querySelector(".form__login");

const listaUsuarios = () => fetch("http://localhost:3000/users").then((respuesta) => respuesta.json());

const error = document.createElement('p'); // creamos el parrafo para mostrar el mensaje de error

let loginOK = false;

formaulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    listaUsuarios().then((data) => {
        console.log(data);
        data.forEach(element => {
            if ( email == element.email && password == element.password)
                loginOK = true;
        });
        
    if (loginOK) {
        console.log("Usuario CORRECTO...");
        location.href = "agregar-producto.html";
    }
    else
        console.log("Usuario y/o Clave INCORRECTOS...");
        const mensaje = 'Usuario y/o Contraseña INCORRECTOS...';
        error.innerHTML = mensaje;
        error.style = "color: red";
        formaulario.appendChild(error);
            
    })
});