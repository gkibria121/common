import nats from "node-nats-streaming";
import { randomBytes } from "crypto";
const id = randomBytes(10).toString("hex");
const stan = nats.connect("nats-streaming", id, {
  url: "http://localhost:4222",
});
stan.on("connect", () => {
  console.log("connected !");
});
