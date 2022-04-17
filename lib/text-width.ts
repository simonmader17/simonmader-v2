const getTextWidth = (text, font) => {
  console.log(text, font);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};

const getCssStyle = (element, prop) => {
  return window.getComputedStyle(element, null).getPropertyValue(prop);
};

const getCanvasFontSize = (el = document.body) => {
  const fontWeight = getCssStyle(el, "font-weight") || "normal";
  const fontSize = getCssStyle(el, "font-size") || "16px";
  const fontFamily = getCssStyle(el, "font-family") || "Times New Roman";

  return `${fontWeight} ${fontSize} ${fontFamily}`;
};

export { getTextWidth, getCssStyle, getCanvasFontSize };
