import { generateNumber } from "./number";

const generateColorRgb = (min = 0, max = 255) => {
  return `rgb(${generateNumber(min, max)},${generateNumber(
    min,
    max
  )},${generateNumber(min, max)})`;
};

export { generateColorRgb };
