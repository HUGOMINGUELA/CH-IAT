const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Sistema Capital Humano funcionando 🚀");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
  console.log("Servidor listo en puerto 3001");
});