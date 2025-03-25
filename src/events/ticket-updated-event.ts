import { Event } from "./event";
import { Subject } from "./subjects";

interface TicketUpdatedEvent extends Event {
  subject: Subject.TicketUpdated;
  data: {
    id: string;
    title: string;
    price: number;
    userId: string;
    version: number;
  };
}

export { TicketUpdatedEvent };
