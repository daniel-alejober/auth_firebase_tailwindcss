import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-1/2 mx-auto my-5">
      <Outlet />
    </div>
  );
};

export default Layout;
