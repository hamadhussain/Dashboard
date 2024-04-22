"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import L from "../Layout/page";
import { GrPowerShutdown } from "react-icons/gr";

const initialLeaves = [
  {
    id: 1,
    name: "John Doe",
    leaveType: "Annual",
    startDate: "2024-04-01",
    endDate: "2024-04-05",
    status: "Approved",
  },
  {
    id: 2,
    name: "Jane Smith",
    leaveType: "Sick",
    startDate: "2024-04-10",
    endDate: "2024-04-12",
    status: "Pending",
  },
  // Add 10 more initial leave entries here
  {
    id: 3,
    name: "Alice Johnson",
    leaveType: "Maternity",
    startDate: "2024-04-15",
    endDate: "2024-04-20",
    status: "Approved",
  },
  {
    id: 4,
    name: "Bob Brown",
    leaveType: "Annual",
    startDate: "2024-04-03",
    endDate: "2024-04-08",
    status: "Pending",
  },
  {
    id: 5,
    name: "Emma Lee",
    leaveType: "Sick",
    startDate: "2024-04-07",
    endDate: "2024-04-09",
    status: "Approved",
  },
  {
    id: 6,
    name: "Michael Clark",
    leaveType: "Maternity",
    startDate: "2024-04-25",
    endDate: "2024-04-30",
    status: "Pending",
  },
  {
    id: 7,
    name: "Samantha Wright",
    leaveType: "Annual",
    startDate: "2024-04-12",
    endDate: "2024-04-15",
    status: "Approved",
  },
  {
    id: 8,
    name: "David Rodriguez",
    leaveType: "Sick",
    startDate: "2024-04-18",
    endDate: "2024-04-20",
    status: "Pending",
  },
  {
    id: 9,
    name: "Olivia Taylor",
    leaveType: "Maternity",
    startDate: "2024-04-05",
    endDate: "2024-04-10",
    status: "Approved",
  },
  {
    id: 10,
    name: "William Martinez",
    leaveType: "Annual",
    startDate: "2024-04-20",
    endDate: "2024-04-25",
    status: "Pending",
  },
];

export default function PayrollTable() {
  const [leaves, setLeaves] = useState(initialLeaves);

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
            </div>
          </div>
          <table className=" table-auto">
            <thead className=" border-b-2 ">
              <tr>
                <th className="py-2">S.NO</th>
                <th className="py-2">Name</th>
                <th className="py-2">Leave Type</th>
                <th className="py-2">Start Date</th>
                <th className="py-2">End Date</th>
                <th className="py-2">Status</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody className=" text-center">
              {leaves.map((leave, index) => (
                <tr
                  key={index}
                  //  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="py-2">{index + 1}</td>
                  <td className="py-2">{leave.name}</td>
                  <td className="py-2">{leave.leaveType}</td>
                  <td className="py-2">{leave.startDate}</td>
                  <td className="py-2">{leave.endDate}</td>
                  <td className="py-2">{leave.status}</td>
                  <td className="py-2">
                    <button
                      className=" font-bold py-1 px-4 rounded"
                      onClick={() => handleRemoveLeave(leave.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
