import type { IDeliveryFactory } from "./IDeliveryFactory.ts";
import type { IDelivery } from "./IDelivery.ts";
import { SurfaceDelivery } from "./SurfaceDelivery.ts";

export class SurfaceDeliveryFactory implements IDeliveryFactory {
    createDelivery(id: string): IDelivery {
        return new SurfaceDelivery(id);
    }
}