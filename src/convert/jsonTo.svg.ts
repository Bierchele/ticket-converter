import { replaceT } from "./../utils/replaceTspans";
import { fabric } from "fabric";
import clipboardy from "clipboardy";
import { querySVG } from "./fabricToShema";

export const jsonToSvg = (json: any, id: number) => {
  //let canvas: fabric.StaticCanvas;
  switch (json.ticketInfos.type) {
    case "printathome":
      const printAtHomeCanvas = new fabric.StaticCanvas(null, {
        width: 940,
        height: 1329,
      });
      printAtHomeCanvas?.loadFromJSON(json, async function () {
        printAtHomeCanvas.renderAll();
        const svg = printAtHomeCanvas.toSVG();
        await querySVG(svg, id);
      });

    case "hard":
      const hardCanvas = new fabric.StaticCanvas(null, {
        width: 938,
        height: 365,
      });
      hardCanvas?.loadFromJSON(json, async () => {
        hardCanvas.renderAll();
        const svg = hardCanvas?.toSVG();
        await querySVG(svg, id);
      });
    case "plastik":
      const plastikCanvas = new fabric.StaticCanvas(null, {
        width: 450,
        height: 250,
      });
      plastikCanvas?.loadFromJSON(json, async () => {
        plastikCanvas.renderAll();
        const svg = plastikCanvas?.toSVG();
        await querySVG(svg, id);
      });
    case "spio2zoll":
      const spio2Canvas = new fabric.StaticCanvas(null, {
        width: 230,
        height: 230,
      });
      spio2Canvas?.loadFromJSON(json, async () => {
        spio2Canvas.renderAll();
        const svg = spio2Canvas?.toSVG();
        await querySVG(svg, id);
      });

    case "spio4zoll":
      const spio4Canvas = new fabric.StaticCanvas(null, {
        width: 700,
        height: 400,
      });
      spio4Canvas?.loadFromJSON(json, async () => {
        spio4Canvas.renderAll();
        const svg = spio4Canvas?.toSVG();
        await querySVG(svg, id);
      });
    case "boca6zoll":
      const boca6Canvas = new fabric.StaticCanvas(null, {
        width: 700,
        height: 400,
      });
      boca6Canvas?.loadFromJSON(json, async () => {
        boca6Canvas.renderAll();
        const svg = boca6Canvas?.toSVG();
        await querySVG(svg, id);
      });
    case "boca8zoll":
      const boca8Canvas = new fabric.StaticCanvas(null, {
        width: 900,
        height: 350,
      });
      boca8Canvas?.loadFromJSON(json, async () => {
        boca8Canvas.renderAll();
        const svg = boca8Canvas?.toSVG();
        await querySVG(svg, id);
      });
  }
};
