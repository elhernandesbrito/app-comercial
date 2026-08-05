const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    cities: [
    {
        type: String,
        trim: true,
    }
    ],

    region: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


const Route = mongoose.model("Route", routeSchema);
module.exports = Route;