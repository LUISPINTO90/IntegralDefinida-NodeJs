import Menu from "./menu.js";
import Keyboard from "./keyboard.js";

let options = ["Calcular Integral Definida", "Salir"];

class ToDoListApp {
  constructor() {}

  run() {
    let menu = new Menu(options);
    let option = -1;

    do {
      console.clear();
      option = menu.show();
      this.#options(option);
    } while (option !== 2);

    console.log("\nEl programa ha terminado.\n");
  }

  #options(option) {
    switch (option) {
      case 1:
        this.#definiteIntegration();
        break;
    }
  }

  #definiteIntegration() {
    console.clear();
    console.log(`\n\n====[ Integral Definida ]====\n`);

    let functionFX = Keyboard.readString("Escribe la funcion F(x): ");
    let upperLimit = Keyboard.readString("Escribe el limite Superior: ");
    let lowerLimit = Keyboard.readString("Escribe el limite Inferior: ");

    if (functionFX == "" || upperLimit == "" || lowerLimit == "") {
      console.log("\n[ERROR] Todos los campos son requeridos");
      Keyboard.readString("Presiona ENTER para continuar...");
    } else {
    }

    /* if (title == "" || deadline == "") {
      console.log("\n[ERROR] Todos los campos son requeridos");
      Keyboard.readString("Presiona ENTER para continuar...");
    } else {
      let item = new Item(title, deadline);
      this._toDoList.push(item);

      console.log(
        `\nSe agrego una tarea. Hay ${this._toDoList.length} tareas registradas`
      );

      Keyboard.readString("Presiona ENTER para continuar...");
    }*/
  }

  
}

let app = new ToDoListApp();
app.run();
