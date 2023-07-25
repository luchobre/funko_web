const db = require("./db")

// /admin 
const obtenerProductos = async () => {

    const [rows] = await db.query("SELECT * FROM product,category WHERE product.category_id = category.category_id ")
    console.log(rows)
    return rows
}

// /admin/create POST
const crearProducto = async (data) => {

    const [rows] = await db.query("INSERT INTO product SET ?", [data] )
    return rows
}

// /admin/edit/:id
const editarProducto = async (id) => {

    const [row] = await db.query("SELECT * FROM product,licence,category WHERE product_id = ? AND product.category_id = category.category_id AND product.licence_id = licence.licence_id", [id])
    return row[0] // Como es un array y sólo tiene un objeto, vamos a indicar que queremos retornar el objeto seleccionando el índice 0, es decir, el primero

}

const editarProductoPOST = async (id, data) => {

    const [rows] = await db.query("UPDATE product SET ? WHERE product_id = ?", [data, id])
    console.log("Actualizacion realizada", rows)
    return rows
}

const borrarProducto = async (id) => {
    const [row] = await db.query("DELETE FROM product WHERE product_id = ?", [id])
    return row

}

module.exports = {
    obtenerProductos,
    crearProducto,
    editarProducto,
    editarProductoPOST,
    borrarProducto
}