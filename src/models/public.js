const db = require("./db")

// /shop
const obtenerProductos = async () => {

    const [rows] = await db.query("SELECT * FROM `product`")
    return rows
}

// /shop/item/:id
const obtenerProducto = async (id) => {

    const [row] = await db.query("SELECT * FROM `product` WHERE product_id = ?", [id])
    console.log('obtenerProducto', row[0])
    return row[0] // Como es un array y sólo tiene un objeto, vamos a indicar que queremos retornar el objeto seleccionando el índice 0, es decir, el primero

}

module.exports = {
    obtenerProductos,
    obtenerProducto
}