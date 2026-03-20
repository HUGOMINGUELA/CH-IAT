const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Sistema Capital Humano funcionando 🚀");
});
app.post("/finiquito", (req, res) => {

  const { salario, diasTrabajados, diasVacaciones, diasAguinaldo } = req.body;

  const salarioDiario = salario / 30;

  // Aguinaldo proporcional
  const aguinaldo = (salarioDiario * diasAguinaldo / 365) * diasTrabajados;

  // Vacaciones proporcionales
  const vacaciones = (salarioDiario * diasVacaciones / 365) * diasTrabajados;

  // Prima vacacional 25%
  const primaVacacional = vacaciones * 0.25;

  // Total
  const total = salarioDiario * diasTrabajados + aguinaldo + vacaciones + primaVacacional;

  res.json({
    salarioDiario,
    aguinaldo,
    vacaciones,
    primaVacacional,
    total
  });
});
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});