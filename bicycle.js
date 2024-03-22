// SubClass
import { Vehicle } from "./vehicle.js";

export class Bicycle extends Vehicle {
    
  constructor(color = "blue", horn = "honk honk") {
    super(color, 2, horn);
  }
}
