interface OpenToastData {
  description: string;
  title: string;
}

export interface ToastSlice {
  openToast: (data: OpenToastData) => void;
  descriptionToast: string;
  closeToast: () => void;
  isOpenToast: boolean;
  titleToast: string;
}
