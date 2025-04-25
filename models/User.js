import mongoose from "mongoose";

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email_address: { type: String, required: true },
  phone_number: { type: String, required: true },
  image_url: { type: String, required: true } // <- correct field from your JSON
});

module.exports = mongoose.model('User', UserSchema);
