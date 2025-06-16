import type { IDelivery } from "./IDelivery.ts";

export class AirDelivery implements IDelivery {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }

    describe(): string {
        return `Air Delivery: ID ${this.id}`;
    }
}