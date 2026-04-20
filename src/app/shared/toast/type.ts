export type ToastStatus = "success" | "failed";

export interface ToastProps {
  message: string;
  type: ToastStatus;
  show: boolean;
  onClose: () => void;
}
