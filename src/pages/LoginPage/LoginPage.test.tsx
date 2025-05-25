import { render } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { MemoryRouter } from "react-router-dom";

describe("Login Page test", (): void => {
  test("Login Page renders", (): void => {
    render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    );
  });
});
