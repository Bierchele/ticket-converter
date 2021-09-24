import { TextRow } from "..";
import { Image } from "../interfaces/image";



export class BarcodeProduct implements Image {
    type!: string;
    version!: string;
    originX!: string;
    originY!: string;
    left!: number;
    top!: number;
    width!: number;
    height!: number;
    fill!: string;
    stroke!: null;
    strokeWidth!: number;
    strokeDashArray!: null;
    strokeLineCap!: string;
    strokeDashOffset!: number;
    strokeLineJoin!: string;
    strokeUniform!: boolean;
    strokeMiterLimit!: number;
    scaleX!: number;
    scaleY!: number;
    angle!: number;
    flipX!: boolean;
    flipY!: boolean;
    opacity!: number;
    shadow!: null;
    visible!: boolean;
    backgroundColor!: string;
    fillRule!: string;
    paintFirst!: string;
    globalCompositeOperation!: string;
    skewX!: number;
    skewY!: number;
    cropX!: number;
    cropY!: number;
    src!: string;
    crossOrigin!: string | null;
    filters!: [];
  
    constructor(textRowObj: TextRow) {
      this.type = "image";
      this.version = "4.5.1";
      this.originX = "left";
      this.originY = "top";
      this.left = textRowObj.left // * 0.9423076922992308;
      this.top = textRowObj.top // * 0.8539156626508434;
      this.width = (textRowObj.width / 0.6837606837606838);
      this.height = (textRowObj.height / 0.7024793388429752);
      this.fill = "#000000";
      this.stroke = null;
      this.strokeWidth = 1;
      this.strokeDashArray = null;
      this.strokeLineCap = "butt";
      this.strokeDashOffset = 0;
      this.strokeLineJoin = "miter";
      this.strokeUniform = false;
      this.strokeMiterLimit = 4;
      this.scaleX = textRowObj.width / 351 // * 0.83 / 351;
      this.scaleY = textRowObj.height / 121 // * 0.83  / 121;
      this.angle = 0;
      this.flipX = false;
      this.flipY = false;
      this.opacity = 1;
      this.shadow = null;
      this.visible = true;
      this.backgroundColor = "";
      this.fillRule = "nonzero";
      this.paintFirst = "fill";
      this.globalCompositeOperation = "source-over";
      this.skewX = 0;
      this.skewY = 0;
      this.cropX = 0;
      this.cropY != 0;
      this.src = ""; // "https://cdn.tiodev.de/assets/admin/img/ticketdesigneditor/barcode1.gif",
      this.crossOrigin = null;
      this.filters = [];
    }
  }