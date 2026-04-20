import { ButtonType } from "./type";

export default function Button({
  text,
  styles,
  onClick,
  disabled,
  children,
  type
}: ButtonType) {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={`cursor-pointer ${styles}`}
      onClick={onClick}
    >
      {children ? children : <span>{text}</span>}
    </button>
  );
}
