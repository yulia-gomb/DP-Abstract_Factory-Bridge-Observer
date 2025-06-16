import type { DeliveryImplementation } from "./DeliveryImplementation.ts";

export class InternationalDelivery implements DeliveryImplementation {
    deliver(): string {
        return "Performing international delivery between countries.";
    }
}