require('dotenv').config() //dotenv para variables de entorno
const express = require('express') //framework backend
const mongoose = require('mongoose') //ODM para MongoDB
const cors = require('cors') //middleware para habilitar CORS

const app = express() //crear la app de express
app.use(cors()) //habilitar CORS
app.use(express.json()) //middleware para parsear JSON

mongoose.connect(process.env.MONGO_URI) //conectar a MongoDB
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err))

app.use('/api/games', require('./routes/games.routes'))// esto es para las rutas de juegos

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000")
})
