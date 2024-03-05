import { Event, EventObject } from "../models/Event";

export const storeNewEvent = async (event: EventObject) => {
  try {
    const newEvent = new Event(event);
    await newEvent.save();
    return newEvent;
  } catch (err) {
    console.error(err);
  }
};

export const getAllEvents = async () => {
  return await Event.find();
};

export const getEventsByName = async (name: string) => {
  return await Event.find({ name });
};

export const getEventsByLocation = async (location: string) => {
  return await Event.find({ location });
};

export const getEventsByContext = async (context: string) => {
  return await Event.find({ context });
};

export const getEventsByDate = async (date: string) => {
  return await Event.find({ date });
};

export interface GetSpecificEventsProps {
  name?: string;
  location?: string;
  context?: string;
  date?: string;
}

export const getSpecificEvents = async ({
  name = null,
  location = null,
  context = null,
  date = null,
}: GetSpecificEventsProps) => {
  if (name && location && context && date) {
    return await Event.find({ name, location, context, date });
  } else if (name && location && context) {
    return await Event.find({ name, location, context });
  } else if (name && location && date) {
    return await Event.find({ name, location, date });
  } else if (name && context && date) {
    return await Event.find({ name, context, date });
  } else if (location && context && date) {
    return await Event.find({ location, context, date });
  } else if (name && location) {
    return await Event.find({ name, location });
  } else if (name && context) {
    return await Event.find({ name, context });
  } else if (name && date) {
    return await Event.find({ name, date });
  } else if (location && context) {
    return await Event.find({ location, context });
  } else if (location && date) {
    return await Event.find({ location, date });
  } else if (context && date) {
    return await Event.find({ context, date });
  } else if (name) {
    return await Event.find({ name });
  } else if (location) {
    return await Event.find({ location });
  } else if (context) {
    return await Event.find({ context });
  } else if (date) {
    return await Event.find({ date });
  } else {
    return await Event.find();
  }
};
