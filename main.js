import { Vehicle } from "./vehicle.js";
import { Bicycle } from "./bicycle.js";

const bus = new Vehicle();
console.log(`The color is ${bus.color} and has ${bus.wheels} 
and the hockHorn of it is ${bus.hockHorn}`);


const bicycle = new Bicycle();
console.log(`The color is ${bicycle.color} and has ${bicycle.wheels} and 
the hockHorn of it is ${bicycle.honkHorn}`);
