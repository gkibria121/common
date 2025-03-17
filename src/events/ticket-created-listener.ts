import { Message, Stan } from "node-nats-streaming";
import { Listener } from "./listener";
import { Subject } from "./subjects";
import { TicketCreatedEvent } from "./ticket-created-event";

class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject = Subject.TicketCreated;
  constructor(client: Stan, public groupQueueName: string) {
    super(client);
  }
  onMessage(
    data: { id: string; title: string; price: number },
    msg: Message
  ): void {
    console.log(`${msg.getSequence()} Message recieved!`);
    msg.ack();
  }
}

export { TicketCreatedListener };
