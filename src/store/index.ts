import { create } from "zustand";

import { createBearSlice } from "./bear";
import { createQuestionSlice } from "./question";
import { createToastSlice } from "./toast";

export const useBoundStore = create<BearSlice & ToastSlice & QuestionSlice>(
  (...a) => ({
    ...createBearSlice(...a),
    ...createToastSlice(...a),
    ...createQuestionSlice(...a),
  })
);
