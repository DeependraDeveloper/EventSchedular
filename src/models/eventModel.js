const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const eventSchema = new mongoose.Schema(
  {
    creator:{
      type:ObjectId,
      ref:"User"
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    eventDate: {
      type: String,
      required: true,
      trim: true,
    }
  },

  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
