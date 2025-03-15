import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import TicketCreatedListener from "./events/ticket-created-listener";
const id = randomBytes(10).toString("hex");
const stan = nats.connect("nats-streaming", id, {
  url: "http://localhost:4222",
});
stan.on("connect", () => {
  console.log("connected !");

  new TicketCreatedListener(stan, "test-group-2").listen();
});
