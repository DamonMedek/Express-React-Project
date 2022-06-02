//APP
const express = require("express");
const app = express();

//MONGOOSE
const mongoose = require("mongoose");

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});

/*//DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected").catch((err) => console.log("DB Connection Error", err)));
*/
