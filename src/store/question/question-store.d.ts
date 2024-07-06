export interface QuestionSlice {
  questionChangeFontSize: (fontSize: number) => void;
  questionAddProgress: () => void;
  questionToggleTab: () => void;
  questionProgress: number;
  questionFontSize: number;
  questionTab: number;
}
