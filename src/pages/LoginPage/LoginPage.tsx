import type { FC, JSX } from "react";
import styles from "./LoginPage.module.scss";
import Logo from "../../components/Logo/Logo";

const LoginPage: FC = (): JSX.Element => {
  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>
        <Logo />
      </div>
    </section>
  );
};

export default LoginPage;
