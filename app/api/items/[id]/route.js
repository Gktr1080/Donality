import Item from "@models/items";
import { connectToDatabase } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();

    const items = await Item.findById(params.id).populate("donator");

    return new Response(JSON.stringify(items), {
      status: 200,
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
