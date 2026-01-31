require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err));

// rutas
app.use('/api/games', require('./routes/games.routes'));

const authRoutes = require("./routes/auth.routes");
app.use("/api/auth", authRoutes);

// middleware de errores (SIEMPRE antes del listen)
const errorMiddleware = require("./middlewares/errorMiddleware");
app.use(errorMiddleware);

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
