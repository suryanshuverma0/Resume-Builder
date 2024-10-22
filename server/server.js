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
app.use("/api", require("./src/routes/aboutFormRoute")); 
app.use("/api", require("./src/routes/educationFormRoute"));
app.use("/api", require("./src/routes/experienceFormRoute"));
app.use("/api", require("./src/routes/projectFormRoute"));
app.use("/api", require("./src/routes/skillsFormRoute"));
app.use("/api", require("./src/routes/achievementsFormRoute"));
app.use("/api", require("./src/routes/langaugeFormRoute"));
app.use("/api", require("./src/routes/referencesFormRoute"));
app.use("/api", require("./src/routes/socialMediaRoute"));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
