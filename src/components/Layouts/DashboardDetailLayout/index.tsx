import React from "react";

import { Footer, Navbar } from "./components";

/**
 * @param children Children content to be displayed inside the main template
 */
const DashboardDetailLayout: React.FC<ChildrenProps> = ({ children }) => (
  <div className="flex h-screen">
    <div className="flex flex-col ml-auto w-full">
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  </div>
);

export default DashboardDetailLayout;
