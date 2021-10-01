const { promisify } = require("util");
const sizeOf = promisify(require("image-size"));

export const getSize = () => {
  const dimensions = sizeOf("./src/assets/images/qrcode.JPEG");
  console.log(dimensions.width, dimensions.height);
};

// lokal speichern
