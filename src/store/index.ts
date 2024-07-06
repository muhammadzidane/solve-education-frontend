import { create } from "zustand";
import { persist } from "zustand/middleware";

import { createQuestionSlice } from "./question";
import { QuestionSlice } from "./question/question-store";
import { createToastSlice } from "./toast";
import { ToastSlice } from "./toast/toast-store";

export const useBoundStore = create<ToastSlice & QuestionSlice>((...a) => ({
  ...persist(createQuestionSlice, { name: "question-storage" })(...a), // 'localStorage'
  ...createToastSlice(...a),
}));
