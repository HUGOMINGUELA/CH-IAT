const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sistema Capital Humano funcionando 🚀");
});

app.post("/finiquito", (req, res) => {

  const { salario, diasTrabajados, diasVacaciones, diasAguinaldo } = req.body;

  const salarioDiario = salario / 30;

  const aguinaldo = (salarioDiario * diasAguinaldo / 365) * diasTrabajados;
  const vacaciones = (salarioDiario * diasVacaciones / 365) * diasTrabajados;
  const primaVacacional = vacaciones * 0.25;

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