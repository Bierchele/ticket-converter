import fs from "fs";
export const convertToBase64 = (localFile: string): any => {
  var bitmap = fs.readFileSync(localFile);
  // convert binary data to base64 encoded string

  return "data:image/gif;base64," + bitmap.toString("base64");
};
