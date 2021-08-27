const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = Schema({
  item: String,
  qty: Number,
  size: {
    h: Number,
    w: Number,
    uom: String,
  },
  status: String,
});
const Data = mongoose.model("data", dataSchema, "data");

module.exports = { Data: Data };
