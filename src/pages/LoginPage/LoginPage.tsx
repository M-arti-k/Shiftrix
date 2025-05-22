import type { FC, JSX } from "react";
import styles from "./LoginPage.module.scss";
import Logo from "@components/Logo/Logo";
import InputIcon from "@components/InputIcon/InputIcon";
import emailImageUrl from "/images/email-icon.png";
import passwordImageUrl from "/images/password-icon.png";
import Input from "@components/Input/Input";
import Form from "@components/Form/Form";
import Button from "@components/Button/Button";

const LoginPage: FC = (): JSX.Element => {
  return (
    <section className={styles.login}>
      <div className={styles.wrapper}>
        <Logo />
        <Form method="POST" action="#">
          <div className={styles.input}>
            <InputIcon url={emailImageUrl} alt="Email Icon" />
            <Input type="email">Email</Input>
          </div>
          <div className={styles.input}>
            <InputIcon url={passwordImageUrl} alt="Password Icon" />
            <Input type="password">Password</Input>
          </div>
          <div className={styles["mt-70"]}>
            <Button color="main" variant="long" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default LoginPage;
