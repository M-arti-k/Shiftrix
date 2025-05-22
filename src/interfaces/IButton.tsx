type ButtonVariant = "long" | "medium" | "short";
type ButtonColor = "main" | "second" | "red" | "transparent" | undefined;

export interface IButton {
  children: string;
  type: "submit" | "reset" | "button" | undefined;
  color?: ButtonColor;
  variant: ButtonVariant;
}
