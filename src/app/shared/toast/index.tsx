// Toast.tsx

"use client";

import { useEffect } from "react";
import { ToastProps } from "./type";

export default function Toast({ message, type, show, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const isSuccess = type === "success";

  return (
    <div
      className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-xl shadow-xl text-white transition-all duration-300 z-[889] ${
        isSuccess ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}
