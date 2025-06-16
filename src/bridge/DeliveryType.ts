import type { DeliveryImplementation } from "./DeliveryImplementation.ts";

export abstract class DeliveryType {
    protected implementation: DeliveryImplementation;

    constructor(implementation: DeliveryImplementation) {
        this.implementation = implementation;
    }

    abstract deliver(): string;
}
