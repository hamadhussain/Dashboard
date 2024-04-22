"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import L from "../Layout/page";
import { GrPowerShutdown } from "react-icons/gr";

const initialAttendance = [
  { id: 1, name: 'John Doe', designation: 'Software Engineer', type: 'Full-time', checkInTime: '09:00 AM', status: 'Present' },
  { id: 2, name: 'Jane Smith', designation: 'Marketing Specialist', type: 'Part-time', checkInTime: '10:30 AM', status: 'Present' },
  // Add 10 more initial attendance entries here
  { id: 3, name: 'Alice Johnson', designation: 'Human Resources Manager', type: 'Full-time', checkInTime: '08:45 AM', status: 'Present' },
  { id: 4, name: 'Bob Brown', designation: 'Financial Analyst', type: 'Full-time', checkInTime: '09:15 AM', status: 'Present' },
  { id: 5, name: 'Emma Lee', designation: 'Software Developer', type: 'Part-time', checkInTime: '10:00 AM', status: 'Present' },
  { id: 6, name: 'Michael Clark', designation: 'Sales Manager', type: 'Full-time', checkInTime: '08:30 AM', status: 'Present' },
  { id: 7, name: 'Samantha Wright', designation: 'Customer Support Representative', type: 'Full-time', checkInTime: '09:45 AM', status: 'Present' },
  { id: 8, name: 'David Rodriguez', designation: 'Marketing Manager', type: 'Full-time', checkInTime: '10:20 AM', status: 'Present' },
  { id: 9, name: 'Olivia Taylor', designation: 'Accountant', type: 'Part-time', checkInTime: '09:30 AM', status: 'Present' },
  { id: 10, name: 'William Martinez', designation: 'Systems Engineer', type: 'Full-time', checkInTime: '08:50 AM', status: 'Present' },
];


export default function PayrollTable() {
  const [attendance, setAttendance] = useState(initialAttendance);

  const handleExport = () => {
    // Implement export functionality here
    console.log("Exporting payroll data...");
  };

  return (
    <>
      <div className=" w-screen">
        <L />
        <div className=" flex flex-col gap-3 bg-slate-700 p-6  rounded-xl m-2">
          <div className="  ">
            <div className="mt-4 flex justify-between ">
              <div className=" space-x-3 border-2 w-fit h-fit rounded-md flex items-center ">
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className="  p-1 border-none bg-slate-700"
                />
                <button type="submit" className=" p-2">
                  <CiSearch />
                </button>
              </div>
            </div>
          </div>
          <table className=" table-auto">
            <thead className="  border-b-2">
            <tr>
            <th className="py-2">S.NO</th>
            <th className="py-2">Name</th>
            <th className="py-2">Designation</th>
            <th className="py-2">Type</th>
            <th className="py-2">Check In Time</th>
            <th className="py-2">Status</th>
          </tr>
            </thead>
            <tbody className=" text-center">
          {attendance.map((entry, index) => (
            <tr key={index} 
            // className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{entry.name}</td>
              <td className="py-2">{entry.designation}</td>
              <td className="py-2">{entry.type}</td>
              <td className="py-2">{entry.checkInTime}</td>
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
