import type { FC, JSX } from "react";
import type { IForm } from "src/interfaces/IForm";

const Form: FC<IForm> = ({ method, action, children }): JSX.Element => {
  return (
    <form data-testId="form" action={action} method={method}>
      {children}
    </form>
  );
};

export default Form;
