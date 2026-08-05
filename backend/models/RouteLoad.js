const mongoose = require("mongoose");

const routeLoadSchema = new mongoose.Schema(
  {
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
      required: true
    },

    route: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Route",
      required: true
    },

    departureDate: {
      type: Date,
      required: true
    },

    returnDate: {
      type: Date,
      default: null
    },

    status: {
      type: String,
      enum: ["Preparada", "Em Rota", "Encerrada"],
      default: "Preparada"
    },

    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true
        },

        quantity: {
          type: Number,
          required: true,
          min: 1
        }
      }
    ],

    observations: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const RouteLoad = mongoose.model("RouteLoad", routeLoadSchema);
module.exports = RouteLoad;