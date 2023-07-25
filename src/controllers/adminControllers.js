const admin = require("../models/admin")


module.exports = {

    // localhost:3000/admin
    adminView: async (req, res) => {
        const data = await admin.obtenerProductos()

        res.render('admin', {
            titulo: 'Admin | Funkoshop',
            data
        })
    },
    createView: (req, res) => {
        res.render('create', {
            titulo: 'Crear un producto | Funkoshop'
        })
    },
    createItem: async (req, res) => {

        const data = req.body
        await admin.crearProducto(data)
        res.redirect("/admin")

        /*
         res.render('create', {
            titulo: 'Crear un producto | Funkoshop',
            mensaje: "Producto agregado"
        })

        */
    },
    editView: async (req, res) => {

        const id = req.params.id

        const item = await admin.editarProducto(id)

        if (item) {
            return res.render('edit', {
                titulo: `Editar ${item.product_name} | Funkoshop`,
                item
            })
        }

        return res.redirect("/admin")


       
    },
    editItem: async (req, res) => {
        const data = req.body
        const id = req.params.id
        await admin.editarProductoPOST(id, data)
        res.redirect("/admin")
    },
    deleteItem: async (req, res) => {
        const id = req.params.id
        await admin.borrarProducto(id)
        console.log(`Producto ${id} borrado`)
        res.redirect("/admin")
    },
    loginView: (req, res) => {
        res.render('login', {
            titulo: 'Login | Funkoshop'
        })
    },
    loginUser: (req, res) => res.send('Login Route that receive the data when user click login button'),
    registerView: (req, res) => {
        res.render('register', {
            titulo: 'Registro de usuario | Funkoshop'
        })
    },
    registerUser: (req, res) => res.send('Register Route that receive the data when user click register button'),
};