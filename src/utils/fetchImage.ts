import { rejects, throws } from "assert";
import axios from "axios";
import fs from "fs";
import Path from "path";

export const fetchImage = async (url: string, name: string) => {
  await axios({ url, responseType: "stream" })
    .then((response) => {
      return new Promise(async (fulfill, reject) => {
        const path = Path.resolve("./src/assets", "images", `${name}.jpeg`);
        const stream = response.data.pipe(fs.createWriteStream(path));
        stream.on("finish", fulfill);
        stream.on("error", reject);
      });
    })
    .catch((err) => {});
};
