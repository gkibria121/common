import { Event } from "./event";
import { Subject } from "./subjects";

interface TicketUpdatedEvent extends Event {
  subject: Subject.TicketUpdated;
  data: null | undefined;
}

export { TicketUpdatedEvent };
