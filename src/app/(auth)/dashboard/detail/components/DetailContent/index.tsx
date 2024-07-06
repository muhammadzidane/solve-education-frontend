"use client";

import React, { useState } from "react";

import { Stack, Box } from "@mui/material";
import { useRouter } from "next/navigation";

import {
  QuestionCardAlert,
  QuestionContent,
  PassageContent,
  ButtonQuestion,
} from "@/components";
import { useBoundStore } from "@/store";

import { DetailContentProps } from "./detail-content";

const DetailContent: React.FC<DetailContentProps> = ({ data = [] }) => {
  const router = useRouter();
  const {
    questionAddProgress,
    questionToggleTab,
    questionProgress,
    questionTab,
  } = useBoundStore();

  const [showAnswerAlert, setshowAnswerAlert] = useState<boolean>(false);
  const [answerAlertType, setAnswerAlertType] = useState<"success" | "error">(
    "success"
  );

  const progressIndex = questionProgress === 5 ? 4 : questionProgress;
  const currentData = data[progressIndex];

  const answerAlertTitle =
    answerAlertType === "success" ? "Exellent!" : "Learn from mistakes!";

  const onAnswer = (answer: string) => {
    const isCorrectAnswer = answer === currentData?.question_data?.answer;
    const answerType = isCorrectAnswer ? "success" : "error";

    questionAddProgress();
    setAnswerAlertType(answerType);
    setshowAnswerAlert(true);
  };

  const onContinue = () => {
    if (questionProgress === 5) {
      router.push("/dashboard/result");
    } else {
      questionToggleTab();
      setshowAnswerAlert(false);
    }
  };

  return (
    <>
      {/* Passage Content */}
      {questionTab === 0 && (
        <Box>
          <PassageContent text={currentData?.question_data?.passage} />
        </Box>
      )}

      {/* Question Content */}
      {questionTab === 1 && (
        <Box>
          <QuestionContent text={currentData?.question_data?.question} />
          <Box flex={1} px={24} pt={2}>
            {showAnswerAlert ? (
              <div>
                <ButtonQuestion
                  color={answerAlertType}
                  variant="contained"
                  sx={{ mb: "96px" }}
                >
                  {currentData?.question_data?.answer}
                </ButtonQuestion>
                <QuestionCardAlert
                  onSubmit={onContinue}
                  title={answerAlertTitle}
                  type={answerAlertType}
                />
              </div>
            ) : (
              <Stack spacing={1}>
                {currentData?.question_data?.options.map(
                  (option, optionIndex) => (
                    <ButtonQuestion
                      onClick={() => onAnswer(option)}
                      variant="outlined"
                      key={optionIndex}
                      color="secondary"
                    >
                      {option}
                    </ButtonQuestion>
                  )
                )}
              </Stack>
            )}
          </Box>
        </Box>
      )}
    </>
  );
};

export default DetailContent;
