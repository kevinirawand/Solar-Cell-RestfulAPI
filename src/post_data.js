import axios from "axios"
import FormData from "form-data"
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export const getImageData = (fileName) => {
   const form = new FormData();
   form.append('model', 'model1');
   form.append('format', 'json');
   form.append('file', fs.createReadStream(path.join(__dirname, `../display/${fileName}`)));


   axios.post("http://103.117.57.28:5000", form, {
      headers: {
         'accept': 'application/json',
         'Accept-Language': 'en-US,en;q=0.8',
         'Content-Type': 'multipart/form-data',
      }
   }).then(function (response) {
      console.log(response.data)
      return response.data
   }).catch(function (error) {
      console.log(error)
   })
}

