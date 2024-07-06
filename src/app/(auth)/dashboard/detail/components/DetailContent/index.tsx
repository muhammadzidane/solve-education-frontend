"use client";

import React, { useEffect, useState } from "react";

import { Container, Stack } from "@mui/material";
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
    setQuestionProgress,
    questionProgress,
    setQuestionScore,
    setQuestionTab,
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

    if (isCorrectAnswer) {
      setQuestionScore();
    }

    setQuestionProgress();
    setAnswerAlertType(answerType);
    setshowAnswerAlert(true);
  };

  const onContinue = () => {
    if (questionProgress === 5) {
      router.push("/dashboard/result");
    } else {
      setQuestionTab();
      setshowAnswerAlert(false);
    }
  };

  useEffect(() => {
    if (questionProgress === 5 && !showAnswerAlert) {
      router.push("/dashboard/result");
    }
  }, [questionProgress, showAnswerAlert, router]);

  return (
    <>
      {/* Passage Content */}
      {questionTab === 0 && (
        <PassageContent text={currentData?.question_data?.passage} />
      )}

      {/* Question Content */}
      {questionTab === 1 && (
        <>
          <QuestionContent text={currentData?.question_data?.question} />
          <Container sx={{ pt: 2 }} maxWidth="lg">
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
          </Container>
        </>
      )}
    </>
  );
};

export default DetailContent;
