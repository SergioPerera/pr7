import 'mocha';
import { expect } from 'chai';

import { Subscriptor } from '../src/subscriber';
import { Magazine } from '../src/magazine';

describe('Subscriptor', () => {
  let subscriptor: Subscriptor;
  let magazine: Magazine;

  beforeEach(() => {
    subscriptor = new Subscriptor('John');
    magazine = new Magazine('Magazine A', 1);
  });

  it('should have a name', () => {
    expect(subscriptor.getName()).to.be.eql('John');
  });

  it('should be able to change name', () => {
    subscriptor.setName('Jane');
    expect(subscriptor.getName()).to.be.eql('Jane');
  });
});
