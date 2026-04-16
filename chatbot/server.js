require("dotenv").config();

const app = require("./app");
const db = require("./db");

const PORT = 5071;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});