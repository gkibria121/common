import { Event } from "./event";
import { Subject } from "./subjects";

interface TicketDeletedEvent extends Event {
  subject: Subject.TicketDeleted;
  data: {
    id: string;
  };
}

export { TicketDeletedEvent };
