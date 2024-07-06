export interface QuestionSlice {
  setQuestionFontSlider: (sliderValue: number) => void;
  setQuestionFontSize: (fontSize: number) => void;
  setQuestionProgress: () => void;
  setQuestionScore: () => void;
  setQuestionTab: () => void;
  questionFontSlider: number;
  resetQuestion: () => void;
  questionProgress: number;
  questionFontSize: number;
  questionScore: number;
  questionTab: number;
}
