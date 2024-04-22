import React from "react";
import Pie from "./PieCharts/data";
import Composed from "./Composedchart/page";
import Line from "./Line/page";
import Radar from "./Radar/page";
import B from "./Brush/page";
import Bar from "./Bar/page";
import S from "./Star/page";
import L from "./../Layout/page";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <>
      <div className="    w-screen ">
        <div className="border-2 p-4 bg-slate-700 flex m-2 justify-between rounded-xl">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight  md:text-3xl lg:text-3xl dark:text-slate-600">
            Hello Student
          </h1>
          <p className="flex  items-center opacity-30 ">Welcome On DB</p>
        </div>
        <div className=" flex  place-items-start space-x-5 relative top-2 ">
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
            <CiBellOn className=" text-3xl" />
          </Button>
          <Button variant="outline" className="bg-slate-700">Login</Button>
        </div>
      </div>






        <div class="grid grid-cols-3 gap-4">
          <div className="">
            <div className="border-2 p-4 bg-slate-700 h-80 -slate-800  flex flex-col m-2  rounded-xl">
              <div className=" flex justify-between ">
                <p className="flex  items-center ">Welcome On DB</p>{" "}
                <p>updatest at 1 April</p>
              </div>{" "}
              <hr />
              <Line />
            </div>
          </div>
          <div class="  ...">
            {" "}
            <div className="border-2 p-4 h-80  bg-slate-700 flex flex-col m-2  rounded-xl">
              <div className=" flex justify-between ">
                <p className="flex  items-center ">Welcome On DB</p>{" "}
                <p>updatest at 1 April</p>
              </div>{" "}
              <hr />
              <Composed />
            </div>
          </div>
          <div class="... k">
            {" "}
            <div className="border-2 p-4 h-80 bg-slate-700  flex flex-col m-2  rounded-xl">
              <div className=" flex justify-between ">
                <p className="flex  items-center ">Welcome On DB</p>{" "}
                <p>updatest at 1 April</p>
              </div>{" "}
              <hr />
              <Radar />
            </div>
          </div>
          <div class="col-span-2 h-80 ...">
            <div className="border-2 bg-slate-80 bg-slate-700 p-4 h-80   flex flex-col m-2  rounded-xl">
              <div className=" flex justify-between ">
                <p className="flex  items-center ">Welcome On DB</p>{" "}
                <p>updatest at 1 April</p>
              </div>{" "}
              <hr />
              <B />
            </div>
          </div>
          <div class="...  ">
            {" "}
            <div className="border-2 p-4 h-80 bg-slate-700 b-slate-800  flex flex-col m-2  rounded-xl">
              <div className=" flex justify-between ">
                <p className="flex  items-center ">Welcome On DB</p>{" "}
                <p>updatest at 1 April</p>
              </div>{" "}
              <hr />
              <Bar />
            </div>
          </div>
          <div class="... ">
            {" "}
            <div className="border-2 bg-slate-80 bg-slate-700 p-4 h-80   flex flex-col m-2  rounded-xl">
              <div className=" flex justify-between ">
                <p className="flex  items-center ">Welcome On DB</p>{" "}
                <p>updatest at 1 April</p>
              </div>{" "}
              <hr />
              <Pie />
            </div>
          </div>
          <div class="col-span-2  h-80 ...">
            <div className="border-2  p-4 h-80 bg-slate-700  bg-late-800 flex flex-col m-2  rounded-xl">
              <div className=" flex justify-between ">
                <p className="flex  items-center ">Welcome On DB</p>{" "}
                <p>updatest at 1 April</p>
              </div>{" "}
              <hr />
              <S />
            </div>
          </div>
        </div>
        {/* <div className=" flex justify-around ">
          <div className="border-2 p-4  flex flex-col m-2  rounded-xl">
            <div>
              <p className="flex  items-center ">Welcome On DB</p><Pie/>
              <hr />
              <p>updatest at 1 April</p>
            </div>
          </div>
          <div className="border-2 p-4  flex flex-col m-2  rounded-xl">
            <p className="flex  items-center ">Welcome On DB</p><Pie/>
            <hr />
            <p>updatest at 13 April</p>
          </div>
          <div className="border-2 p-4  flex flex-col m-2  rounded-xl">
            <p className="flex  items-center ">Welcome On DB</p><Pie/>
            <hr />
            <p>updatest at 16 April</p>
          </div> 
        </div> */}
      </div>
    </>
  );
};

export default page;
