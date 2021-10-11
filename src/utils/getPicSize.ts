import { promisify } from "util";
const sizeOf = promisify(require("image-size"));

export const getSize = async (type: string) => {
  const dimensions = await sizeOf(`./src/assets/images/${type}.jpeg`);
  console.log(dimensions, type);
  return {
    intrinscWitdh: dimensions.width as number,
    intrinsicHeight: dimensions.height as number,
  };
};
