import axios from "axios";
import express from "express";

axios
  .get("http://localhost:4444/pokemon/informatins/1")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

// Instanciando o express para ser usado
const app = express();

// Ativando o bodyparser para que o express saiva ler objetos json
app.use(express.json());

// Rota get para a busca de dados
app.get("/", (req, res) => {
  res.json({ message: "ola mundo!" });
});

app.get("/user", (req, res) => {
  res.json({ message: "ola, batatinha" });
});

app.post("/create", (req, res) => {
  req.params;
  req.query;
  req.body;
});

app.listen(3333, () => {
  console.log("Server running on host: http://localhost:3333");
});
