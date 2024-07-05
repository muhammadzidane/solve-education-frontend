import React from "react";

import { DashboardDetailLayout } from "@/components";

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <DashboardDetailLayout>{children}</DashboardDetailLayout>
);

export default Layout;
