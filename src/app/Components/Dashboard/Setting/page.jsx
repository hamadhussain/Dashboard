// // // "use client";
// // // import { useState } from "react";
// // // import L from "../Layout/page";
// // // import Se from "./Select/page";
// // // import Sw from "./Switch/page";

// // // const setting = [
// // //   { h1: "Appearance", p: "Customize Your Theme", icons: Se },
// // //   { h1: "Two-factor Authentication", p: "Keep account secure", icons: Se },
// // //   { h1: "Mobile Push Notifications", p: "Receive push notifications", icons: Sw },
// // //   { h1: "Desktop Push Notifications", p: "Receive push notifications", icons: Sw },
// // //   { h1: "Email Push Notifications", p: "Receive email push notifications", icons: Sw },
// // // ];

// // // export default function PayrollTable() {
// // //   const [leaves, setLeaves] = useState(setting);

// // //   const handleExport = () => {
// // //     // Implement export functionality here
// // //     console.log("Exporting payroll data...");
// // //   };

// // //   return (
// // //     <>
// // //       <div className=" w-screen">
// // //         <L />
// // //         <div className=" flex flex-col gap-10 w  py-12 p-6  rounded-xl m-2">
// // //           {leaves.map((entry, index) => (
// // //             <div className="  ">
// // //               <h1 className=" text-2xl font-extrabold">{entry.h1}</h1>
// // //               <p>{entry.p}</p>
// // //               <entry.icons />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </>
// // //   );
// // // }


// // "use client";
// // import { useState } from "react";
// // import L from "../Layout/page";
// // import  Select   from './Select/page';
// // import Switch   from './Switch/page';


// // const setting = [
// //   { h1: "Appearance", p: "Customize Your Theme", icons: Select },
// //   { h1: "Two-factor Authentication", p: "Keep account secure", icons: Select },
// //   { h1: "Mobile Push Notifications", p: "Receive push notifications", icons: Switch },
// //   { h1: "Desktop Push Notifications", p: "Receive push notifications", icons: Switch },
// //   { h1: "Email Push Notifications", p: "Receive email push notifications", icons: Switch },
// // ];

// // export default function PayrollTable() {
// //   const [leaves, setLeaves] = useState(setting);

// //   const handleExport = () => {
// //     // Implement export functionality here
// //     console.log("Exporting payroll data...");
// //   };

// //   return (
// //     <>
// //       <div className="w-screen">
// //         <L />
// //         <div className="flex flex-col gap-10 w py-12 p-6 rounded-xl m-2">
// //           {leaves.map((entry, index) => (
// //             <div key={index}>
// //               <h1 className="text-2xl font-extrabold">{entry.h1}</h1>
// //               <p>{entry.p}</p>
// //               {/* <entry.icons /> */}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import L from "../Layout/page";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"import { Switch } from "@/components/ui/switch"

// const setting = [
//   { h1: "Appearance", p: "Customize Your Theme", icons: Select },
//   { h1: "Two-factor Authentication", p: "Keep account secure", icons: Select },
//   { h1: "Mobile Push Notifications", p: "Receive push notifications", icons: Switch },
//   { h1: "Desktop Push Notifications", p: "Receive push notifications", icons: Switch },
//   { h1: "Email Push Notifications", p: "Receive email push notifications", icons: Switch },
// ];

// export default function PayrollTable() {
//   const [leaves, setLeaves] = useState(setting);

//   const handleExport = () => {
//     // Implement export functionality here
//     console.log("Exporting payroll data...");
//   };

//   return (
//     <>
//       <div className="w-screen">
//         <L />
//         <div className="flex flex-col gap-10 w py-12 p-6 rounded-xl m-2">
//           {leaves.map((entry, index) => (
//             <div key={index}>
//               <h1 className="text-2xl font-extrabold">{entry.h1}</h1>
//               <p>{entry.p}</p>
//               {entry.icons === Select ?    <Select>
//       <SelectTrigger className="w-[180px]">
//         <SelectValue placeholder="Select a fruit" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectGroup>
//           <SelectLabel>Fruits</SelectLabel>
//           <SelectItem value="apple">Apple</SelectItem>
//           <SelectItem value="banana">Banana</SelectItem>
//           <SelectItem value="blueberry">Blueberry</SelectItem>
//           <SelectItem value="grapes">Grapes</SelectItem>
//           <SelectItem value="pineapple">Pineapple</SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select> : <Switch />}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
"use client";
import { useState } from "react";
import L from "../Layout/page";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

const setting = [
  { h1: "Appearance", p: "Customize Your Theme", icons: Select },
  { h1: "Two-factor Authentication", p: "Keep account secure", icons: Select },
  { h1: "Mobile Push Notifications", p: "Receive push notifications", icons: Switch },
  { h1: "Desktop Push Notifications", p: "Receive push notifications", icons: Switch },
  { h1: "Email Push Notifications", p: "Receive email push notifications", icons: Switch },
];

export default function PayrollTable() {
  const [leaves, setLeaves] = useState(setting);

  const handleExport = () => {
    // Implement export functionality here
    console.log("Exporting payroll data...");
  };

  return (
    <>
      <div className="w-screen">
        <L />
        <div className="flex flex-col gap-10 bg-slate-700 py-12 p-6 rounded-xl m-2">
          <div className=" flex justify-between">
           <div>
           <h1 className="text-2xl font-extrabold">{leaves[0].h1}</h1>
            <p>{leaves[0].p}</p>
           </div>
            <Select>
              <SelectTrigger className="w-[180px] bg-slate-700">
                <SelectValue placeholder="Select a Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  <SelectItem value="apple">Dark</SelectItem>
                  <SelectItem value="banana">Light</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className=" flex justify-between">
           <div>
           <h1 className="text-2xl font-extrabold">{leaves[1].h1}</h1>
            <p>{leaves[1].p}</p>
           </div>
            <Select className="">
              <SelectTrigger className="w-[180px] bg-slate-700">
                <SelectValue placeholder="Select a Language 
                " />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="">
                  {/* <SelectLabel>Fruits</SelectLabel> */}
                  <SelectItem value="apple">English</SelectItem>
                  <SelectItem value="banana">Urdu</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className=" flex justify-between">
           <div>
           <h1 className="text-2xl font-extrabold">{leaves[2].h1}</h1>
            <p>{leaves[2].p}</p>
           </div>
            <Switch />
          </div>
          <div className=" flex justify-between">
           <div>
           <h1 className="text-2xl font-extrabold">{leaves[3].h1}</h1>
            <p>{leaves[3].p}</p>
           </div>
            <Switch />
          </div>
          <div className=" flex justify-between">
           <div>
           <h1 className="text-2xl font-extrabold">{leaves[4].h1}</h1>
            <p>{leaves[4].p}</p>
           </div>
            <Switch />
          </div>
        </div>
      </div>
    </>
  );
}
