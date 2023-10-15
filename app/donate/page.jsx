"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { donateimage } from "@public/images";
import Image from "next/image";

const page = () => {
  const { data: session } = useSession();
  const [donation, setDonation] = useState({
    donation_type: "",
    item_title: "",
    item_category: "",
    item_description: "",
    item_condition: "",
    item_address: "",
    // item_image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setDonation((prevState) => ({
      ...prevState,
      donator: session?.user.id,
    }));

    setDonation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/donate", {
      method: "POST",
      body: JSON.stringify(donation),
    });

    const data = await res.json();

    if (!res.ok) {
      console.log(data);
    } else {
      console.log(data);
      window.location.reload();
    }
  };

  return (
    <section className="w-full h-full flex justify-center items-center p-10">
      <div className="w-full rounded-md bg-gray-200 flex flex-row p-5">
        <div className="w-1/2 flex flex-col justify-center items-center">
          <Image src={donateimage} alt="donate" className="rounded-xl" />
        </div>
        <div className="w-1/2 flex flex-col justify-between items-center">
          <div className="w-full flex flex-col justify-between items-center">
            <h1 className="text-xl font-bold text-black">Donate Items</h1>
            <p className="text-sm">
              Welcome to Donatly donation. Please fill out the below form.
              Hopefully it is blessed
            </p>
          </div>
          <div className="w-full flex flex-col justify-between items-start pt-5">
            <div className="w-full flex flex-col justify-between items-start py-2">
              <label className="text-sm text-black p-2">
                Choose who you would like to recieve your donation
              </label>
              <select
                name="donation_type"
                id="donation_type"
                className="w-full p-2 rounded-md bg-gray-400"
                onChange={handleChange}
              >
                <option defaultValue="select">Select</option>
                <option value="ngo">NGO</option>
                <option value="individual">Individual</option>
              </select>
            </div>
            <div className="w-full flex flex-col justify-between items-start py-2">
              <label className="text-sm text-black p-2">
                Choose the category of your donation
              </label>
              <select
                name="item_category"
                id="item_category"
                className="w-full p-2 rounded-md bg-gray-400"
                onChange={handleChange}
              >
                <option defaultValue="select">Select</option>
                <option value="clothes">Clothes</option>
                <option value="footwear">Footwear</option>
                <option value="electronics">Electronics</option>
                <option value="books">Books</option>
                <option value="accessories">Accessories</option>
                <option value="furniture">Furniture</option>
              </select>
            </div>
            <div className="w-full flex flex-col justify-between items-start py-2">
              <label className="text-sm text-black p-2">Enter a title</label>
              <input
                name="item_title"
                id="item_title"
                type="text"
                className="w-full p-2 rounded-md bg-gray-400"
                placeholder="Enter item title here"
                rows={3}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col justify-between items-start py-2">
              <label className="text-sm text-black p-2">
                Enter item details here{" "}
                <span className="text-xs">(Item type, size, quantity etc)</span>
              </label>
              <textarea
                name="item_description"
                id="item_description"
                className="w-full p-2 rounded-md bg-gray-400"
                placeholder="Enter item details here"
                rows={3}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col justify-between items-start py-2">
              <label className="text-sm text-black p-2">
                Choose the item condition
              </label>
              <select
                name="item_condition"
                id="item_condition"
                className="w-full p-2 rounded-md bg-gray-400"
                onChange={handleChange}
              >
                <option defaultValue="select">Select</option>
                <option value="Bad">Bad</option>
                <option value="Fair">Fair</option>
                <option value="Good">Good</option>
                <option value="Excellent">Excellent</option>
              </select>
            </div>
            <div className="w-full flex flex-col justify-between items-start py-2">
              <label className="text-sm text-black p-2">Upload an Image</label>
              <input
                name="item_image"
                id="item_image"
                type="file"
                className="w-full p-2 rounded-md bg-gray-400"
                rows={3}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-col justify-between items-start py-2">
              <label className="text-sm text-black p-2">
                Enter address{" "}
                <span className="text-xs">(pickup address of items)</span>
              </label>
              <textarea
                name="item_address"
                id="item_address"
                className="w-full p-2 rounded-md bg-gray-400"
                placeholder="Enter item details here"
                rows={3}
                onChange={handleChange}
              />
            </div>
            <div className="w-full flex flex-row justify-between items-start py-2">
              <button
                type="button"
                className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-400 dark:text-gray-400 dark:border-gray-600 dark:hover:text-black dark:hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleSubmit}
              >
                Donate
              </button>
            </div>
            <div
              className="w-full py-2 hidden text-justify justify-center items-center bg-green-500 rounded-md"
              id="submission_alert"
            >
              <p className="text-sm text-black p-2">
                Thank you for your donation. The donation will be displayed only
                to the user you have selected. You will be notified once a
                user/NGO claims your donation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
