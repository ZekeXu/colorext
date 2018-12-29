function rgbToHex(rgb: string): string {
  const color = rgb.toString().match(/\d+/g);
  let hex = '#';

  for (let i = 0; i < 3; i++) {
    hex += (`0${Number(color[i]).toString(16)}`).slice(-2);
  }
  return hex;
}

function rgbToRgba(rgb: string, alpha = 1) {
  const color = rgb.toString().match(/\d+/g);
  return `rgba(${color.join(', ')}, ${alpha})`;
}

function hexToRgb(hex: string, alpha = 1) {
  const rgb: number[] = [];
  let result = hex.substr(1);

  if (result.length === 3) {
    result = result.replace(/(.)/g, '$1$1');
  }

  result.replace(/../g, (color: string) => {
    rgb.push(parseInt(color, 0x10));
    return color;
  });

  return `rgba(${rgb.join(', ')}, ${alpha})`;
}

enum COLORTYPE {
  RGB = 'RGB',
  HEX = 'HEX',
}

function getType(color: string) {
  const isHEXReg = /^\#(\w{3}|\w{6})$/;
  const isRGBReg = /^rgb\(\d{1,3},\s*\d{1,3},\s*\d{1,3}\)$/;
  if (isHEXReg.test(color)) {
    return COLORTYPE.HEX;
  }
  if (isRGBReg.test(color)) {
    return COLORTYPE.RGB;
  }

  throw new Error('Color is wrong or not support, please use hex or rgb color');
}

export function toRGB(color: string, alpha?: number) {
  if (getType(color) === COLORTYPE.HEX) {
    return hexToRgb(color, alpha);
  }

  if (getType(color) === COLORTYPE.RGB) {
    return rgbToRgba(color, alpha);
  }

  return color;
}

export function toHEX(color: string) {
  if (getType(color) === COLORTYPE.RGB) {
    return rgbToHex(color);
  }
  return color;
}
