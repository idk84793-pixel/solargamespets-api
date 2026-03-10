const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

/*
MANUALLY EDIT THIS LIST.

Each entry must follow the same structure your ExistCount
script expects from the API.
*/
const pets = [
  {
    category: "Pet",
    configData: {
      id: "Unicorn Dragon",
      pt: 1
    },
    value: 1
  },
  {
    category: "Pet",
    configData: {
      id: "Huge Cat"
    },
    value: 1
  }
];
const pets = [
  {
    category: "Pet",
    configData: {
      id: "Cat",
      pt: 1
    },
    value: 1
  },
  {
    category: "Pet",
    configData: {
      id: "Dog"
    },
    value: 1
  }
];
/* Homepage */
app.get("/", (req, res) => {
  res.send("SolarGamesPets API is running");
});

/*
ExistCount endpoint
This is what your Roblox script will call
*/
app.get("/api/exists", (req, res) => {
  res.json({
    status: "ok",
    data: pets
  });
});

/* Start server */
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
