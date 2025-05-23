import { render, screen } from "@testing-library/react";
import Button from "./Button";
describe("Button Testing", () => {
  test("Button renders", () => {
    render(
      <Button type="button" variant="long">
        Test
      </Button>
    );
  });
});
