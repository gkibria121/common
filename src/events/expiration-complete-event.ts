import { Event } from "./event";
import { Subject } from "./subjects";
import { OrderStatus } from "./types/order-status";

interface ExpirationCompleteEvent extends Event {
  subject: Subject.ExpirationComplete;
  data: {
    id: string;
  };
}

export { ExpirationCompleteEvent };
