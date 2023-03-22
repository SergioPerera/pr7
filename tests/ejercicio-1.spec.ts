import 'mocha'; 
import { expect } from 'chai';
import { getAllergens, Allergen } from '../src/ejercicio-1';

describe('allergens list', () => {
  it('getAllergens(129) should return [Huevo, Gato]', () => {
    expect(getAllergens(129)).to.be.eql([ Allergen[1], Allergen[128] ]);
  });
})

// getAllergens(257) // It should return [Huevo]
describe('allergens list', () => {
  it('getAllergens(257) should return [Huevo]', () => {
    expect(getAllergens(257)).to.be.eql([ Allergen[1] ]);
  });
})

// getAllergens(256) // It should return []
describe('allergens list', () => {
  it('getAllergens(256) should return []', () => {
    expect(getAllergens(256)).to.be.eql([]);
  });
})

// getAllergens(515) // It should return [Huevo, Cacahuete]
describe('allergens list', () => {
  it('getAllergens(515) should return [Huevo, Cacahuete]', () => {
    expect(getAllergens(515)).to.be.eql([ Allergen[1], Allergen[2] ]);
  });
})