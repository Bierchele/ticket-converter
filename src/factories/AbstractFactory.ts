import { DesignTextRow } from "../interfaces/desginTextRow";
import { ElementTextRow } from "../interfaces/elementTextRow";
import { ImageFactory } from "./ImageFactory";
import { TextFactory } from "./TextFactory";

export class AbstractFactory {
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
