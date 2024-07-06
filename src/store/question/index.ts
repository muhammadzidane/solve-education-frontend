import { type StateCreator } from "zustand";

import { QuestionSlice } from "./question-store";

const initialState = {
  questionFontSlider: 0,
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
      const progressNumber = state.questionProgress + 1;

      return { questionProgress: progressNumber };
    });
  },
  questionToggleTab: () => {
    set((state) => ({ questionTab: state.questionTab === 0 ? 1 : 0 }));
  },
  setQuestionFontSlider: (sliderValue) => {
    set(() => ({ questionFontSlider: sliderValue }));
  },
  setQuestionFontSize: (fontSize) => {
    set(() => ({ questionFontSize: fontSize }));
  },
  resetQuestion: () => {
    set(initialState);
  },
});
