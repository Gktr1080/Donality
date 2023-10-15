"use client";

import { buybanner } from "@public/images";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const page = () => {
  const [requests, setRequests] = useState();

  useEffect(() => {
    const getRequests = async () => {
      const res = await fetch("/api/requestitems");
      const data = await res.json();
      setRequests(data);
      console.log(data);
    };

    getRequests();
  }, []);

  const books = requests?.filter((request) => {
    return request.item_category === "books";
  });

  const electronics = requests?.filter((request) => {
    return request.item_category === "electronics";
  });

  const furniture = requests?.filter((request) => {
    return request.item_category === "furniture";
  });

  const clothes = requests?.filter((request) => {
    return request.item_category === "clothes";
  });

  const footwear = requests?.filter((request) => {
    return request.item_category === "footwear";
  });

  const accessories = requests?.filter((request) => {
    return request.item_category === "accessories";
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
                        <h3 className="text-lg font-semibold text-black text-center">
                          {item.item_title}
                        </h3>
                        <p className="text-md font-semibold text-black text-center">
                          {item.item_description.slice(0, 50)}
                        </p>
                        <Link href={`/user/${item.requestor._id}`}>
                          <p className="text-sm font-semibold text-end">
                            {item.requestor.username}
                          </p>
                        </Link>
                        <p className="text-sm text-black text-end">
                          {item.item_address.slice(0, 15)}
                        </p>
                        <Link
                          href={`/requests/${item._id}`}
                          className="black_btn w-full rounded-md mt-2"
                        >
                          Donate now
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
