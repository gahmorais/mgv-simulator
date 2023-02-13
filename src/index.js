require("dotenv/config");
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Funcionando" });
});

app.get("/MGV6_WCF/REST/ConsultaItem", (req, res) => {
  res.json({
    Codigo: "1",
    Descritivo1aLinha: "Bacon Manta Rio Sul",
    DiasValidade: 0,
    Preco: 222.0,
    Lote: "1234",
    PrecoPromocional: 10.0,
  });
});

app.listen(process.env.PORT || "3000", () => {
  console.log(`App iniciado, rodando na ${process.env.PORT || "3000"}`);
});
