const generateNumber = (min = 0, max = 255) => {
  return Math.trunc(Math.random() * (max - min + 1) + min);
};

export { generateNumber };
