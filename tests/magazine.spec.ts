import 'mocha';
import { expect } from 'chai';

import { Magazine } from "../src/magazine";
import { Observer } from "../src/observer";

describe('Magazine', () => {
  let magazine: Magazine;
  let observer1: Observer;
  let observer2: Observer;

  beforeEach(() => {
    magazine = new Magazine('Title', 1);
    observer1 = { update: (observable: any) => {} };
    observer2 = { update: (observable: any) => {} };
  });

  it('should be able to subscribe observers', () => {
    magazine.subscribe(observer1);
    expect(magazine['subscribers']).contain(observer1);
  });

  it('should not subscribe the same observer twice', () => {
    magazine.subscribe(observer1);
    magazine.subscribe(observer1);
    expect(magazine['subscribers']).length(1);
  });

  it('should be able to unsubscribe observers', () => {
    magazine.subscribe(observer1);
    magazine.subscribe(observer2);

    magazine.unsubscribe(observer1);
    expect(magazine['subscribers']).not.contain(observer1);
    expect(magazine['subscribers']).contain(observer2);
  });

  it('should not unsubscribe an observer that is not subscribed', () => {
    magazine.subscribe(observer1);
    magazine.unsubscribe(observer2);
    expect(magazine['subscribers']).contain(observer1);
  });

  // it('should notify all subscribers when a new edition is launched', () => {
  //   magazine.subscribe(observer1);
  //   magazine.subscribe(observer2);

  //   magazine.launchNewEdition(2);

  // hacer para que se actualice el numero de edición
  // });

  it('should update the edition number when a new edition is launched', () => {
    magazine.launchNewEdition(2);
    expect(magazine.getEditionNumber()).to.be.eql(2);
  });

  it('should return the title of the magazine', () => {
    expect(magazine.getTitle()).to.be.eql('Title');
  });

  it('should return the edition number of the magazine', () => {
    expect(magazine.getEditionNumber()).to.be.eql(1);
  });
});

