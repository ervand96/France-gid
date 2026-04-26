import { ButtonType } from "./type";

export default function Button({
  text,
  styles,
  onClick,
  disabled,
  children,
  type,
  designType
}: ButtonType) {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      className={`cursor-pointer transition-all duration-300 ${styles} ${designType === "gold" ? "bg-accent hover:bg-accent/50 text-secondary border-accent" : designType === "white" ? "bg-secondary hover:bg-secondary/50 text-primary" : "text-secondary hover:bg-primary hover:border-primary border-secondary" }`}
      onClick={onClick}
    >
      {children ? children : <span>{text}</span>}
    </button>
  );
}
