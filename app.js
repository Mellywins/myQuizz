const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/dist/")));

app.get(/.*/, (req, res) =>
  res.sendFile(path.join(__dirname, "public", "index.html")),
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`));