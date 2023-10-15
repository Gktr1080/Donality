import { Schema, model, models } from "mongoose";

const RequestItemSchema = new Schema({
  requestor: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  item_category: {
    type: String,
    required: [true, "Category is required!"],
  },
  item_title: {
    type: String,
    required: [true, "Title is required!"],
  },
  item_description: {
    type: String,
    required: [true, "Description is required!"],
  },
  item_address: {
    type: String,
    required: [true, "Address is required!"],
  },
});

const RequestItem =
  models.RequestItem || model("RequestItem", RequestItemSchema);
export default RequestItem;
