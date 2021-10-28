import { fabricToShema, queryJSON } from "./convert/fabricToShema";
import { DesignTextRow } from "./interfaces/desginTextRow";
import { ImageFactory } from "./factories/ImageFactory";
import { TextFactory } from "./factories/TextFactory";
import { FabricObject } from "./interfaces/fabricObject";
import { ElementTextRow } from "./interfaces/elementTextRow";
import clipboardy from "clipboardy";
import { jsonToSvg } from "./convert/jsonTo.svg";
import fs from "fs";
import { AbstractFactory } from "./factories/AbstractFactory";

const config = {
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "michele2407",
  database: "altdaten",
};

const promiseWrapper = async (desginID: number) => {
  const ticketDesginId = desginID + ";";
  const mysql = require("mysql2/promise");
  const con = await mysql.createConnection(config);

  const ticketDesignQuery =
    "SELECT type, publicId FROM ticketdesigns WHERE id=" + ticketDesginId;
  const ticketElementsQuery =
    "SELECT * FROM ticketdesign_elements WHERE ticketdesign=" + ticketDesginId;

  const data = {
    ticketDesign: await con.query(ticketDesignQuery),
    ticketElements: await con.query(ticketElementsQuery),
  };
  con.end();
  return data;
};

const fabricfy = async (oldElements: any) => {
  let fabricsElements = {
    ticketInfos: {} as DesignTextRow,
    objects: [] as any,
  };
  fabricsElements.ticketInfos = oldElements.ticketDesign[0][0];
  for (let i = 0; i < oldElements.ticketElements[0].length; i++) {
    try {
      const fabricElement = await AbstractFactory.createNewDesign(
        oldElements.ticketElements[0][i],
        fabricsElements.ticketInfos
      );
      fabricsElements.objects.push(fabricElement);
    } catch (err) {}
  }
  return JSON.stringify(fabricsElements);
};

(async () => {
  for (let i = 1543; i <= 2968; i++) {
    console.log(i);
    const oldElements = await promiseWrapper(i);
    if (
      oldElements.ticketDesign[0].length === 0 ||
      oldElements.ticketElements[0].length === 0
    ) {
      continue;
    }

    const jsonFormat = JSON.parse(await fabricfy(oldElements));
    jsonToSvg(jsonFormat, i);
    await queryJSON(jsonFormat, i);
    if (fs.existsSync(`./src/assets/images/picture.jpeg`)) {
      fs.unlinkSync(`./src/assets/images/picture.jpeg`);
    }
  }
})();

export { ElementTextRow as TextRow };
export { FabricObject };
