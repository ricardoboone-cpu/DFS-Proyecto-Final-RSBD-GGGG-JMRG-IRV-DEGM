require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("public/images"));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado"))
  .catch(err => console.log(err));

const User = require("./models/User");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Mongo conectado");

    const users = await User.find();
    if (users.length === 0) {
      console.log("Creando usuarios iniciales...");

      await User.create([
        {
          username: "eggman",
          password: "adminPassword",
          role: "admin"
        },
        {
          username: "metalsonic",
          password: "userPassword",
          role: "user"
        }
      ]);

      console.log("Usuarios creados");
    }
  });


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
