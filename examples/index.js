import { toHEX, toRGB } from '../src/index';

console.warn(toRGB('#333', 0.8));
console.warn(toHEX('rgb(23,34,56)'));
console.warn(toRGB('rgb(255,255,255)', 0.8));
