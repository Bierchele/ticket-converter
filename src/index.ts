import { fabricToShema } from "./convert/fabricToShema";
import { DesignTextRow } from "./interfaces/desginTextRow";
import { ImageFactory } from "./factories/ImageFactory";
import { TextFactory } from "./factories/TextFactory";
import { FabricObject } from "./interfaces/fabricObject";
import { ElementTextRow } from "./interfaces/elementTextRow";
import clipboardy from "clipboardy";
import { jsonToSvg } from "./convert/jsonTo.svg";
import fs from "fs";

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
    "SELECT * FROM ticketdesigns WHERE id=" + ticketDesginId;
  const ticketElementsQuery =
    "SELECT * FROM ticketdesign_elements WHERE ticketdesign=" + ticketDesginId;
  const data = {
    ticketDesign: (await con.query(ticketDesignQuery)) as DesignTextRow,
    ticketElements: (await con.query(ticketElementsQuery)) as ElementTextRow,
  };
  return data;
};

class AbstractFactory {
  static createNewDesign(
    oldTicketElement: ElementTextRow,
    ticketInfo: DesignTextRow
  ) {
    switch (oldTicketElement.type) {
      case "text":
        return TextFactory.convert(oldTicketElement);
      case "text_v":
        return TextFactory.convert(oldTicketElement);
      case "required":
        return TextFactory.convert(oldTicketElement);
      case "barcode":
        return ImageFactory.convert(oldTicketElement, ticketInfo);
      case "barcode2":
        return ImageFactory.convert(oldTicketElement, ticketInfo);
      case "qrcode":
        return ImageFactory.convert(oldTicketElement, ticketInfo);
      case "picture":
        return ImageFactory.convert(oldTicketElement, ticketInfo);
      case "picture_eventlogo":
        return ImageFactory.convert(oldTicketElement, ticketInfo);
      case "picture_eventheader":
        return ImageFactory.convert(oldTicketElement, ticketInfo);
      case "picture_customerphoto":
        return ImageFactory.convert(oldTicketElement, ticketInfo);
    }
  }
}

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
  //clipboardy.writeSync(JSON.stringify(fabricsElements));
  return JSON.stringify(fabricsElements);
};

(async () => {
  for (let i = 1; i < 2969; i++) {}
  const oldElements = await promiseWrapper(2953);
  const jsonFormat: JSON = JSON.parse(await fabricfy(oldElements));
  const svg = jsonToSvg(jsonFormat);
  console.log(svg);
  // await fabricToShema(jsonFormat, svg, 2953);
  if (fs.existsSync(`./src/assets/images/picture.jpeg`)) {
    fs.unlinkSync(`./src/assets/images/picture.jpeg`);
  }
})();

export { ElementTextRow as TextRow };
export { FabricObject };
