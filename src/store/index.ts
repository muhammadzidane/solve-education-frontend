import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createQuestionSlice } from "./question";
import { QuestionSlice } from "./question/question-store";

export const useBoundStore = create<QuestionSlice>((...a) => ({
  ...persist(createQuestionSlice, { name: "question-storage" })(...a), // 'localStorage'
}));
