import { Event } from "./event";
import { Subject } from "./subjects";

interface OrderDeletedEvent extends Event {
  subject: Subject.TicketCreated;
  data: {
    id: string;
    ticket: {
      price: number;
    };
  };
}

export { OrderDeletedEvent };
