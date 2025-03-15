import Publisher from "./publisher";
import { Subject } from "./subjects";
import TicketCreatedEvent from "./ticket-created-event";

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject = Subject.TicketCreated;
}

export default TicketCreatedPublisher;
