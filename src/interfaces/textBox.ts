import { FabricObject } from "./fabricObject";



export interface TextBox extends FabricObject {
  text:string,
  fontSize: number,
  fontWeight: string,
  fontFamily: string,
  fontStyle: string,
  lineHeight: number,
  underline: false,
  overline: false,
  linethrough: false,
  textAlign: string,
  textBackgroundColor: string,
  charSpacing: number,
  path: null,
  direction: string,
  minWidth: number,
  splitByGrapheme: false,
  styles: {}
  }