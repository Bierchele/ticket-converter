import { rejects } from "assert";
import axios from "axios";
import fs from "fs";
import Path from "path";

export const fetchImage = (url: string, name: string) => {
  return new Promise(async (fulfill, reject) => {
    const response = await axios({
      method: "GET",
      url: url,
      responseType: "stream",
    });
    const path = Path.resolve("./src/assets", "images", `${name}.jpeg`);
    const stream = response.data.pipe(fs.createWriteStream(path));
    stream.on("finish", fulfill);
    stream.on("error", reject); // presumably
  });
};
