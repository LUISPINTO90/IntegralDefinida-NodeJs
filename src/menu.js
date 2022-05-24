import Keyboard from "./keyboard.js";

export default class Menu {
  constructor(options) {
    this._options = options;
  }

  show() {
    console.log("\n\n====[ MENU DE OPCIONES ]====");

    this._options.forEach((option, index) => {
      console.log(`[ ${index + 1} ] ${option}`);
    });

    let selected = Keyboard.readNumber("\nSelecciona una opcion: ");

    return selected;
  }
}
