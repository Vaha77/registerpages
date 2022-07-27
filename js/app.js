const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const app = express();

const PORT = config.get("PORT") || 5000;

app.use("/api/auth", require("./routers/auth_router"));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => console.log(`Server ${PORT}da yuryapti🔥`));
  } catch (e) {
    console.log("Serverda xatolik🥲", e.message);
    process.exit(1);
  }
}

start();
