import { convertToBase64 } from "./utils/toBase64";
import { fetchImage } from "./utils/fetchImage";
import { DesignTextRow } from "./interfaces/desginTextRow";
import mysql2 from "mysql2/promise";
import { ImageFactory } from "./factories/imageFactory";
import { TextFactory } from "./factories/textFactory";
import { FabricObject } from "./interfaces/fabricObject";
import { TextBox } from "./interfaces/textBox";
import { ElementTextRow } from "./interfaces/elementTextRow";
import { getSize } from "./utils/getPicSize";
import clipboardy from "clipboardy";

const config = {
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "michele2407",
  database: "altdaten",
};

const promiseWrapper = async () => {
  const ticketDesginId = 2953 + ";";
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
    fabricsElements.objects.push(
      await AbstractFactory.createNewDesign(
        oldElements.ticketElements[0][i],
        fabricsElements.ticketInfos
      )
    );
  }

  clipboardy.writeSync(JSON.stringify(fabricsElements));
  //console.log(JSON.stringify(fabricsElements));
};

(async () => {
  const oldElements = await promiseWrapper();
  fabricfy(oldElements);
})();

export { ElementTextRow as TextRow };
export { FabricObject };
