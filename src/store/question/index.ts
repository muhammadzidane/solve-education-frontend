import { type StateCreator } from "zustand";

const initialState = {
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
    set((state) => ({ questionProgress: state.questionProgress + 1 }));
  },
  questionToggleTab: () => {
    set((state) => ({ questionTab: state.questionTab === 0 ? 1 : 0 }));
  },
  questionReset: () => {
    set(initialState);
  },
});
