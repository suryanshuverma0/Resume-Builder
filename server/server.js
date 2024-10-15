const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const cors = require("cors");

dotenv.config();

const PORT = process.env.PORT || 3000;

connectDB();
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", require("./src/routes/userRoute"));
app.use("/api", require("./src/routes/userRoute"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
