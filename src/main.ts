import { SurfaceDeliveryFactory } from "./factories/SurfaceDeliveryFactory.ts";
import { AirDeliveryFactory } from "./factories/AirDeliveryFactory.ts";
import { SeaDeliveryFactory } from "./factories/SeaDeliveryFactory.ts";


const surfaceFactory = new SurfaceDeliveryFactory();
const airFactory = new AirDeliveryFactory();
const seaFactory = new SeaDeliveryFactory();

// Use factories to create delivery objects
const surfaceDelivery = surfaceFactory.createDelivery("S-123");
const airDelivery = airFactory.createDelivery("A-456");
const seaDelivery = seaFactory.createDelivery("SE-789");

console.log(surfaceDelivery.describe());
console.log(airDelivery.describe());
console.log(seaDelivery.describe());

