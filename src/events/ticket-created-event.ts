import { Event } from "./event";
import { Subject } from "./subjects";

interface TicketCreatedEvent extends Event {
  subject: Subject.TicketCreated;
  data: {
    id: string;
    title: string;
    price: number;
  };
}

export default TicketCreatedEvent;
