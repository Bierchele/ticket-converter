import { DesignTextRow } from "./../interfaces/desginTextRow";
import { setDynamics } from "./../utils/setDynamics";
import { convertToBase64 } from "./../utils/toBase64";
import { BarcodeProduct } from "./../classes/barcodeProduct";
import { TextRow } from "..";
import { Barcode2Product } from "../classes/barcode2Product";
import { PictureProduct } from "../classes/pictureProduct";
import { ImageProduct } from "../classes/ImageProduct";
import { getSize } from "../utils/getPicSize";
export class ImageFactory {
  static async convert(
    oldElement: TextRow,
    ticketInfos: DesignTextRow
  ): Promise<any> {
    switch (oldElement.type) {
      case "barcode":
        const bar = new BarcodeProduct(oldElement);
        return setDynamics(
          oldElement,
          bar,
          `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/${oldElement.type}1.gif`
        );
      case "barcode2":
        const bar2 = new ImageProduct(oldElement);
        const readyb = await setDynamics(
          oldElement,
          bar2,
          `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/${oldElement.type}.gif`
        );

        console.log(oldElement);
        console.log(readyb);
        return readyb;

      case "picture":
        const picture = new ImageProduct(oldElement);
        return setDynamics(
          oldElement,
          picture,
          `https://cdn.tiodev.de/companies/V9jxYWiH/ticketdesigns/${ticketInfos.publicId}/elements/${oldElement.publicId}.jpg`
        );
      case "picture_eventlogo":
        const picture_eventlogo = new ImageProduct(oldElement);
        return setDynamics(
          oldElement,
          picture_eventlogo,
          `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/eventlogo.gif`
        );
      case "picture_eventheader":
        const picture_eventheader = new ImageProduct(oldElement);
        return setDynamics(
          oldElement,
          picture_eventheader,
          `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/eventheader.gif`
        );
      case "qrcode":
        const qr = new ImageProduct(oldElement);
        return setDynamics(
          oldElement,
          qr,
          `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/${oldElement.type}.gif`
        );
    }
  }
}
