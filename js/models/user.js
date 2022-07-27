const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  pw: { type: String, required: true },
  username: { type: String, required: true },
  nikname: { type: String, required: true },
  links: [{ type: Types.ObjectId, ref: "Link" }],
});

module.exports = model("User", schema);
