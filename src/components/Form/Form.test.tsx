import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form test", () => {
  let form: HTMLElement;
  beforeAll((): void => {
    render(
      <Form method="post" action="#">
        <input type="text" value={"Test"} />
      </Form>
    );
    form = screen.getByTestId("form");
  });
  test("Form renders", (): void => {
    expect(form).toBeInTheDocument();
  });
  test("Form collects children", (): void => {
    const input = form.querySelector("input") as HTMLInputElement;
    expect(input).toHaveValue("Test");
  });
  test("Form receives method from props", (): void => {
    expect(form).toHaveAttribute("method", "post");
  });
  test("Form receives action from props", (): void => {
    expect(form).toHaveAttribute("action", "#");
  });
  test("Form without children", (): void => {
    render(<Form method="post" action="#"></Form>);
    const form: HTMLElement = screen.getByTestId("form");
    expect(form.childNodes.length).toBe(0);
  });
});
