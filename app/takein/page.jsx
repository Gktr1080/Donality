"use client";

import { buybanner, sampleimage } from "@public/images";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const page = () => {
  const [donations, setDonations] = useState();

  useEffect(() => {
    const getDonations = async () => {
      const res = await fetch("/api/items");
      const data = await res.json();
      setDonations(data);
      console.log(data);
    };

    getDonations();
  }, []);

  const books = donations?.filter((donation) => {
    return donation.item_category === "books";
  });

  const electronics = donations?.filter((donation) => {
    return donation.item_category === "electronics";
  });

  const furniture = donations?.filter((donation) => {
    return donation.item_category === "furniture";
  });

  const clothes = donations?.filter((donation) => {
    return donation.item_category === "clothes";
  });

  const footwear = donations?.filter((donation) => {
    return donation.item_category === "footwear";
  });

  const accessories = donations?.filter((donation) => {
    return donation.item_category === "accessories";
  });

  const allItems = [
    {
      category: "Books",
      items: books,
    },
    {
      category: "Electronics",
      items: electronics,
    },
    {
      category: "Furniture",
      items: furniture,
    },
    {
      category: "Clothes",
      items: clothes,
    },
    {
      category: "Footwear",
      items: footwear,
    },
    {
      category: "Accessories",
      items: accessories,
    },
  ];

  return (
    <>
      <section className="w-full h-full flex flex-col justify-center items-center">
        <div>
          <Image src={buybanner} alt="Donation banner" />
        </div>
        <div className="w-full px-10 flex flex-col justify-between items-center p-10">
          {allItems?.map((item) => {
            if (item.items?.length === 0) return null;
            return (
              <div
                key={item.category}
                className="w-full flex flex-col justify-between items-center"
              >
                <h1 className="text-2xl font-bold text-black">
                  {item.category}
                </h1>
                <div className="w-full flex flex-row justify-between items-center">
                  {item.items?.map((item) => {
                    return (
                      <div
                        key={item._id}
                        className="w-1/5 flex flex-col justify-center rounded-xl bg-gray-200 p-5 m-5"
                      >
                        <Image
                          src={sampleimage}
                          alt="Item Image"
                          className="rounded-lg"
                        />
                        <h3 className="text-lg font-semibold text-black text-center">
                          {item.item_title}
                        </h3>
                        <p className="text-md font-semibold text-black text-center">
                          {item.item_description.slice(0, 50)}
                        </p>
                        <Link href={`/user/${item.donator._id}`}>
                          <p className="text-sm font-semibold text-end">
                            {item.donator.username}
                          </p>
                        </Link>
                        <p className="text-sm text-black text-end">
                          {item.item_address.slice(0, 15)}
                        </p>
                        <Link
                          href={`/takein/${item._id}`}
                          className="black_btn w-full rounded-md mt-2"
                        >
                          Learn More
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
