const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3002;

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(express.static("public"));
    app.use(require("./routes/index.js"));

    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}!`);
    });
  });
