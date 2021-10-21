export const replaceT = (svgString: string) => {
  let newSvg = svgString.replace(/x="/g, 'dx="');
  return newSvg.replace(/y="/g, 'dy="');
};
