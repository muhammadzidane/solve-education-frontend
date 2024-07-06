import React from "react";

import { questionData } from "@/constants";

import { DetailContent } from "./components";

const DashboardDetail = async () => {
  const data = questionData;

  return (
    <>
      <DetailContent data={data} />
    </>
  );
};

export default DashboardDetail;
