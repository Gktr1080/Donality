import Image from "next/image";
import { twitter, facebook, instagram } from "@public/images";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center bg-gray-200 pt-5 pb-2">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="w-1/2 flex flex-col justify-between items-center">
          <div className="w-1/4 flex flex-row justify-between items-center">
            <a href="/">
              <Image src={twitter} alt="twitter" width="30" height="30"></Image>
            </a>
            <a href="/">
              <Image
                src={facebook}
                alt="facebook"
                width="30"
                height="30"
              ></Image>
            </a>
            <a href="/">
              <Image
                src={instagram}
                alt="instagram"
                width="30"
                height="30"
              ></Image>
            </a>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-between items-center">
          <h3 className="text-md font-semibold">Contact Us</h3>
          <p className="text-sm">Phone: +91 xxx-xxx-xxxx</p>
          <p className="text-sm">Email: xxxxxxxxx@xxx.com</p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between items-center pt-5">
        <p className="text-sm">
          &#169; Copyright Donatly. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
