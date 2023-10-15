import { Schema, model, models } from "mongoose";

const ItemSchema = new Schema({
  donator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  donation_type: {
    type: String,
    required: [true, "Type is required!"],
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
  item_condition: {
    type: String,
    required: [true, "Condition is required!"],
  },
  // item_image: {
  //   type: String,
  // required: [true, "Image is required!"],
  // },
  item_address: {
    type: String,
    required: [true, "Address is required!"],
  },
});

const Item = models.Item || model("Item", ItemSchema);
export default Item;
