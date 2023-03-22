import { expect } from 'chai';
import { Color, decodeResistor } from '../src/ejercicio-7';

describe("decodeResistor", () => {
  it("should return the correct resistance value for two colors", () => {
    expect(decodeResistor([Color.Marrón, Color.Verde])).to.be.eql(15);
    expect(decodeResistor([Color.Rojo, Color.Verde])).to.be.eql(25);
    expect(decodeResistor([Color.Azul, Color.Blanco])).to.be.eql(69);
  });

  it("should ignore any additional colors", () => {
    expect(decodeResistor([Color.Marrón, Color.Verde, Color.Verde])).to.be.eql(15);
    expect(decodeResistor([Color.Rojo, Color.Verde, Color.Amarillo, Color.Marrón])).to.be.eql(25);
    expect(decodeResistor([Color.Azul, Color.Blanco, Color.Marrón, Color.Violeta])).to.be.eql(69);
  });
});
