interface QuestionData {
  question_data: {
    passage_id: string;
    options: string[];
    question: string;
    passage: string;
    answer: string;
  };
  question_id: number;
}

export interface DetailContentProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: QuestionData[];
}
