const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { db } = require("./Config/config");

const imageRoutes = require("./Routes/Image-routes");

const PORT = process.env.PORT || 3001;

const app = express();

// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

mongoose
  .connect(db, {
    useNewUrlParser: true,
    //   useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((client) => {
    // db = client.connections[0].db;
    // app.set("db", db);
    console.log("db connected");
  })
  .catch((err) => {
    console.log("error", err.message);
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requseted-With, Content-Type, Accept , Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");

  next();
});

app.use("/api/images", imageRoutes);

app.listen(PORT, () => {
  console.log("listening on " + PORT);
});
