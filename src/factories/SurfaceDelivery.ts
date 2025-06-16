import type { IDelivery } from "./IDelivery.ts";

export class SurfaceDelivery implements IDelivery {
    private readonly id: string;

    constructor(id: string) {
        this.id = id;
    }

    getId(): string {
        return this.id;
    }

    describe(): string {
        return `Surface Delivery: ID ${this.id}`;
    }
}