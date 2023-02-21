// Initialises the server and starts it listening on the port 8000
require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require('cors')
const port = 8000;

app.use(cors());

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// connect to mongoose
mongoose.set("strictQuery", false);
// connect to mongodb and catch any errors
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// use routes
app.use("/api", require("./routes"));

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${port}`);
});
