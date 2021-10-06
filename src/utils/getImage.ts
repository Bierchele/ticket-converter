import axios from "axios";
import fs from "fs";
import Path from "path";

export const fetchImage = async (url: string, name: string) => {
  const response = await axios({
    method: "GET",
    url: url,
    responseType: "stream",
  });
  const path = Path.resolve("./src/assets", "images", `${name}.jpeg`);
  await response.data.pipe(fs.createWriteStream(path));
};
