import React from "react";
import Header from "../views/Header";

const Layout = ({ children }) => (
  <div className="Layout">
    <Header />
    {children}
  </div>
);

export default Layout;
