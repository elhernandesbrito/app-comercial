const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    cpf: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    registration: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    address: {
      type: String,
      trim: true,
    },

    city: {
      type: String,
      trim: true,
    },

    state: {
      type: String,
      trim: true,
    },

    hireDate: {
      type: Date,
    },

    photoUrl: {
      type: String,
      default: null,
    },

    notes: {
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

const Seller = mongoose.model("Seller", sellerSchema);
module.exports = Seller;