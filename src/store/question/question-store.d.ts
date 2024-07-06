export interface QuestionSlice {
  setQuestionFontSlider: (sliderValue: number) => void;
  setQuestionFontSize: (fontSize: number) => void;
  questionAddProgress: () => void;
  questionToggleTab: () => void;
  questionFontSlider: number;
  questionProgress: number;
  questionFontSize: number;
  questionTab: number;
}
