import express from "express";
import config from "./config";
import ServerRender from "./components/ServerRender";

const app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
const initialRendering = ServerRender();
app.get("/", (req, res) => {
  res.render("index", { initialRendering });
});

app.listen(config.port, () => console.log(`Server running on ${config.port}`));
