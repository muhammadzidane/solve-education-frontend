import { type StateCreator } from "zustand";

import { QuestionSlice } from "./question-store";

const initialState = {
  questionFontSlider: 0,
  questionFontSize: 14,
  questionProgress: 0,
  questionScore: 0,
  questionTab: 0,
};

export const createQuestionSlice: StateCreator<
  QuestionSlice,
  [],
  [],
  QuestionSlice
> = (set) => ({
  ...initialState,
  setQuestionProgress: () => {
    set((state) => ({ questionProgress: state.questionProgress + 1 }));
  },
  setQuestionTab: () => {
    set((state) => ({ questionTab: state.questionTab === 0 ? 1 : 0 }));
  },
  setQuestionFontSlider: (sliderValue) => {
    set(() => ({ questionFontSlider: sliderValue }));
  },
  setQuestionScore: () => {
    set((state) => ({ questionScore: state.questionScore + 20 }));
  },
  setQuestionFontSize: (fontSize) => {
    set(() => ({ questionFontSize: fontSize }));
  },
  resetQuestion: () => {
    set(initialState);
  },
});
