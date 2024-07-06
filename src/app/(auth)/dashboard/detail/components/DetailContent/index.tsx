"use client";

import React from "react";

import { Stack, Box } from "@mui/material";

import {
  // QuestionCardAlert,
  QuestionContent,
  PassageContent,
  ButtonQuestion,
} from "@/components";
import { useBoundStore } from "@/store";

const DetailContent: React.FC = () => {
  const { questionAddProgress, questionTab } = useBoundStore();

  return (
    <>
      <Box display={questionTab === 1 ? "none" : "block"}>
        <PassageContent text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi provident assumenda fugit porro laboriosam iste repellat soluta, facere deleniti animi quaerat voluptatem explicabo distinctio quos officiis ipsa voluptate architecto culpa." />
      </Box>
      <Box display={questionTab === 0 ? "none" : "block"}>
        <QuestionContent text="Saha aing?" />
        <Box flex={1} px={24} pt={2}>
          <Stack spacing={1}>
            <ButtonQuestion
              onClick={questionAddProgress}
              variant="outlined"
              color="secondary"
            >
              Sad
            </ButtonQuestion>
          </Stack>
          {/* 
            <div>
              <ButtonQuestion
                variant="contained"
                sx={{ mb: "96px" }}
                color="success"
              >
                Bored
              </ButtonQuestion>
              <QuestionCardAlert title="Learn from mistakes!" type="error" />
            </div> */}
        </Box>
      </Box>
    </>
  );
};

export default DetailContent;
