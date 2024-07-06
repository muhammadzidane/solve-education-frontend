import { type StateCreator } from "zustand";

import { QuestionSlice } from "./question-store";

const initialState = {
  questionFontSize: 14,
  questionProgress: 0,
  questionTab: 0,
};

export const createQuestionSlice: StateCreator<
  QuestionSlice,
  [],
  [],
  QuestionSlice
> = (set) => ({
  ...initialState,
  questionAddProgress: () => {
    set((state) => {
      if (state.questionProgress === 100) {
        return { questionProgress: initialState.questionProgress };
      }
      return { questionProgress: state.questionProgress + 20 };
    });
  },
  questionToggleTab: () => {
    set((state) => ({ questionTab: state.questionTab === 0 ? 1 : 0 }));
  },
  questionChangeFontSize: (fontSize: number) => {
    set(() => ({ questionFontSize: fontSize }));
  },
  questionReset: () => {
    set(initialState);
  },
});
