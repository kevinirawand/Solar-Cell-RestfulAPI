import hound from "hound"
import path from 'path';
import { fileURLToPath } from 'url';
import { getImageData } from "./post_data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const regex = /\\([^\\]+)$/;

export const displayController = async (req, res) => {
   const watcher = hound.watch(path.join(__dirname, '../display'));

   res.render('index', {
      source: "test"
   });

   watcher.on('create', async (file, stats) => {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
         let fileName = regex.exec(file)[1];

         let imageData = getImageData(fileName);

         console.info(imageData);

         res.render('index', {
            source: "test"
         });
      }
   });
}