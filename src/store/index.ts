import { create } from "zustand";

import { createQuestionSlice } from "./question";
import { QuestionSlice } from "./question/question-store";
import { createToastSlice } from "./toast";
import { ToastSlice } from "./toast/toast-store";

export const useBoundStore = create<ToastSlice & QuestionSlice>((...a) => ({
  ...createToastSlice(...a),
  ...createQuestionSlice(...a),
}));
