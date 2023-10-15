import { confirmation } from "@public/images";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full py-10">
      <Image src={confirmation} alt="confirmation" priority />
    </div>
  );
};

export default page;
