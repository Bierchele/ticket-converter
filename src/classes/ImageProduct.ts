import { fetchImage } from "../utils/fetchImage";
import { TextRow } from "..";
import { Image } from "../interfaces/image";

export class ImageProduct implements Image {
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
  crossOrigin!: null | string;
  filters!: [];

  public async saveImage(name: string, src: string) {
    await fetchImage(src, name);
  }

  public setDimensions(intrinsicWidth: number, intrinsicHeight: number) {
    this.scaleX = this.width / intrinsicWidth;
    this.scaleY = this.height / intrinsicHeight;
    this.width = intrinsicWidth;
    this.height = intrinsicHeight;
  }

  public setSrc(src: string) {
    this.src = src;
  }

  constructor(textRowObj: TextRow) {
    this.type = "image";
    this.version = "4.5.1";
    this.originX = "left";
    this.originY = "top";
    this.left = textRowObj.left;
    this.top = textRowObj.top;
    this.width = textRowObj.width;
    this.height = textRowObj.width;
    this.fill = "#000000";
    this.stroke = null;
    this.strokeWidth = 1;
    this.strokeDashArray = null;
    this.strokeLineCap = "butt";
    this.strokeDashOffset = 0;
    this.strokeLineJoin = "miter";
    this.strokeUniform = false;
    this.strokeMiterLimit = 4;
    this.scaleX = 0;
    this.scaleY = 0;
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
    this.src = "";
    this.crossOrigin = null;
    this.filters = [];
  }
}
