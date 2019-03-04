const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let upgrad = new Schema({
  contact_name: {
    type: String
  },
  contact_number: {
    type: String
  }
});

module.exports = mongoose.model("upgrad", upgrad);
