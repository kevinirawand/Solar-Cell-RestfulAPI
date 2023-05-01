import hound from "hound"
import path from 'path';
import axios from "axios"
import { fileURLToPath } from 'url';
import { getImageData } from "./post_data.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const regex = /\\([^\\]+)$/;

export const watchFolder = () => {
   const watcher = hound.watch(path.join(__dirname, '../display'));

   watcher.on('create', function (file, stats) {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
         let fileName = regex.exec(file)[1];

         let imageData = getImageData(fileName);

         // axios.post("localhost:5000/post_data", fileName);
         

      }
   });
}

// watcher.on('change', function (file, stats) {
//    const ext = path.extname(file).toLowerCase();
//    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
//       console.log(file + ' was changed');
//    }
// });

// watcher.on('delete', function (file) {
//    const ext = path.extname(file).toLowerCase();
//    if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
//       console.log(file + ' was deleted');
//    }
// });
// }
