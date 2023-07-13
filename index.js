const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;
const merkletreeRoutes = require("./routes/merkletree.js");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("Hello, Kevin The Human. My Name is C-3 the Sentient");
});

app.use("/auth", merkletreeRoutes);

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
