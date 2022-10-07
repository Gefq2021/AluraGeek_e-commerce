import { productosServicios } from "../servicios/productos-servicios.js";

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