export interface QuestionCardAlertProps {
  type: "success" | "error";
  onSubmit: () => void;
  title: string;
}
