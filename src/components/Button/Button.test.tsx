import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

describe("Button Testing", (): void => {
  let btn: HTMLElement;

  describe("Default Button (type=button, variant=long)", (): void => {
    beforeEach((): void => {
      render(
        <Button type="button" variant="long">
          Test
        </Button>
      );
      btn = screen.getByText("Test");
    });

    test("Button renders", () => {
      expect(btn).toBeInTheDocument();
    });

    test("Button contains correct text", (): void => {
      expect(btn).toHaveTextContent("Test");
    });

    test("Button matches snapshot", (): void => {
      expect(btn).toMatchSnapshot();
    });
  });

  describe("Button with type=submit", (): void => {
    beforeEach((): void => {
      render(
        <Button variant="long" type="submit" data-testid="Button">
          Test
        </Button>
      );
      btn = screen.getByTestId("Button");
    });

    test("Button receives type attribute", (): void => {
      expect(btn).toHaveAttribute("type", "submit");
    });
  });

  describe("Button with variant=long", (): void => {
    beforeEach((): void => {
      render(
        <Button variant="long" type="button" data-testid="Button">
          Test
        </Button>
      );
      btn = screen.getByTestId("Button");
    });

    test("Button receives variant class", (): void => {
      expect(btn).toHaveClass("long");
    });
  });
});
