//* Dependency Imports
// importing express
import express from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));
// importing express-session
import session from "express-session";
// importing ejs
import ejs from "ejs";
import path from "path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
// importing ejs-mate
import engine from "ejs-mate";
app.engine("ejs", engine);
// static assets
app.use(express.static(path.join(__dirname, "public")));
// importing routers
import userRoutes from "./routes/users.js";
// importing models
import User from "./models/User.js";

//* Routes
// home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// user routes
app.use("/", userRoutes);

app.listen(3000, () => {
  console.log("Port 3000 Open");
});
