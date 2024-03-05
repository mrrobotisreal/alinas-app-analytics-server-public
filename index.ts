import express from "express";
import { init_db } from "./init_db";
init_db();
import cors from "cors";
import {
  storeNewEvent,
  getAllEvents,
  getEventsByName,
  getEventsByLocation,
  getEventsByContext,
  getEventsByDate,
  getSpecificEvents,
} from "./controllers/Event";
import { EventDocument } from "./models/Event";

const app = express();
const SERVER_PORT = 9888;

app.use(cors());
app.use(express.json());

app.get("/getAllEvents", async (req, res) => {
  console.log("GET /getAllEvents");
  const eventsList: EventDocument[] = await getAllEvents();

  if (!eventsList) {
    return res.status(404).json({ message: "No events found" });
  }

  res.status(200).json(eventsList);
});

app.post("/storeNewEvent", async (req, res) => {
  console.log("POST /storeNewEvent");
  const event = req.body;
  const savedEvent: EventDocument = await storeNewEvent(event);

  if (!savedEvent) {
    return res.status(500).json({ message: "Error saving event" });
  }

  res.status(201).json(savedEvent);
});

app.post("/getEventsByName", async (req, res) => {
  console.log("POST /getEventsByName");
  const { name } = req.body;
  const eventsList: EventDocument[] = await getEventsByName(name);

  if (!eventsList) {
    return res.status(404).json({ message: "No events found" });
  }

  res.status(200).json(eventsList);
});

app.post("/getEventsByLocation", async (req, res) => {
  console.log("POST /getEventsByLocation");
  const { location } = req.body;
  const eventsList: EventDocument[] = await getEventsByLocation(location);

  if (!eventsList) {
    return res.status(404).json({ message: "No events found" });
  }

  res.status(200).json(eventsList);
});

app.post("/getEventsByContext", async (req, res) => {
  console.log("POST /getEventsByContext");
  const { context } = req.body;
  const eventsList: EventDocument[] = await getEventsByContext(context);

  if (!eventsList) {
    return res.status(404).json({ message: "No events found" });
  }

  res.status(200).json(eventsList);
});

app.post("/getEventsByDate", async (req, res) => {
  console.log("POST /getEventsByDate");
  const { date } = req.body;
  const eventsList: EventDocument[] = await getEventsByDate(date);

  if (!eventsList) {
    return res.status(404).json({ message: "No events found" });
  }

  res.status(200).json(eventsList);
});

app.post("/getSpecificEvents", async (req, res) => {
  console.log("POST /getSpecificEvents");
  const { name, location, context, date } = req.body;
  const eventsList: EventDocument[] = await getSpecificEvents({
    name,
    location,
    context,
    date,
  });

  if (!eventsList) {
    return res.status(404).json({ message: "No events found" });
  }

  res.status(200).json(eventsList);
});

app.listen(SERVER_PORT, () =>
  console.log(`Server listening on port: ${SERVER_PORT}`)
);
