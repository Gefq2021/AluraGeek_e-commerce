const listaProductos = () => fetch("http://localhost:3000/productos").then(respuesta => respuesta.json());

const crearProducto = (name, imageUrl, price, categoria, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            imageUrl,
            name,
            price,
            categoria,
            descripcion
        })
    })
    .then(respuesta => {
        if (respuesta.ok) {
            return respuesta.body;
        }
        throw new Error("No fue posible crear un producto.");
    })
};

export const productosServicios = {
    listaProductos,
    crearProducto,
}
