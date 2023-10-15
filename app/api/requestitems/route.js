import RequestItem from "@models/requestitem";
import { connectToDatabase } from "@utils/database";

export const GET = async (req) => {
  try {
    await connectToDatabase();

    const items = await RequestItem.find({}).populate("requestor");

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
