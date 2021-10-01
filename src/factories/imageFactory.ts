import { BarcodeProduct } from "./../classes/barcodeProduct";
import { TextRow } from "..";
import { Image } from "../interfaces/image";
import { Barcode2Product } from "../classes/barcode2Product";
import { PictureProduct } from "../classes/pictureProduct";
import { QRProduct } from "../classes/qrcodeProduct";

export class ImageFactory {
  static getObject(oldElement: TextRow): any {
    switch (oldElement.type) {
      case "barcode":
        return new BarcodeProduct(oldElement);

      case "barcode2":
        return new Barcode2Product(oldElement);
      case "picture":
        return new PictureProduct(oldElement);
      case "qrcode":
        const qr = new QRProduct(oldElement);
        qr.saveImage;
        qr.getSize(oldElement);
        //console.log(qr);
        return qr;
    }
  }
}
