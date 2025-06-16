import type { IDeliveryFactory } from "./IDeliveryFactory.ts";
import type { IDelivery } from "./IDelivery.ts";
import { SeaDelivery } from "./SeaDelivery.ts";

export class SeaDeliveryFactory implements IDeliveryFactory {
    createDelivery(id: string): IDelivery {
        return new SeaDelivery(id);
    }
}