import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

// virtuals for converying _id to id for frontend
const virtual = categorySchema.virtual("id");
virtual.get(function () {
  return this._id;
});
categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

export default categorySchema;
