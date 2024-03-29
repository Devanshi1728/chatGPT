const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const errorHandler = require("./middelwares/errorMiddleware");
const openAIRoutes = require("./routes/openAIRoutes");

dotenv.config();

// mongo connection
connectDB();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler);

const PORT = process.env.PORT || 8080;

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", openAIRoutes);

app.listen(PORT, () => {
  console.log(`running on ${PORT} in ${process.env.DEV_MODE}`.bgGreen.white);
});
