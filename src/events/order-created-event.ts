import { Event } from "./event";
import { Subject } from "./subjects";
import { OrderStatus } from "./types/order-status";

interface OrderCreatedEvent extends Event {
  subject: Subject.TicketCreated;
  data: {
    id: string;
    expiresAt: string;
    userId: string;
    status: OrderStatus;

    ticket: {
      id: string;
      title: string;
      price: number;
      userId: string;
      version: number;
    };
  };
}

export { OrderCreatedEvent };
