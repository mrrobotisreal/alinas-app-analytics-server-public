import mongoose, { Schema, Document, Model, model } from "mongoose";

export interface EventMetric {
  context: string;
  type: string;
  detail: string;
  value: number;
  description?: string;
}

export interface EventObject {
  name: string;
  location: string;
  context: string;
  detail: string;
  description?: string;
  date: string;
  time: string;
  timeZone: string;
  metrics?: EventMetric;
}

export interface EventDocument extends Document, EventObject {}

export interface EventModel extends Model<EventDocument> {}

/**
 * Example events:
 *
 * {
 *    name: "Press button", <- options are "Press button", "Long press button" for now, will add more gesture options later
 *    location: "Home screen", <- options are "Home screen", "Photos screen", "Read screen", "Listen screen", "Watch screen", "Notes screen", "Settings screen"
 *    context: "Select book", <- options can vary, but examples are "Show albums", "Select album", "Next page", "Close book", etc...
 *    detail: "The Judge", <- options can vary, but examples are "My External Cause", "The Judge", "Coral theme", "Russian language", "portugal003.jpg", etc...
 *    description: "'The Judge' book is selected", <- optional, can be used for more detailed description
 *    date: "2024-05-27",
 *    time: "13:44",
 *    timeZone: "Europe/Vienna", <- get this with expo-localization getCalendars() method
 *    metrics: {
 *       context: "The Judge", <- whichever book is selected, for the videos and photos it will be the album or playlist name
 *       type: "page", <- options are "page", "audiotrack", "video", "photo"
 *       detail: "Chapter 3: Publicity", <- for "page" and "audiotrack" type it will be the title, for "video" and "photo" type it will be the video or photo name
 *       value: 120000, <- time in milliseconds
 *       description: "Read 'Chapter 3: Publicity' in 'The Judge' book for 2 minutes"
 *    }
 * }
 *
 */

export const EventSchema = new Schema<EventDocument, EventModel>({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  context: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  timeZone: {
    type: String,
    required: true,
  },
  metrics: {
    type: {
      context: String,
      type: String,
      detail: String,
      value: Number,
      description: String,
    },
  },
});

export const Event = model("Event", EventSchema);
