"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const PageA = () => {
  const search = useSearchParams();
  const q = search.get("q");
  return (
    <div>
      <div className=" p-4 bg-slate-700 flex m-2 justify-between rounded-xl">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-3xl text-slate-300">
            {q}
          </h1>
          <p className="flex  items-center opacity-80 ">Welcome On DB</p>
        </div>
        <div className=" flex place-items-start space-x-5 relative top-2 ">
          <div className=" space-x-3 border-2 w-fit h-fit rounded-md flex items-center ">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="  p-1 border-none bg-slate-700 "
            />
            <button type="submit" className=" p-2">
              <CiSearch />
            </button>
          </div>
          <Button variant="outline" className="bg-slate-700 border-none">
            {" "}
            <CiBellOn className=" text-3xl " />
          </Button>
          <Button variant="outline" className=" bg-slate-800 border-none text-slate-600">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default PageA;
