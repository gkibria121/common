import { Stan } from "node-nats-streaming";
import { Event } from "./event";

abstract class Publisher<T extends Event> {
  abstract subject: T["subject"];
  constructor(private client: Stan) {}
  publish(data: T["data"]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (error) => {
        if (error) {
          reject(error);
        }
        resolve();
      });
    });
  }
}
export { Publisher };
