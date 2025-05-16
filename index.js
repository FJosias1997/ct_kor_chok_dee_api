const express = require("express");
const sequelize = require("./db");
const Students = require("./models/Students");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/students", async (req, res) => {
  try {
    console.log("Iniciando busca de usuários...");
    const users = await Students.findAll();
    console.log("Busca concluída.");
    res.json(users);
  } catch (err) {
    console.error("Erro ao buscar usuários:", err);
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
});

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados bem-sucedida.");
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log(
      "Modelo Students carregado:",
      Students === undefined ? "NÃO carregado" : "OK"
    );
  } catch (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  }
});

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("✅ Conectado ao banco");
//     const test = await Users.findOne();
//     console.log("✅ Modelo Users acessado com sucesso:", test);
//   } catch (err) {
//     console.error("❌ Erro no teste do modelo:", err);
//   }
// })();
