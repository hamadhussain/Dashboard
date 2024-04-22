"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import L from "../Layout/page";
import { GrPowerShutdown } from "react-icons/gr";

const initialPayroll = [
  {
    id: 1,
    name: "John Doe",
    ctc: 50000,
    salaryPerMonth: 4167,
    deduction: 1000,
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    ctc: 60000,
    salaryPerMonth: 5000,
    deduction: 1200,
    status: "Active",
  },
  // Add 10 more entries here
  {
    id: 3,
    name: "Alice Johnson",
    ctc: 55000,
    salaryPerMonth: 4583,
    deduction: 1100,
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    ctc: 52000,
    salaryPerMonth: 4333,
    deduction: 1050,
    status: "Active",
  },
  {
    id: 5,
    name: "Emma Lee",
    ctc: 53000,
    salaryPerMonth: 4417,
    deduction: 1150,
    status: "Active",
  },
  {
    id: 6,
    name: "Michael Clark",
    ctc: 58000,
    salaryPerMonth: 4833,
    deduction: 1250,
    status: "Active",
  },
  {
    id: 7,
    name: "Samantha Wright",
    ctc: 61000,
    salaryPerMonth: 5083,
    deduction: 1300,
    status: "Active",
  },
  {
    id: 8,
    name: "David Rodriguez",
    ctc: 54000,
    salaryPerMonth: 4500,
    deduction: 1150,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Taylor",
    ctc: 57000,
    salaryPerMonth: 4750,
    deduction: 1200,
    status: "Active",
  },
  {
    id: 10,
    name: "William Martinez",
    ctc: 56000,
    salaryPerMonth: 4667,
    deduction: 1120,
    status: "Active",
  },
];
export default function PayrollTable() {
  const [payroll, setPayroll] = useState(initialPayroll);

  const handleExport = () => {
    // Implement export functionality here
    console.log("Exporting payroll data...");
  };

  return (
    <>
      <div className=" w-screen">
        <L />
        <div className=" flex flex-col gap-3 bg-slate-700  p-6  rounded-xl m-2">
          <div className="  ">
            <div className="mt-4 flex justify-between">
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
              <button
                className="bg-blue-500 flex justify-center items-center gap-2 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleExport}
              >
                <GrPowerShutdown />
                Export
              </button>
            </div>
          </div>
          <table className=" table-auto ">
            <thead className=" border-b-2 ">
              <tr>
                <th className="py-2">S.NO</th>
                <th className="py-2">Name</th>
                <th className="py-2">CTC</th>
                <th className="py-2">Salary per month</th>
                <th className="py-2">Deduction</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {payroll.map((entry, index) => (
                <tr key={index}>
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{entry.name}</td>
                  <td className="py-2">{entry.ctc}</td>
                  <td className="py-2">{entry.salaryPerMonth}</td>
                  <td className="py-2">{entry.deduction}</td>
                  <td className="py-2">{entry.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
