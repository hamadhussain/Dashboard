import Nav from "../Dashboard/Nav/page";

const Layout = ({ children }) => {
  return (
    <div className="flex ">
      <Nav />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;


// import Nav from "../Dashboard/Nav/page";
// const Layout = ({ children }) => {
//   return (
//     <div className=" flex">
//       <Nav />
//       {children}
//     </div>
//   );
// };

// export default Layout;
