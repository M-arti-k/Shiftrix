import type { FC, JSX } from "react";
import styles from "./InputIcon.module.scss";
import type { IInputIcon } from "src/interfaces/IInputIcon";

const InputIcon: FC<IInputIcon> = ({ url, alt }): JSX.Element => {
  return (
    <div data-testid="input-icon" className={styles["input-icon"]}>
      <img data-testid="input-image" src={url} alt={alt} />
    </div>
  );
};

export default InputIcon;
