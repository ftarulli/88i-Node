const Producto = require('../model/producto-model');

const crearProducto = async (req, res) => {
	const { nombre, descripcion, precio, cantidad } = req.body;

	try {
		if (!nombre || !descripcion || !precio || !cantidad) {
			return res.status(400).json({
				msg: 'Todos los campos son obligatorios',
			});
		} else if (cantidad <= 0 || precio <= 0) {
			return res.status(400).json({
				msg: 'Precio o cantidad ingresado erroneamente.',
			});
		}

		let producto = new Producto(req.body);

		const productoExistente = await Producto.findOne({ nombre });
		if (productoExistente) {
			return res.status(400).json({ error: 'El producto ya existe.' });
		}
		await producto.save();

		res.status(201).json({
			msg: 'prodcuto creado',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Se ha producido un error.',
		});
	}
};
module.exports = {
	crearProducto,
};
