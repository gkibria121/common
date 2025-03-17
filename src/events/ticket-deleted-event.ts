import { Event } from "./event";
import { Subject } from "./subjects";

interface TicketDeletedEvent extends Event {
  subject: Subject.TicketDeleted;
  data: null | undefined;
}

export { TicketDeletedEvent };
