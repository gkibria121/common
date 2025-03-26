import { Message, Stan } from "node-nats-streaming";
import { Event } from "./event";
abstract class Listener<T extends Event> {
  abstract subject: T["subject"];
  abstract groupQueueName: string;
  protected client: Stan;
  protected ackWait = 5 * 1000;
  constructor(client: Stan) {
    this.client = client;
  }
  private getSubscriberOptions() {
    return this.client
      .subscriptionOptions()
      .setAckWait(this.ackWait)
      .setManualAckMode(true)
      .setDeliverAllAvailable()
      .setDurableName(this.groupQueueName);
  }

  public listen() {
    this.client
      .subscribe(this.subject, this.groupQueueName, this.getSubscriberOptions())
      .on("message", (msg: Message) => {
        this.onMessage(this.parseMessage(msg), msg);
      });
  }
  abstract onMessage(data: T["data"], msg: Message): void;

  protected parseMessage(msg: Message) {
    const data = msg.getData();
    return typeof data === "string"
      ? JSON.parse(data)
      : JSON.parse(data.toString("base64"));
  }
}
export { Listener };
