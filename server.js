const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome Your Voting app");
})

app.listen(PORT, ()=> {
    console.log(`listining on PORT ${PORT}`);
})