console.log("SEED ARRANCÓ");
require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/User");

async function seedUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo conectado para seed");

    await User.deleteMany();

    const adminPassword = await bcrypt.hash("eggman123", 10);
    const userPassword = await bcrypt.hash("metal", 10);
    
    // ... (resto del código igual)
    await User.create([
      {
        username: "eggman",
        password: adminPassword,
        role: "admin",
      },
      {
        username: "metalsonic",
        password: userPassword,
        role: "user",
      },
    ]);
// ...
    
    console.log("Usuarios creados correctamente");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

seedUsers();
