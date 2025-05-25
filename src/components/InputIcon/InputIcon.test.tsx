import { render, screen } from "@testing-library/react";
import InputIcon from "./InputIcon";

describe("InputIcon test", (): void => {
  let inputIcon: HTMLElement;
  beforeEach((): void => {
    render(<InputIcon alt="test" url="url" />);
    inputIcon = screen.getByTestId("input-icon");
  });
  test("InputIcon renders", (): void => {
    expect(inputIcon).toBeInTheDocument();
  });
  test("InputIcon contains img", (): void => {
    const img: HTMLImageElement = screen.getByTestId("input-image");
    expect(img).toBeInTheDocument();
  });
  test("InputIcon`s img contains url from props", (): void => {
    const img: HTMLImageElement = screen.getByTestId("input-image");
    expect(img).toHaveAttribute("src", "url");
  });
  test("InputIcon`s img contains alt from props", (): void => {
    const img: HTMLImageElement = screen.getByTestId("input-image");
    expect(img).toHaveAttribute("alt", "test");
  });
});
