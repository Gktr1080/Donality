"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { sampleimage } from "@public/images";
import Image from "next/image";

const page = ({ params }) => {
  const [donations, setDonations] = useState();
  const [requests, setRequests] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const getDonations = async () => {
      const res = await fetch("/api/items");
      const data = await res.json();
      setDonations(data);
    };

    const getRequests = async () => {
      const res = await fetch("/api/requestitems");
      const data = await res.json();
      setRequests(data);
    };

    const getUser = async () => {
      const res = await fetch(`/api/users/${params.id}`);
      const data = await res.json();
      setUser(data);
    };

    getDonations();
    getRequests();
    getUser();
  }, []);

  const userDonations = donations?.filter((donation) => {
    return donation.donator._id === params.id;
  });

  const userRequests = requests?.filter((request) => {
    return request.requestor;
  });

  return (
    <section className="w-full flex justify-center items-start mt-5">
      {user?.image && (
        <div className="w-1/2 flex flex-col justify-between items-center mt-5">
          <div className="w-max flex flex-col justify-center items-center rounded-xl bg-gray-200 p-5 m-5">
            <Image
              src={user.image}
              alt="User Image"
              className="rounded-lg"
              width={200}
              height={200}
              priority
            />

            <h1 className="text-3xl font-bold">{user?.username}</h1>
            <h3 className="text-xl font-semibold pb-5">{user?.username}</h3>
            <p className="text-lg font-semibold">{user?.email}</p>
          </div>
        </div>
      )}
      <div className="w-1/2 flex justify-center items-center">
        <div className="w-full flex flex-col justify-between items-center">
          {userDonations?.length > 0 && (
            <div className="w-full flex flex-col justify-between items-start">
              <h1 className="text-xl font-bold">User's Listed Donations</h1>
              <div className="flex justify-center items-center">
                {userDonations?.map((donation) => {
                  return (
                    <div
                      key={donation._id}
                      className="w-1/2 flex justify-center items-center rounded-xl bg-gray-200 p-5 m-5"
                    >
                      <Link href={`/takein/${donation._id}`}>
                        <Image
                          src={sampleimage}
                          alt="Item Image"
                          className="rounded-lg"
                          priority
                        />
                        <h3 className="text-lg font-semibold text-black text-center">
                          {donation.item_title}
                        </h3>
                        <p className="text-md font-semibold text-black text-center">
                          {donation.item_description.slice(0, 50)}
                        </p>
                        <p className="text-sm text-black text-end">
                          {donation.item_address.slice(0, 15)}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {userRequests?.length > 0 && (
            <div className="w-full flex flex-col justify-between items-start">
              <h1 className="text-xl font-bold">User's Listed Requests</h1>
              <div className="flex justify-center items-center">
                {userRequests?.map((request) => {
                  return (
                    <div
                      key={request._id}
                      className="w-1/2 flex justify-center items-center rounded-xl bg-gray-200 p-5 m-5"
                    >
                      <Link href={`/requests/${request._id}`}>
                        <Image
                          src={sampleimage}
                          alt="Item Image"
                          className="rounded-lg"
                        />
                        <h3 className="text-lg font-semibold text-black text-center">
                          {request.item_title}
                        </h3>
                        <p className="text-md font-semibold text-black text-center">
                          {request.item_description.slice(0, 50)}
                        </p>
                        <p className="text-sm text-black text-end">
                          {request.item_address.slice(0, 15)}
                        </p>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default page;
