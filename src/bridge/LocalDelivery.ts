import type { DeliveryImplementation } from "./DeliveryImplementation.ts";


export class LocalDelivery implements DeliveryImplementation {
    deliver(): string {
        return "Performing local delivery within the city or country.";
    }
}
