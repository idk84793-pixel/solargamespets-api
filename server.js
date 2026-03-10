const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

let pets = [];

// GET all pets / exist data
app.get("/", (req, res) => {
  res.send("SolarGamesPets API is running");
});

// POST one pet
app.post("/api/addPet", (req, res) => {
  const { category, configData, value } = req.body;

  if (!category || !configData || value === undefined) {
    return res.status(400).json({
      status: "error",
      message: "Missing category, configData, or value"
    });
  }

  const pet = {
    category,
    configData,
    value
  };

  pets.push(pet);

  res.json({
    status: "ok",
    message: "Pet added",
    data: pet
  });
});

// POST many pets at once
app.post("/api/setExists", (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      status: "error",
      message: "data must be an array"
    });
  }

  pets = data;

  res.json({
    status: "ok",
    message: "Exist data updated",
    count: pets.length
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});