
/**
@typedef {Array<number>} Complex - Array representing a complex number
@property {number} 0 - The real part of the complex number
@property {number} 1 - The imaginary part of the complex number
*/
export type Complex = [number, number];
/**
Adds two complex numbers.
@param {Complex} a - The first complex number
@param {Complex} b - The second complex number
@returns {Complex} The result of adding the two complex numbers
*/
export function add(a: Complex, b: Complex): Complex {
  return [a[0] + b[0], a[1] + b[1]];
}
/**
Subtracts two complex numbers.
@param {Complex} a - The first complex number
@param {Complex} b - The second complex number
@returns {Complex} The result of subtracting the two complex numbers
*/
export function sub(a: Complex, b: Complex): Complex {
  return [a[0] - b[0], a[1] - b[1]];
}
/**
Multiplies two complex numbers.
@param {Complex} a - The first complex number
@param {Complex} b - The second complex number
@returns {Complex} The result of multiplying the two complex numbers
*/
export function mult(a: Complex, b: Complex): Complex {
  return [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
}
/**
Divides two complex numbers.
@param {Complex} a - The first complex number
@param {Complex} b - The second complex number
@returns {Complex} The result of dividing the two complex numbers
*/
export function div(a: Complex, b: Complex) {
  const den = (b[0] * b[0]) + (b[1] * b[1]);
  return [((a[0] * b[0]) + (a[1] * b[1])) / den, ((a[1] * b[0]) - (a[0] * b[1])) / den];
}
/**
Multiplies a complex number by a scalar.
@param {Complex} a - The complex number
@param {number} b - The scalar
@returns {Complex} The result of multiplying the complex number by the scalar
*/
export function prod(a: Complex, b: number): Complex {
  return [a[0] * b, a[1] * b];
}
/**
Returns the conjugate of a complex number.
@param {Complex} a - The complex number
@returns {Complex} The conjugate of the complex number
*/
export function conj(a: Complex): Complex {
  return [a[0], -a[1]];
}
/**
Returns the absolute value of a complex number.
@param {Complex} a - The complex number
@returns {number} The absolute value of the complex number
*/
export function abs(a: Complex): number {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
}