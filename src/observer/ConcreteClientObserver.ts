import type { ClientObserver } from "./ClientObserver.ts";

export class ConcreteClientObserver implements ClientObserver {
    private readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Update method that receives new delivery status
    update(status: string): void {
        console.log(`[${this.name}]: Received delivery status update: ${status}`);
    }
}