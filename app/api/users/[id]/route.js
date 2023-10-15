import User from "@models/user";
import { connectToDatabase } from "@utils/database";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();

    const user = await User.findById(params.id);

    return new Response(JSON.stringify(user), {
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
