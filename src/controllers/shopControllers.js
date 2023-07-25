const public = require("../models/public")

module.exports = {
	// /shop
	shopView: async (req, res) => {
		const data = await public.obtenerProductos()
		// console.log("data", data)
		res.render('shop', {
			titulo: 'Tienda | Funkoshop',
			data

		})
	},
	// /shop/item/:id ej: localhost:3000/shop/item/3
	itemView: async (req, res) => {
		const id = req.params.id

		const item = await public.obtenerProducto(id)
		console.log("itemView", item)

		if (item) {
			return res.render('item', {
				titulo: 'Item | Funkoshop',
				item
			})
		} 
		
		return res.redirect("/")
		
		
	},

	// TODO Front 
	addItemToCart: (req, res) => res.send('Route to add a item to cart'),
	cartView: (req, res) => res.send('Cart View Route'),
	checkout: (req, res) => res.send('Route to receive the selected products and init the buy process'),
};