import { Event } from "./event";
import { Subject } from "./subjects";
import { OrderStatus } from "./types/order-status";

interface PaymentCreatedEvent extends Event {
  subject: Subject.PaymentCreated;
  data: {
    id: string;
    version: number;
  };
}

export { PaymentCreatedEvent };
