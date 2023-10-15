"use client";

import { FAQAccordion } from "@components/FAQAccordion";
import { HeroCard } from "@components/HeroCard";
import {
  select,
  donate,
  laststep,
  acc,
  books,
  clothes,
  electronics,
  footwear,
  furniture,
} from "@public/images";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="flex flex-col justify-between items-end w-full h-full py-5 bg-banner bg-contain bg-no-repeat max-h-max">
        <div className="px-20 py-10">
          <HeroCard />
        </div>
      </section>

      <section className="flex flex-col justify-between items-center w-full">
        <div className="flex flex-col justify-center items-center w-full p-10">
          <h2 className="text-3xl font-bold">Donate Categories</h2>
          <div className="flex justify-between items-center w-2/3 pt-5">
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={clothes} alt="clothes" height={60} />
                <p>Clothes</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={footwear} alt="clothes" height={60} />
                <p>Footware</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={electronics} alt="clothes" height={60} />
                <p>Electronics</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={books} alt="clothes" height={60} />
                <p>Books</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={acc} alt="clothes" height={60} />
                <p>Accessories</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={furniture} alt="clothes" height={60} />
                <p>Furniture</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full p-10">
          <h2 className="text-3xl font-bold">TakeIn Categories</h2>
          <div className="flex justify-between items-center w-2/3 pt-5">
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={clothes} alt="clothes" height={60} />
                <p>Clothes</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={footwear} alt="clothes" height={60} />
                <p>Footware</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={electronics} alt="clothes" height={60} />
                <p>Electronics</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={books} alt="clothes" height={60} />
                <p>Books</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={acc} alt="clothes" height={60} />
                <p>Accessories</p>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex flex-col justify-between items-center bg-slate-100 rounded-lg p-5">
                <Image src={furniture} alt="clothes" height={60} />
                <p>Furniture</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-between items-center w-full bg-gray-100">
        <div className="flex flex-col justify-center items-center w-full pt-5">
          <h2 className="text-3xl font-bold pt-5 text-center">
            Donate old/unused Items
            <br />
            <span className="text-xl font-semibold">in 3 simple steps</span>
          </h2>
          <p className="text-sm font-inter w-1/4 text-center">
            List your old/unused items from the comfort of your home or office
            and at your convenience
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-10">
          <div className="flex flex-col p-10 w-1/3 text-center justify-end items-center min-h-[20rem]">
            <Image src={select} alt="select" className="h-auto w-[5rem]" />
            <h3 className="text-2xl font-semibold p-5">
              Select Category and Items
            </h3>
            <p className="text-1xl font-inter">
              Choose how many items you want to donate and from which category
            </p>
          </div>
          <div className="flex flex-col p-10 w-1/3 text-center justify-end items-center min-h-[20rem]">
            <Image src={donate} alt="donate" className="h-auto w-[5rem]" />
            <h3 className="text-2xl font-semibold p-5">
              Select whom to donate to
            </h3>
            <p className="text-1xl font-inter">
              Select a choice of whether to donate to an individual or a NGO
            </p>
          </div>
          <div className="flex flex-col p-10 w-1/3 text-center justify-end items-center min-h-[20rem]">
            <Image src={laststep} alt="laststep" className="h-auto w-[5rem]" />
            <h3 className="text-2xl font-semibold p-5">
              Instant take in from people across the country
            </h3>
            <p className="text-1xl font-inter">
              With access to anyone from the country any person in need will get
              items delivered to them
            </p>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="flex flex-col justify-between items-center w-full my-5"
      >
        <div className="w-2/3">
          <h3 className="flex w-full text-center text-2xl font-semibold">
            General FAQs
          </h3>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
