const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

const indexRouter = require("./routers/index");
const userRouter = require("./routers/users");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
