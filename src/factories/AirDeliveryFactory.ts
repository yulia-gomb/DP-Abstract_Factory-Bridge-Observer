import type { IDeliveryFactory } from "./IDeliveryFactory.ts";
import type { IDelivery } from "./IDelivery.ts";
import { AirDelivery } from "./AirDelivery.ts";

export class AirDeliveryFactory implements IDeliveryFactory {
    createDelivery(id: string): IDelivery {
        return new AirDelivery(id);
    }
}