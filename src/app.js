import express from "express"
import mustacheExpress from "mustache-express"
import hound from "hound"
import fs from "fs/promises"
import path from 'path';
import { fileURLToPath } from 'url';
import { watchFolder } from "./watcher.js";
import { displayController } from "./displayController.js";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// app.use(express.urlencoded({ extended: true }));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, '../views'));

app.use(express.json());

app.post("/post_data", async (req, res) => {
   // watchFolder();

   // const template = await fs.readFile(path.join(__dirname, '../views/index.mustache'))
   //    .then(data => data.toString());

   console.info(req.body)

   // res.render('index', {
   //    source: "test1"
   // });
})

app.get("/", displayController);

app.listen(5000, () => {
   console.info("App running on port 5000");
})