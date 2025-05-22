import type { FC, JSX } from "react";
import type { IInput } from "src/interfaces/IInput";
import styles from "./Input.module.scss";

const Input: FC<IInput> = ({ type, children }): JSX.Element => {
  return (
    <div className={styles.underline}>
      <input className={styles.input} type={type} placeholder={children} />
    </div>
  );
};

export default Input;
