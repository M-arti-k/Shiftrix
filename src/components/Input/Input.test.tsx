import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input test", () => {
  let input: HTMLInputElement;
  beforeEach((): void => {
    render(<Input type="email">Email</Input>);
    input = screen.getByTestId("input");
  });
  test("Input renders", (): void => {
    expect(input).toBeInTheDocument();
  });
  test("Input receives type from props", (): void => {
    expect(input).toHaveAttribute("type", "email");
  });
  test("Input receives children from props and displays in placeholder", (): void => {
    expect(input).toHaveAttribute("placeholder", "Email");
  });
  test("Input`s snapshot", (): void => {
    expect(input).toMatchSnapshot();
  });
});
