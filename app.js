const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    slackUsername: "olawoleJethro",
    backend: true,
    age: 26,
    bio: "My name is olawole jethro olakunle, am a software engineer and am a student of University of Ilorin.",
  });
});

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";
app.listen(PORT, HOST, () => {
  console.log(`app is listening to port ${PORT}`);
});
