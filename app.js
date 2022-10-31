const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    slackUsername: "olawoleJethro",
    backend: true,
    age: 26,
    bio: "My name is olawole jethro olakunle, am a software engineer and am a student of university of ilorin",
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`app is listening to port ${PORT}`);
});
