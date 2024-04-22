"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import L from '../Layout/page'
const initialEmployees = [
  {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    type: "Full-time",
    designation: "Software Engineer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    department: "Marketing",
    type: "Part-time",
    designation: "Marketing Specialist",
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    department: "Human Resources",
    type: "Full-time",
    designation: "HR Manager",
    status: "Active",
  },
  {
    id: 4,
    name: "Bob Brown",
    department: "Finance",
    type: "Full-time",
    designation: "Financial Analyst",
    status: "Active",
  },
  {
    id: 5,
    name: "Emma Lee",
    department: "Engineering",
    type: "Part-time",
    designation: "Software Developer",
    status: "Active",
  },
  {
    id: 6,
    name: "Michael Clark",
    department: "Sales",
    type: "Full-time",
    designation: "Sales Manager",
    status: "Active",
  },
  {
    id: 7,
    name: "Samantha Wright",
    department: "Customer Support",
    type: "Full-time",
    designation: "Customer Support Representative",
    status: "Active",
  },
  {
    id: 8,
    name: "David Rodriguez",
    department: "Marketing",
    type: "Full-time",
    designation: "Marketing Manager",
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Taylor",
    department: "Finance",
    type: "Part-time",
    designation: "Accountant",
    status: "Active",
  },
  {
    id: 10,
    name: "William Martinez",
    department: "Engineering",
    type: "Full-time",
    designation: "Systems Engineer",
    status: "Active",
  },
];

export default function EmployeeTable() {
  const [employees, setEmployees] = useState(initialEmployees);
  const handleEditEmployee = (id) => {
    // Handle editing of employee details
    // You can implement your edit functionality here
    console.log(`Editing employee with ID ${id}`);
  };
  const handleAddEmployee = () => {
    // Add a new employee with a unique ID
    const newEmployee = {
      id: employees.length + 1,
      name: "",
      department: "",
      type: "",
      designation: "",
      status: "",
    };
    setEmployees([...employees, newEmployee]);
  };

  const handleRemoveEmployee = (id) => {
    // Remove the employee with the given ID
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
<>
<div className=" w-screen">
<L/>
<div className="  flex flex-col gap-3 bg-slate-700  p-6  rounded-xl m-2">
      <div className=" ">
        <div className="mt-4 flex justify-between">
        <div className=" space-x-3 border-2 w-fit h-fit rounded-md flex items-center ">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="  p-1 border-none  bg-slate-700"
            />
            <button type="submit" className=" p-2">
              <CiSearch />
            </button>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded text-white"
            onClick={handleAddEmployee}
          >
            Add Employee
          </button>
        </div>
      </div>

      <table className=" table-auto ">
        <thead className=" border-b-2">
          <tr>
            <th className="py-2">S.NO</th>
            <th className="py-2">Name</th>
            <th className="py-2">ID</th>
            <th className="py-2">Department</th>
            <th className="py-2">Type</th>
            <th className="py-2">Designation</th>
            <th className="py-2">Status</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody className=" text-center">
          {employees.map((employee, index) => (
            <tr
              key={index}
              // className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
            >
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{employee.name}</td>
              <td className="py-2">{employee.id}</td>
              <td className="py-2">{employee.department}</td>
              <td className="py-2">{employee.type}</td>
              <td className="py-2">{employee.designation}</td>
              <td className="py-2">{employee.status}</td>
              <td className="py-2 space-y-2">
                <button
                  className="  font-bold py-1 px-4 rounded w mr-2"
                  onClick={() => handleEditEmployee(employee.id)}
                >
                  Edit
                </button>
                <button
                  className="  font-bold py-1 px-4 w rounded"
                  onClick={() => handleRemoveEmployee(employee.id)}
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
