import { Event } from "./event";
import { Subject } from "./subjects";

interface OrderDeletedEvent extends Event {
  subject: Subject.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
      version: number;
    };
  };
}

export { OrderDeletedEvent };
