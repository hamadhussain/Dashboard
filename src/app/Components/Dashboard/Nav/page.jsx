"use client";
// import Link from "next/link";
// import { useState } from "react";
// import { RiDashboardLine } from "react-icons/ri";

// const Navbar = () => {
//   const [nav, setNav] = useState(true);

//   const links = [
//     { id: 1, link: "Dashboard", query: "Hello Student!" },
//     { id: 2, link: "Candidate", query: "Candidate" },
//     { id: 3, link: "Attendance", query: "Attendance" },
//     { id: 4, link: "Department", query: "All Department" },
//     { id: 5, link: "Employees", query: "All Employees" },
//     { id: 6, link: "Leaves", query: "Leaves" },
//     { id: 7, link: "Setting", query: "Setting" },
//     { id: 8, link: "Payroll", query: "Payroll" },
//   ];

//   return (
//     <>
//       <div className="flex bg-slate-700 flex-row md:flex-col h-full md:h-screen p-4 rounded-xl m-2 gap-10 md:w-64 lg:w-72">
//         <div className="flex justify-between items-center">
//           <Link href="/">
//             <h1 className="text-3xl flex items-center font-bold cursor-pointer hover:text-gray-900">
//               <RiDashboardLine /> DB
//             </h1>
//           </Link>
//         </div>
//         <ul className="flex flex-row md:flex-col items-start gap-3">
//           {links.map((link) => (
//             <li
//               key={link.id}
//               className="p-1 cursor-pointer capitalize hover:text-gray-900"
//             >
//               <Link
//                 href={{
//                   pathname: `/Components/Dashboard/${link.link}`,
//                   query: { q: link.query },
//                 }}
//               >
//                 {link.link}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import Link from "next/link";
import { useState } from "react";
import { RiDashboardLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const links = [
    { id: 1, link: "Dashboard", query: "Hello Student!" },
    { id: 2, link: "Candidate", query: "Candidate" },
    { id: 3, link: "Attendence", query: "Attendence" },
    { id: 4, link: "Department", query: "All Department" },
    { id: 5, link: "Employees", query: "All Employees" },
    { id: 6, link: "Leaves", query: "Leaves" },
    { id: 7, link: "Setting", query: "Setting" },
    { id: 8, link: "Payroll", query: "Payroll" },
  ];

  return (
    <>
      {/* bg-gradient-to-b from-black to-gray-800 */}
      <div className="flex bg-slate-700 flex-col h-full p-4 rounded-xl m-2 gap-10  ">
        {/* <div className="flex justify-between items-center w-full h-20"> */}
        <div className="">
          <Link href="/">
            {" "}
            <h1 className="text-5xl font-signature ml-2 flex gap-1 md:static md:py-6 cursor-pointer hover:text-slate-900">
              <RiDashboardLine />
              DB
            </h1>
          </Link>
        </div>
        <ul
          className={`flex flex-col items-start  gap-9 left-0 w-full h-full  md:static md:w-auto md:h-auto md:bg-transparent md:flex-col `}
        >
          {links.map((i, k) => {
            return (
              <li
                key={k}
                className="p-1 cursor-pointer capitalize md:px-0 md:py-0 md:text-xl hover:text-slate-400 hover:bg-slate-800 hover:font-bold hover:px-2 hover:rounded-lg "
              >
                <Link
                  href={{
                    pathname: `/Components/Dashboard/${i.link}`,
                    query: { q: i.query },
                  }}
                >
                  {i.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
