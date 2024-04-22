import L from "../Layout/page";
import { FaArrowRight } from "react-icons/fa";

const departments = [
  {
    name: "Development",
    members: [
      { name: "John Doe", jobTitle: "Software Engineer" },
      { name: "Jane Smith", jobTitle: "Frontend Developer" },
      { name: "Michael Johnson", jobTitle: "Backend Developer" },
      { name: "Emily Brown", jobTitle: "UI/UX Designer" },
      { name: "David Wilson", jobTitle: "DevOps Engineer" },
    ],
  },
  {
    name: "Marketing",
    members: [
      { name: "Alice Johnson", jobTitle: "Marketing Manager" },
      { name: "Bob Brown", jobTitle: "Social Media Specialist" },
      { name: "Olivia Miller", jobTitle: "Content Writer" },
      { name: "Ryan Taylor", jobTitle: "SEO Analyst" },
      { name: "Sophia Garcia", jobTitle: "Graphic Designer" },
    ],
  },
  {
    name: "Project Management",
    members: [
      { name: "Chris Lee", jobTitle: "Project Manager" },
      { name: "Emma Wilson", jobTitle: "Assistant Project Manager" },
      { name: "Ethan Clark", jobTitle: "Project Coordinator" },
      { name: "Ava Martinez", jobTitle: "Scrum Master" },
      { name: "Noah Rodriguez", jobTitle: "Technical Lead" },
    ],
  },
  {
    name: "Sales",
    members: [
      { name: "Mike Davis", jobTitle: "Sales Manager" },
      { name: "Sarah White", jobTitle: "Sales Representative" },
      { name: "Liam Hernandez", jobTitle: "Account Executive" },
      { name: "Mia Johnson", jobTitle: "Business Development Manager" },
      { name: "William Wilson", jobTitle: "Sales Support Specialist" },
    ],
  },
  {
    name: "Human Resources",
    members: [
      { name: "Emily Jackson", jobTitle: "HR Manager" },
      { name: "Adam Thompson", jobTitle: "Recruitment Specialist" },
      { name: "Sophie Carter", jobTitle: "Employee Relations Officer" },
      { name: "Daniel Harris", jobTitle: "Training Coordinator" },
      { name: "Emma Brown", jobTitle: "Compensation Analyst" },
    ],
  },
  {
    name: "Customer Support",
    members: [
      { name: "Lucas Wilson", jobTitle: "Customer Support Manager" },
      { name: "Chloe Martinez", jobTitle: "Technical Support Specialist" },
      { name: "Nathan Taylor", jobTitle: "Customer Success Manager" },
      { name: "Ella Gonzalez", jobTitle: "Helpdesk Technician" },
      { name: "Owen Adams", jobTitle: "Client Relations Coordinator" },
    ],
  },
  {
    name: "Finance",
    members: [
      { name: "Sophia Brown", jobTitle: "Finance Manager" },
      { name: "James Lee", jobTitle: "Financial Analyst" },
      { name: "Ava Clark", jobTitle: "Accounts Payable Specialist" },
      { name: "Jacob Rodriguez", jobTitle: "Tax Accountant" },
      { name: "Lily Martinez", jobTitle: "Budget Analyst" },
    ],
  },
  {
    name: "Legal",
    members: [
      { name: "Ethan White", jobTitle: "General Counsel" },
      { name: "Hannah Adams", jobTitle: "Corporate Lawyer" },
      { name: "Daniel Johnson", jobTitle: "Legal Assistant" },
      { name: "Grace Wilson", jobTitle: "Paralegal" },
      { name: "Benjamin Thomas", jobTitle: "Legal Secretary" },
    ],
  },
  {
    name: "Quality Assurance",
    members: [
      { name: "Oliver Smith", jobTitle: "QA Manager" },
      { name: "Avery Thompson", jobTitle: "Quality Analyst" },
      { name: "Evelyn Garcia", jobTitle: "Testing Engineer" },
      { name: "Leo Hernandez", jobTitle: "QA Automation Engineer" },
      { name: "Isabella Davis", jobTitle: "Quality Control Inspector" },
    ],
  },
  {
    name: "Operations",
    members: [
      { name: "Mason Martinez", jobTitle: "Operations Manager" },
      { name: "Amelia Wilson", jobTitle: "Logistics Coordinator" },
      { name: "Logan Johnson", jobTitle: "Supply Chain Manager" },
      { name: "Aria Thompson", jobTitle: "Procurement Specialist" },
      { name: "Jackson Clark", jobTitle: "Inventory Control Specialist" },
    ],
  },
  {
    name: "Product Management",
    members: [
      { name: "Elijah Taylor", jobTitle: "Product Manager" },
      { name: "Harper Brown", jobTitle: "Product Owner" },
      { name: "Landon Davis", jobTitle: "Product Analyst" },
      { name: "Madison Thomas", jobTitle: "Product Strategist" },
      { name: "Grayson Wilson", jobTitle: "Product Marketing Manager" },
    ],
  },
  {
    name: "Research and Development",
    members: [
      { name: "Carter Martinez", jobTitle: "Research Scientist" },
      { name: "Scarlett Clark", jobTitle: "R&D Engineer" },
      { name: "Ezra Hernandez", jobTitle: "Data Scientist" },
      { name: "Aubrey Johnson", jobTitle: "Research Analyst" },
      { name: "Luke Thompson", jobTitle: "Innovation Specialist" },
    ],
  },
];

const Index = () => {
  return (
    <>
      <div>
        <L />
        <div className=" flex flex-col gap-3 bg-slate-700  p-6  rounded-xl m-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="border border-gray-300 p-4 rounded-md shadow-md"
              >
                <h2 className="text-lg font-semibold mb-2 border-b-2 border-gray-300">
                  {dept.name} Department
                </h2>
                <ul>
                  {dept.members.map((member, index) => (
                    <div className=" flex justify-between items-center">
                      <li key={index} className="mb-2 ">
                        <span className="font-semibold flex flex-col">
                          {member.name}
                        </span>
                        {member.jobTitle}
                      </li>
                      <span className=" hover:animate-pulse cursor-pointer   hover:text-xl">
                        <FaArrowRight />
                      </span>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
