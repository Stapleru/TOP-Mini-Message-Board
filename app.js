const express = require("express");
const path = require("node:path");

const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

const PORT = process.env.PORT || 3030;
const app = express();

app.use(express.urlencoded({ extended: true }));

//serving static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

//setting ejs view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/messages", messageRouter);

app.listen(PORT, () => console.log(`server is listenning on ${PORT}` ));