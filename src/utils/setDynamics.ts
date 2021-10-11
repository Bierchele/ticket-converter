import { TextRow } from "..";
import { getSize } from "./getPicSize";
import { convertToBase64 } from "./toBase64";

export const setDynamics = async (
  oldElement: TextRow,
  product: any,
  src: string
) => {
  let [empty, imageDimensions] = await Promise.allSettled([
    await product.saveImage(oldElement.type, src),
    await getSize(oldElement.type),
  ]);
  if (imageDimensions.status === "fulfilled") {
    product.setDimensions(
      imageDimensions.value.intrinscWitdh,
      imageDimensions.value.intrinsicHeight
    );
  }
  product.setSrc(
    convertToBase64(`./src/assets/images/${oldElement.type}.jpeg`)
  );
  return product;
};
