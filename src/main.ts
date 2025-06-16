import { SurfaceDeliveryFactory } from "./factories/SurfaceDeliveryFactory.ts";
import { AirDeliveryFactory } from "./factories/AirDeliveryFactory.ts";
import { SeaDeliveryFactory } from "./factories/SeaDeliveryFactory.ts";
import {StandardDelivery} from "./bridge/StandardDelivery.ts";
import {LocalDelivery} from "./bridge/LocalDelivery.ts";
import {ExpressDelivery} from "./bridge/ExpressDelivery.ts";
import {InternationalDelivery} from "./bridge/InternationalDelivery.ts";
import {DeliverySubject} from "./observer/DeliverySubject.ts";
import {ConcreteClientObserver} from "./observer/ConcreteClientObserver.ts";


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

// Local Standard Delivery
const localStandardDelivery = new StandardDelivery(new LocalDelivery());
console.log(localStandardDelivery.deliver());

// International Express Delivery
const internationalExpressDelivery = new ExpressDelivery(new InternationalDelivery());
console.log(internationalExpressDelivery.deliver());


// Test Observer Pattern

// Create a delivery subject
const delivery = new DeliverySubject();

// Create observers
const client1 = new ConcreteClientObserver("Client 1");
const client2 = new ConcreteClientObserver("Client 2");

// Attach observers to the delivery subject
delivery.subscribe(client1);
delivery.subscribe(client2);

// Change status of the delivery
delivery.setStatus("Created");
delivery.setStatus("In Transit");
delivery.setStatus("Delivered");