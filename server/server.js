const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ Users: ["userOne", "userTwo", "userThree"] });
});

app.listen(5500, () => {
  console.log("server has been started on port 5000");
});
