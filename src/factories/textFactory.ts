import { FabricObject, TextRow } from "..";
import { TextBox } from "../interfaces/textBox";

export class TextProduct implements TextBox {
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
  text!: string;
  fontSize!: number;
  fontWeight!: string;
  fontFamily!: string;
  fontStyle!: string;
  lineHeight!: number;
  underline!: false;
  overline!: false;
  linethrough!: false;
  textAlign!: string;
  textBackgroundColor!: string;
  charSpacing!: number;
  path!: null;
  direction!: string;
  minWidth!: number;
  splitByGrapheme!: false;
  styles!: {};

  constructor(textRowObj: TextRow) {
    this.type = "textbox";
    this.version = "4.5.1";
    this.originX = "left";
    this.originY = "top";
    this.left = textRowObj.left // * .9;
    this.top = textRowObj.top // * 0.90909090909;
    this.width = textRowObj.width ;
    this.height = 0 //textRowObj.height;
    this.fill = "#000000";
    this.stroke = null;
    this.strokeWidth = 1;
    this.strokeDashArray = null;
    this.strokeLineCap = "butt";
    this.strokeDashOffset = 0;
    this.strokeLineJoin = "miter";
    this.strokeUniform = false;
    this.strokeMiterLimit = 4;
    this.scaleX = 1;
    this.scaleY = 1;
    this.text = textRowObj.value;
    this.fontSize = textRowObj.fontsize // * 0.85;
    this.fontWeight = "normal";
    this.fontFamily = "Arial";
    this.fontStyle = "normal";
    this.lineHeight = 1.16;
    this.underline = false;
    this.overline = false;
    this.linethrough = false;
    this.textAlign = "left";
    this.textBackgroundColor = "";
    this.charSpacing = 0;
    this.path = null;
    this.direction = "ltr";
    this.minWidth = 20;
    this.splitByGrapheme = false;
    this.styles = {};
  }
}

export class TextFactory {
  static getObject(oldElement: TextRow): TextProduct {
    return new TextProduct(oldElement);
  }
}
