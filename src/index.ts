import { DesignTextRow } from "./interfaces/desginTextRow";
import mysql2 from "mysql2/promise";
import { ImageFactory } from "./factories/imageFactory";
import { TextFactory } from "./factories/textFactory";
import { FabricObject } from "./interfaces/fabricObject";
import { TextBox } from "./interfaces/textBox";
import { ElementTextRow } from "./interfaces/elementTextRow";
import { getSize } from "./utils/getPicSize";
import { toUrl } from "./utils/toURL";
const clipboardy = require("clipboardy");

const config = {
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "michele2407",
  database: "altdaten",
};

const promiseWrapper = async () => {
  const mysql = require("mysql2/promise");
  const con = await mysql.createConnection(config);
  const ticketDesignQuery = "SELECT * FROM ticketdesigns WHERE id=2953;";
  const ticketElementsQuery =
    "SELECT * FROM ticketdesign_elements WHERE ticketdesign=2953;";
  const data = {
    ticketDesign: (await con.query(ticketDesignQuery)) as DesignTextRow,
    ticketElements: (await con.query(ticketElementsQuery)) as ElementTextRow,
  };

  return data;
};

class AbstractFactory {
  static createObject(oldTicketElement: ElementTextRow) {
    switch (oldTicketElement.type) {
      case "text":
        return TextFactory.getObject(oldTicketElement);
      case "required":
        return TextFactory.getObject(oldTicketElement);
      case "barcode":
        return ImageFactory.getObject(oldTicketElement);
      case "barcode2":
        return ImageFactory.getObject(oldTicketElement);
      case "qrcode":
        return ImageFactory.getObject(oldTicketElement);
      case "picture":
        return ImageFactory.getObject(oldTicketElement);
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
      AbstractFactory.createObject(oldElements.ticketElements[0][i])
    );
  }

  clipboardy.writeSync(JSON.stringify(fabricsElements));
 //console.log(JSON.stringify(fabricsElements))
};

(async () => {
  const oldElements = await promiseWrapper();
  fabricfy(oldElements);
})();

export { ElementTextRow as TextRow };
export { FabricObject };
