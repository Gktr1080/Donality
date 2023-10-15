import RequestItem from "@models/requestitem";
import { connectToDatabase } from "@utils/database";

export const POST = async (req) => {
  const {
    requestor,
    item_category,
    item_title,
    item_description,
    item_address,
  } = await req.json();

  try {
    await connectToDatabase();

    const newItem = new RequestItem({
      requestor,
      item_category,
      item_title,
      item_description,
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
