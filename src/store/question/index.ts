import { type StateCreator } from "zustand";

const initialState = {
  currentTab: 0,
  progress: 0,
};

export const createQuestionSlice: StateCreator<
  QuestionSlice,
  [],
  [],
  QuestionSlice
> = (set) => ({
  ...initialState,
  questionAddProgress: () => {
    set((state) => ({ progress: state.progress + 1 }));
  },
  questionReset: () => {
    set(initialState);
  },
});
