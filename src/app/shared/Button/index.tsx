import { ButtonType } from "./type";

export default function Button({
  text,
  styles,
  onClick,
  disabled,
  children
}: ButtonType) {
  return (
    <button
      disabled={disabled}
      className={`cursor-pointer ${styles}`}
      onClick={onClick}
    >
     {children ? children : <span>{text}</span>}
    </button>
  );
}
