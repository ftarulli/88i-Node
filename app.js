const express = require('express');
const cors = require('cors');
const dbConnection = require('./database/config');
const app = express();
require('dotenv').config();

dbConnection();

app.use(express.json());

app.use(cors());

app.use('/productos', require('./router/productosRouter'));

app.listen(process.env.PORT, () => {
	console.log('Conectado');
});
