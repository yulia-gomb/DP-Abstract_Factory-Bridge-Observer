import type { ClientObserver } from "./ClientObserver.ts";

export class DeliverySubject {
    private observers: ClientObserver[] = [];
    private status: string = "";

    subscribe(observer: ClientObserver): void {
        this.observers.push(observer);
    }

    unsubscribe(observer: ClientObserver): void {
        this.observers = this.observers.filter(sub => sub !== observer);
    }

    // Notify all observers about the status change
    notify(): void {
        this.observers.forEach(observer => observer.update(this.status));
    }

    // Change the delivery status and notify observers
    setStatus(newStatus: string): void {
        this.status = newStatus;
        console.log(`Delivery status changed: ${newStatus}`);
        this.notify(); // Notify all observers
    }
}