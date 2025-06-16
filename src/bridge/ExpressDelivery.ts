import { DeliveryType } from "./DeliveryType.ts";

export class ExpressDelivery extends DeliveryType {
    deliver(): string {
        return `Express delivery initiated. ${this.implementation.deliver()}`;
    }
}