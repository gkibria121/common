import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
import { TicketCreatedPublisher } from "./events/ticket-created-publisher";
import { title } from "process";
const id = randomBytes(10).toString("hex");
const stan = nats.connect("nats-streaming", id, {
  url: "http://localhost:4222",
});
stan.on("connect", () => {
  console.log("connected !");

  new TicketCreatedPublisher(stan).publish({
    title: "Ticket 1",
    price: 10,
    id: "122",
  });
});
