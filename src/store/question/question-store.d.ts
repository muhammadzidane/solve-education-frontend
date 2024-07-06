export interface QuestionSlice {
  setQuestionFontSlider: (sliderValue: number) => void;
  setQuestionFontSize: (fontSize: number) => void;
  setQuestionScore: (score: number) => void;
  questionAddProgress: () => void;
  setQuestionTab: () => void;
  questionFontSlider: number;
  resetQuestion: () => void;
  questionProgress: number;
  questionFontSize: number;
  questionScore: number;
  questionTab: number;
}
