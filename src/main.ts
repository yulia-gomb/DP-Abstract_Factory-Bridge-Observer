import { SurfaceDeliveryFactory } from "./factories/SurfaceDeliveryFactory.ts";
import { LocalDelivery} from "./bridge/LocalDelivery.ts";
import { ExpressDelivery } from "./bridge/ExpressDelivery.ts";
import { DeliverySubject } from "./observer/DeliverySubject.ts";
import { ConcreteClientObserver } from "./observer/ConcreteClientObserver.ts";


console.log("\n=== Delivery System Simulation ===");

// 1: Create the delivery object using Abstract Factory
const surfaceFactory = new SurfaceDeliveryFactory();
const deliveryObject = surfaceFactory.createDelivery("S-001");
console.log(deliveryObject.describe());

// 2: Apply a Delivery type (Bridge)
const localDelivery = new LocalDelivery();
const deliveryProcess = new ExpressDelivery(localDelivery);

console.log(deliveryProcess.deliver());

// 3: Attach observers (Clients) for notifications
const deliverySubject = new DeliverySubject();

const client1 = new ConcreteClientObserver("Client 1");
const client2 = new ConcreteClientObserver("Client 2");

deliverySubject.subscribe(client1);
deliverySubject.subscribe(client2);

console.log("\n--- Simulating Delivery Status Updates ---");

// 4: Simulate status changes and notify clients
deliverySubject.setStatus("Created");
deliverySubject.setStatus("In Transit");
deliverySubject.setStatus("Delivered");