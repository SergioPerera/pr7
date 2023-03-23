import { Observable } from './observable';
import { Observer } from './observer';
import { Magazine } from './magazine';

/**
 * Class for subscriber objects
 * @implements Observer
 * @param name Name of the subscriber
 * @method update Update the subscriber
 * 
 */
export class Subscriptor implements Observer {
  constructor(private name: string) {}

  update(observable: Observable) {
    if (observable instanceof Magazine) {
      console.log(`El suscriptor ${this.name} ha recibido la nueva edición de la revista "${observable.getTitle()}", número ${observable.getEditionNumber()}`);
    }
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}

// Creamos una nueva revista
const magazine = new Magazine("Mi revista", 1);

// Creamos dos nuevos suscriptores
const subscriber1 = new Subscriptor("Juan");
const subscriber2 = new Subscriptor("Ana");

// Los suscriptores se suscriben a la revista
magazine.subscribe(subscriber1);
magazine.subscribe(subscriber2);

// La revista lanza una nueva edición
magazine.launchNewEdition(2);
