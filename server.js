const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "10mb" }));

let pets = [];
let lastUpdate = 0;

app.get("/", (req, res) => {
  res.send("SolarGamesPets API is running");
});

app.get("/api/exists", (req, res) => {
  res.json({
    status: "ok",
    lastupdate: lastUpdate,
    data: pets
  });
});

app.post("/api/exists", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      status: "error",
      message: "data must be an array"
    });
  }

  pets = data;
  lastUpdate = Date.now();

  res.json({
    status: "ok",
    message: "Exists updated",
    count: pets.length,
    lastupdate: lastUpdate
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
