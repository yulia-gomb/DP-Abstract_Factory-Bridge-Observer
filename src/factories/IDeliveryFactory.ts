import type { IDelivery } from "./IDelivery.ts";

export interface IDeliveryFactory {
    createDelivery(id: string): IDelivery; // Method to create a delivery
}