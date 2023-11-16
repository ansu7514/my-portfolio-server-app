const exrpess = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const { mySqlConnect } = require("./util/mySqlUtil");

dotenv.config();

const app = exrpess();
app.set("port", process.env.PORT || 3101);

app.use(cors({ credentials: true }));

app.use(exrpess.json());
app.use(exrpess.urlencoded({ extened: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

const pathLogger = ({ path }, res, next) => {
  console.log(path);
  next();
};

app.use(pathLogger);

const apiRouter = require("./api");

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send(`
        <div>
            <h2>my-portfolio-server-app<h2/>
        </div>
    `);
});

app.listen(app.get("port"), () => {
  console.log(`server started on `, app.get("port"));
  mySqlConnect();
});
