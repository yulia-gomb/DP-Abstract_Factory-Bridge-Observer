import type { IDelivery } from "./IDelivery.ts";

export class SeaDelivery implements IDelivery {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }

    describe(): string {
        return `Sea Delivery: ID ${this.id}`;
    }
}