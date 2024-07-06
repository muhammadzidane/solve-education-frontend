import React from "react";

import { DashboardDetailLayout } from "@/components";
import { ChildrenProps } from "@/types";

const Layout: React.FC<ChildrenProps> = ({ children }) => (
  <DashboardDetailLayout>{children}</DashboardDetailLayout>
);

export default Layout;
