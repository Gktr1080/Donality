"use client";

import { sampleimage } from "@public/images";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const page = ({ params }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const getItem = async () => {
      const res = await fetch(`/api/items/${params.id}`);
      const data = await res.json();
      setItem(data);
    };

    getItem();
  }, []);

  return (
    <section className="w-full flex flex-row justify-between items-center p-10 min-h-[70vh]">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <Image src={sampleimage} alt="Item Image" className="rounded-xl" />
      </div>
      <div className="w-1/2 h-[55vh] flex flex-col justify-between items-center">
        <div className="w-full">
          <h2 className="text-3xl font-bold">{item.item_title}</h2>
          <span className="text-sm text-gray-700 capitalize">
            {item.item_category}
          </span>
        </div>
        <div className="w-full">
          <h3 className="text-xl font-semibold">Condition</h3>
          <p className="text-lg bg-gray-200 rounded py-2 px-10 w-max">
            {item.item_condition}
          </p>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold">Description</h3>
          <p className="text-lg bg-gray-200 rounded p-2 w-full min-h-[10vh]">
            {item.item_description}
          </p>
        </div>

        <div className="w-full">
          <h3 className="text-xl font-semibold">Address</h3>
          <p className="text-lg bg-gray-200 rounded p-2 w-full">
            {item.item_address}
          </p>
        </div>

        <div className="w-full">
          <Link
            href={`/takein/${params.id}/confirmation`}
            className="black_btn"
          >
            TakeIn
          </Link>
        </div>
      </div>
    </section>
  );
};

export default page;
