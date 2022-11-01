const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("<h1>Believe in ЗСУ</h1>");
});

const port = process.env.PORT || 80;

app.listen(port, () => console.log(`listening on port ${port}`));
