import type { FC, JSX } from "react";
import type { IButton } from "src/interfaces/IButton";
import styles from "./Button.module.scss";
import clsx from "clsx";

const Button: FC<IButton> = ({
  children,
  type,
  variant,
  color,
}): JSX.Element => {
  return (
    <button
      data-testid="Button"
      className={clsx(
        styles["button-base"],
        styles[`${variant}`],
        styles[`${color}`]
      )}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
