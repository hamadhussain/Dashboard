import React from "react";
import { CiSearch } from "react-icons/ci";

const candidates = [
  {
    id: 1,
    name: "John Doe",
    appliedFor: "Software Engineer",
    appliedDate: "2024-04-15",
    emailAddress: "john@example.com",
    contactNumber: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    appliedFor: "Data Analyst",
    appliedDate: "2024-04-16",
    emailAddress: "jane@example.com",
    contactNumber: "987-654-3210",
  },
  {
    id: 3,
    name: "Alice Johnson",
    appliedFor: "Product Manager",
    appliedDate: "2024-04-14",
    emailAddress: "alice@example.com",
    contactNumber: "456-789-0123",
  },
  {
    id: 4,
    name: "Bob Brown",
    appliedFor: "Marketing Specialist",
    appliedDate: "2024-04-13",
    emailAddress: "bob@example.com",
    contactNumber: "789-012-3456",
  },
  {
    id: 5,
    name: "Emily Davis",
    appliedFor: "Graphic Designer",
    appliedDate: "2024-04-12",
    emailAddress: "emily@example.com",
    contactNumber: "012-345-6789",
  },
  {
    id: 6,
    name: "Michael Wilson",
    appliedFor: "Financial Analyst",
    appliedDate: "2024-04-11",
    emailAddress: "michael@example.com",
    contactNumber: "345-678-9012",
  },
  {
    id: 7,
    name: "Sophia Martinez",
    appliedFor: "UX/UI Designer",
    appliedDate: "2024-04-10",
    emailAddress: "sophia@example.com",
    contactNumber: "678-901-2345",
  },
  {
    id: 8,
    name: "William Taylor",
    appliedFor: "HR Coordinator",
    appliedDate: "2024-04-09",
    emailAddress: "william@example.com",
    contactNumber: "901-234-5678",
  },
  {
    id: 9,
    name: "Olivia Anderson",
    appliedFor: "Content Writer",
    appliedDate: "2024-04-08",
    emailAddress: "olivia@example.com",
    contactNumber: "234-567-8901",
  },
  {
    id: 10,
    name: "Daniel Rodriguez",
    appliedFor: "Sales Representative",
    appliedDate: "2024-04-07",
    emailAddress: "daniel@example.com",
    contactNumber: "567-890-1234",
  },
];

// const CandidateTable = () => {
//   return (
//     <>
import L from "./../Layout/page";

const CandidateTable = () => {
  return (
    <>
      <div className="    w-screen ">
        <L />
        {/* <div className=" flex flex-col min-w-screen justify-around items-center m-3 border-2 py-6 w rounded-xl  gap-10"> */}
          {/* <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-slate-600"> All Candidates</h1> */}
          <div className=" flex flex-col gap-3 bg-slate-700  p-6  rounded-xl m-2">
            <div className=" space-x-3 border-2 w-fit rounded-md flex items-center ">
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

            <table className="table-auto   ">
              <thead className="">
                <tr className=" border-b-2">
                  <th className="px-4 py-2">S.No</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Applied For</th>
                  <th className="px-4 py-2">Applied Date</th>
                  <th className="px-4 py-2">Email Address</th>
                  <th className="px-4 py-2">Contact Number</th>
                </tr>
              </thead>
              <tbody className=" text-center">
                {candidates.map((candidate, index) => (
                  <tr
                    key={candidate.id}
                    // className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
                  >
                    <td className=" px-4 py-2">{index + 1}</td>
                    <td className=" px-4 py-2">{candidate.name}</td>
                    <td className=" px-4 py-2">{candidate.appliedFor}</td>
                    <td className=" px-4 py-2">{candidate.appliedDate}</td>
                    <td className=" px-4 py-2">{candidate.emailAddress}</td>
                    <td className=" px-4 py-2">{candidate.contactNumber}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default CandidateTable;
