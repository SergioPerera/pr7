import { Observable } from "./observable";
import { Observer } from "./observer";

/**
 * Class for magazine objects
 * @implements Observable
 * @implements Observer
 * @param title Title of the magazine
 * @param editionNumber Edition number of the magazine
 * @param subscribers List of subscribers
 * @method subscribe Subscribe an observer
 * @method unsubscribe Unsubscribe an observer
 * @method notify Notify all subscribers
 * @method launchNewEdition Launch a new edition of the magazine
 * @method getTitle Get the title of the magazine
 * @method getEditionNumber Get the edition number of the magazine
 */
export class Magazine implements Observable {
  private subscribers: Observer[] = [];

  constructor(private title: string, private editionNumber: number) {}

  subscribe(observer: Observer) {
    if (!this.subscribers.includes(observer)) {
      this.subscribers.push(observer);
    }
  }

  unsubscribe(observer: Observer) {
    const index = this.subscribers.indexOf(observer);
    if (index !== -1) {
      this.subscribers.splice(index, 1);
    }
  }

  notify() {
    this.subscribers.forEach((suscriptor) => { suscriptor.update(this);});
  }

  launchNewEdition(editionNumber: number) {
    this.editionNumber = editionNumber;
    this.notify();
  }

  getTitle() {
    return this.title;
  }

  getEditionNumber() {
    return this.editionNumber;
  }
}
