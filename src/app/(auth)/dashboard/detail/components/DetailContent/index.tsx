"use client";

import React from "react";

import { Box } from "@mui/material";

import {
  QuestionCardAlert,
  QuestionContent,
  PassageContent,
  ButtonQuestion,
} from "@/components";
import { useBoundStore } from "@/store";

const DetailContent: React.FC = () => {
  const { questionTab } = useBoundStore();

  return (
    <>
      {questionTab === 0 ? (
        <PassageContent text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident assumenda fugit porro laboriosam iste repellat soluta, facere deleniti animi quaerat voluptatem explicabo distinctio quos officiis ipsa voluptate architecto culpa." />
      ) : (
        <>
          <QuestionContent text="Saha aing?" />

          <Box flex={1} px={24} pt={2}>
            {/* <Stack spacing={1}>
          <ButtonQuestion>Sad</ButtonQuestion>
        </Stack> */}

            <div>
              <ButtonQuestion
                variant="contained"
                className="!mb-24"
                color="error"
              >
                Bored
              </ButtonQuestion>
              <QuestionCardAlert title="Learn from mistakes!" type="error" />
            </div>
          </Box>
        </>
      )}
    </>
  );
};

export default DetailContent;
