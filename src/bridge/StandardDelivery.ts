import { DeliveryType } from "./DeliveryType.ts";

export class StandardDelivery extends DeliveryType {
    deliver(): string {
        return `Standard delivery initiated. ${this.implementation.deliver()}`;
    }
}