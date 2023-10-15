import Item from "@models/items";
import { connectToDatabase } from "@utils/database";

export const POST = async (req) => {
  const {
    donator,
    donation_type,
    item_category,
    item_title,
    item_description,
    item_condition,
    item_address,
  } = await req.json();

  try {
    await connectToDatabase();

    const newItem = new Item({
      donator,
      donation_type,
      item_category,
      item_title,
      item_description,
      item_condition,
      item_address,
    });

    await newItem.save();

    console.log("Item saved successfully");

    return new Response(JSON.stringify(newItem), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      body: {
        message: "Something went wrong",
      },
    };
  }
};
