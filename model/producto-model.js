const { Schema, model } = require('mongoose');
const ProductoSchema = Schema({
	nombre: {
		type: String,
		required: true,
	},

	descripcion: {
		type: String,
		require: true,
	},
	precio: {
		type: Number,
		require: true,
	},
	cantidad: {
		type: Number,
		require: true,
	},
});

module.exports = model('Productos', ProductoSchema);
