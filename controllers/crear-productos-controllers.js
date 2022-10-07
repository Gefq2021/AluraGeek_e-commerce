import { productosServicios } from "../servicios/productos-servicios.js";

// const form = document.querySelector("[data-form]");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const url = document.querySelector("[data-url]").value;
//     const categoria = document.querySelector("[data-categoria]").value;
//     const nombre = document.querySelector("[data-nombre]").value;
//     const precio = document.querySelector("[data-precio]").value;
//     const descripcion = document.querySelector("[data-descripcion]").value;
//     console.log(url);
//     console.log(categoria);
//     console.log(nombre);
//     console.log(precio);
//     console.log(descripcion);

//     productosServicios.crearProducto(nombre, url, precio, categoria, descripcion).then(respuesta => {
//         window.location.href = "../index.html";
//         alert("EL PRODUCTO FUE CREADO CON EXITO.");
//         console.log(respuesta);
//     }).catch(err => {
//         console.log(err);
//     });
// });

// SEGUNDO INTENTO

// const btn = document.querySelector(".form__button");
// const formulario = document.querySelector(".form__nuevo");


// // Funcion para sacar los datos del Formulario con FormData.
// const getData = () => {
//     const datos = new FormData(formulario);
//     const datosProcesados = Object.fromEntries(datos.entries());
//     formulario.reset();
//     console.log(datosProcesados);
//     return datosProcesados;
// }

// // Función para colocar los datos en el Servidor
// const postData = async () => {
//     const newProducto = getData();
//     // Crea un objeto con la informacion del formulario
//     try {
//         const response = await fetch('http://localhost:3000/productos', {
//             method: 'POST',
//             //especifica el metodo que se va a usar
//             headers: {'Content-Type': 'application/json'},
//             // coloca la informacion en el formato JSON
//             body: JSON.stringify(newProducto)
//         });
//         if (response.ok) {
//             const jsonResponse = await response.json();
//             const {imegUrl, categoria, name, price, descripcion} = jsonResponse;
//             // productosServicios.crearProducto(name, imegUrl, price, categoria, descripcion);
//         }

//     } catch(error) {
//         console.log(error);
//     }
// };

// btn.addEventListener("clic", (event) => {
//     event.preventDefault();
//     postData();
// })


// TERCER ALTERNATIVA
const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(url);
    console.log(categoria);
    productosServicios.crearProducto(nombre, url, precio, categoria, descripcion);
})