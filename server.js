const app = require("./app");
require("dotenv").config();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(PORT, () => {
  console.log("Listening on PORT ", PORT);
});