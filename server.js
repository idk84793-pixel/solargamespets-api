const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

let pets = [
  {
    category: "Pet",
    configData: {
      id: "Unicorn Dragon",
      pt: 1
    },
    value: 816593
  },
  {
    category: "Pet",
    configData: {
      id: "Huge Cat"
    },
    value: 120000
  }
];

// homepage
app.get("/", (req, res) => {
  res.send("SolarGamesPets API is running");
});

// get exist values
app.get("/api/exists", (req, res) => {
  res.json({
    status: "ok",
    data: pets
  });
});

// manually add a pet through browser
app.get("/api/add", (req, res) => {
  const { id, value } = req.query;

  if (!id || !value) {
    return res.send("Use /api/add?id=PetName&value=123");
  }

  const pet = {
    category: "Pet",
    configData: { id: id },
    value: Number(value)
  };

  pets.push(pet);

  res.json({
    status: "ok",
    message: "Pet added",
    data: pet
  });
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
