const express = require("express");
const connectDB = require("./config/connectDB");
const bookRoute = require("./routes/book");
const app = express();
const port = 7452;
app.use(express.json());
connectDB();
app.use("/api/book", bookRoute);
app.listen(port, console.log(`app is runnig on port ${port}`));
