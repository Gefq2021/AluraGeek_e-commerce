import { productosServicios } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, precio, imageUrl) => {
    const producto = document.createElement("div");
    const contenido = `
        <div class="skill">
            <img src="${imageUrl}" alt="">
        </div>
        <p class="producto-nombre">${name}</p>
        <p class="producto-precio">$ ${precio}</p>
        <a href="#" class="producto-ver">Ver producto</a>
    `

    producto.innerHTML = contenido;
    producto.classList.add("producto");
    return producto;
};


const productos = document.querySelector("[data-productos]");

const render = async () => {
    try {
        const listaProductos = await productosServicios.listaProductos();
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.name, elemento.price, elemento.imageUrl));
        });
    }
    catch(error){
        console.log(error);
    }
};

render();
