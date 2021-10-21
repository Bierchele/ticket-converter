import { replaceT } from "./../utils/replaceTspans";
import { fabric } from "fabric";
import clipboardy from "clipboardy";

export const jsonToSvg = (json: any): any => {
  const myJson = json;
  let canvas: fabric.StaticCanvas;

  let string = `	<tspan x="-391.5" y="-3.41" style="white-space: pre;" > Beim Kauf des Tickets hast Du den Allgemeinen Geschäftsbedingungen des Veranstalters zugestimmt. Ticketio.de übernimmt keine Haftung für Schäden am Ticket, die der </tspan>
  <tspan x="-391.5" y="9.7" >Käufer zu verantworten hat. Für weitere Fragen bitte Kontakt aufnehmen mit support@ticketio.de.</tspan></text>
 `;

  string = replaceT(string);

  switch (myJson.ticketInfos.type) {
    case "printathome":
      canvas = new fabric.StaticCanvas(null, { width: 940, height: 1329 });
      let printAtHomeSvg = "";
      canvas?.loadFromJSON(myJson, async () => {
        canvas.renderAll();
        printAtHomeSvg = canvas?.toSVG();
        console.log(printAtHomeSvg);
      });
      return printAtHomeSvg;
    case "hard":
      canvas = new fabric.StaticCanvas(null, { width: 938, height: 365 });
      let hardSvg = "";
      canvas?.loadFromJSON(myJson, () => {
        canvas.renderAll();
        hardSvg = canvas?.toSVG();
      });

      return hardSvg;
    case "plastik":
      canvas = new fabric.StaticCanvas(null, { width: 450, height: 250 });
      let plastikSvg = "";
      canvas?.loadFromJSON(myJson, () => {
        canvas.renderAll();
        plastikSvg = canvas?.toSVG();
      });
      return plastikSvg;
    case "spio2zoll":
      canvas = new fabric.StaticCanvas(null, { width: 230, height: 230 });
      let spioSvg = "";
      canvas?.loadFromJSON(myJson, () => {
        canvas.renderAll();
        spioSvg = canvas?.toSVG();
      });
      return spioSvg;
    case "spio4zoll":
      canvas = new fabric.StaticCanvas(null, { width: 700, height: 400 });
      let spio4Svg = "";
      canvas?.loadFromJSON(myJson, () => {
        canvas.renderAll();
        spio4Svg = canvas?.toSVG();
      });
      return spio4Svg;
    case "boca6zoll":
      canvas = new fabric.StaticCanvas(null, { width: 700, height: 400 });
      let boca6Svg = "";
      canvas?.loadFromJSON(myJson, () => {
        canvas.renderAll();
        boca6Svg = canvas?.toSVG();
      });
      return boca6Svg;
    case "boca8zoll":
      canvas = new fabric.StaticCanvas(null, { width: 900, height: 350 });
      let boca8svg = "";
      canvas?.loadFromJSON(myJson, () => {
        canvas.renderAll();
        boca8svg = canvas?.toSVG();
      });
      return boca8svg;
  }
};
