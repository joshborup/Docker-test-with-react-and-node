const express = require("express");
const app = express();

app.get("/api/testing", (req, res, next) => {
  res.status(200).send("the server is working if you are seeing this string");
});

const port = 4000;
app.listen(port, () => console.log(`server running on port ${port}`));
