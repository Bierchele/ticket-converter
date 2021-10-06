import { convertToBase64 } from "./../utils/toBase64";
import { BarcodeProduct } from "./../classes/barcodeProduct";
import { TextRow } from "..";
import { Barcode2Product } from "../classes/barcode2Product";
import { PictureProduct } from "../classes/pictureProduct";
import { QRProduct } from "../classes/qrcodeProduct";
import { getSize } from "../utils/getPicSize";
export class ImageFactory {
  static async convert(oldElement: TextRow): Promise<any> {
    switch (oldElement.type) {
      case "barcode":
        const bar = new BarcodeProduct(oldElement);
        bar.setSrc(
          convertToBase64(`./src/assets/images/${oldElement.type}.jpeg`)
        );
        let [, barD] = await Promise.allSettled([
          bar.saveImage(oldElement.type),
          getSize(oldElement.type),
        ]);
        if (barD.status === "fulfilled") {
          bar.setDimensions(
            barD.value.intrinscWitdh,
            barD.value.intrinsicHeight
          );
        }
        return bar;
      case "barcode2":
        const bar2 = new Barcode2Product(oldElement);
        bar2.setSrc(
          convertToBase64(`./src/assets/images/${oldElement.type}.jpeg`)
        );
        let [x, bar2D] = await Promise.allSettled([
          bar2.saveImage(oldElement.type),
          getSize(oldElement.type),
        ]);
        if (bar2D.status === "fulfilled") {
          bar2.setDimensions(
            bar2D.value.intrinscWitdh,
            bar2D.value.intrinsicHeight
          );
        }
        return bar2;
      case "picture":
        const pic = new PictureProduct(oldElement);
        pic.setSrc(
          convertToBase64(`./src/assets/images/${oldElement.type}.jpeg`)
        );
        let [, picD] = await Promise.allSettled([
          pic.saveImage(oldElement.type),
          getSize(oldElement.type),
        ]);
        if (picD.status === "fulfilled") {
          pic.setDimensions(
            picD.value.intrinscWitdh,
            picD.value.intrinsicHeight
          );
        }

        return pic;
      case "qrcode":
        const qr = new QRProduct(oldElement);
        qr.setSrc(
          convertToBase64(`./src/assets/images/${oldElement.type}.jpeg`)
        );
        let [, qrD] = await Promise.allSettled([
          qr.saveImage(oldElement.type),
          getSize(oldElement.type),
        ]);
        if (qrD.status === "fulfilled") {
          qr.setDimensions(qrD.value.intrinscWitdh, qrD.value.intrinsicHeight);
        }

        return qr;
    }
  }
}
