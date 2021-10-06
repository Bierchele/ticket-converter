import axios from "axios";
import fs from "fs";
import Path from "path";

const pic = `https://cdn.tiodev.de/companies/V9jxYWiH/ticketdesigns/xOt8qeZi/elements/nmLExwhV.jpg`;
const barcode2 = `cdn.tiodev.de/assets/admin/img/ticketdesigneditor/barcode2.gif`;

export const testAxio = async () => {
  const response = await axios({
    method: "GET",
    url: pic,
    responseType: "stream",
  });
  console.log(response.status);
  const path = Path.resolve("./src/assets", "images", `test.jpeg`);
  await response.data.pipe(fs.createWriteStream(path));
};
