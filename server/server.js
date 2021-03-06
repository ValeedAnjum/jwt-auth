const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();

// Initializing Middleware
app.use(express.json({ extended: false }));

//checking
app.get("/", (req, res) => res.send("API IS UP"));

//defining routes
app.use("/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
