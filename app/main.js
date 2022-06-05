import { BgImagesController } from "./Controllers/BgImagesController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { ToDosController } from "./Controllers/TodosController.js";
import { ValuesController } from "./Controllers/ValuesController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  // valuesController = new ValuesController();

  bgImagesController = new BgImagesController()

  toDosController = new ToDosController()

  weatherController = new WeatherController()
  
  quotesController = new QuotesController()
  
}

window["app"] = new App();
