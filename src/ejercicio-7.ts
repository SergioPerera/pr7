/**

This is an enum for the colors of the resistors.
@readonly
@enum {number}
*/
export enum Color {
  Negro = 0,
  Marrón = 1,
  Rojo = 2,
  Naranja = 3,
  Amarillo = 4,
  Verde = 5,
  Azul = 6,
  Violeta = 7,
  Gris = 8,
  Blanco = 9,
  }
  /**
  
This function takes an array of Color enums and decodes the resistor values.
@param {Color[]} arr - The array of Color enums.
@returns {number} The decoded value of the resistor.
*/
export function decodeResistor(arr: Color[]): number {
  return arr[0]*10 + arr[1];
}



