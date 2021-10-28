import { TextRow } from "..";
import { TextProduct } from "../productClasses/TextProduct";

export class TextFactory {
  static convert(oldElement: TextRow): TextProduct {
    switch (oldElement.type) {
      case "text_v":
        const vertikal = new TextProduct(oldElement);
        vertikal.makeJasonable(oldElement.value);
        vertikal.setAngle(90);
        return vertikal;
      case "required":
        const required = new TextProduct(oldElement);
        required.makeJasonable(oldElement.value);
        return required;
      default:
        const defaultText = new TextProduct(oldElement);
        defaultText.makeJasonable(oldElement.value);
        return defaultText;
    }
  }
}
