import { throws } from "assert";
import { DesignTextRow } from "../interfaces/desginTextRow";
import { setDynamics } from "../utils/setDynamics";
import { TextRow } from "..";
import { ImageProduct } from "../productClasses/ImageProduct";

export class ImageFactory {
  static async convert(
    oldElement: TextRow,
    ticketInfos: DesignTextRow
  ): Promise<any> {
    switch (oldElement.type) {
      case "barcode":
        try {
          const bar = new ImageProduct(oldElement);
          return setDynamics(
            oldElement,
            bar,
            `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/${oldElement.type}1.gif`
          );
        } catch (error) {}

      case "barcode2":
        try {
          const bar2 = new ImageProduct(oldElement);
          return await setDynamics(
            oldElement,
            bar2,
            `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/${oldElement.type}.gif`
          );
        } catch (error) {}

      case "picture":
        try {
          const picture = new ImageProduct(oldElement);
          return setDynamics(
            oldElement,
            picture,
            `https://cdn.tiodev.de/companies/V9jxYWiH/ticketdesigns/${ticketInfos.publicId}/elements/${oldElement.publicId}.jpg`
          );
        } catch (error) {}
      case "picture_eventlogo":
        try {
          const picture_eventlogo = new ImageProduct(oldElement);
          return setDynamics(
            oldElement,
            picture_eventlogo,
            `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/eventlogo.gif`
          );
        } catch (error) {}

      case "picture_eventheader":
        try {
          const picture_eventheader = new ImageProduct(oldElement);
          return setDynamics(
            oldElement,
            picture_eventheader,
            `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/eventheader.gif`
          );
        } catch (error) {}

      case "qrcode":
        try {
          const qr = new ImageProduct(oldElement);
          return setDynamics(
            oldElement,
            qr,
            `https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/${oldElement.type}.gif`
          );
        } catch (error) {}

      case "picture_customerphoto":
        try {
          const customer = new ImageProduct(oldElement);
          return setDynamics(
            oldElement,
            customer,
            `https://cdn.tiodev.de/assets/checkout/silhouette.svg`
          );
        } catch (error) {}
    }
  }
}
