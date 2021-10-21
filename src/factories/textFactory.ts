import { TextRow } from "..";
import { TextProduct } from "../productClasses/TextProduct";

export class TextFactory {
  static convert(oldElement: TextRow): TextProduct {
    switch (oldElement.type) {
      case "text_v":
        const vertikal = new TextProduct(oldElement);
        vertikal.makeJasonable();
        vertikal.setAngle(90);
        return vertikal;
      default:
        const defaultText = new TextProduct(oldElement);
        defaultText.makeJasonable();
        return defaultText;
    }
  }
}
