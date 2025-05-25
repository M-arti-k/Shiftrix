import { act, render, screen } from "@testing-library/react";
import Logo from "./Logo";
import { MemoryRouter } from "react-router-dom";

describe("Logo test", (): void => {
  let logo: HTMLElement;
  beforeEach((): void => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date("2025-01-01T03:15:00"));
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
    logo = screen.getByTestId("logo");
  });
  test("Logo renders", (): void => {
    expect(logo).toBeInTheDocument();
  });
  test("Link leads to the main page", (): void => {
    expect(logo).toHaveAttribute("href", "/");
  });
  test("Display logo text", (): void => {
    expect(screen.getByText(/Shiftrix/i)).toBeInTheDocument();
    expect(screen.getByText(/v2.0/i)).toBeInTheDocument();
  });
  test("Clock displays system`s time", (): void => {
    const clockHours: HTMLElement = screen.getByTestId("clock-hours");
    const clockMinutes: HTMLElement = screen.getByTestId("clock-minutes");

    expect(clockHours).toHaveStyle(
      "transform: translate(-50%, -50%) rotate(97.5deg)"
    );
    expect(clockMinutes).toHaveStyle(
      "transform: translate(-50%, -50%) rotate(90deg)"
    );
  });
  test("Clock updates after one minute", (): void => {
    const clockHours: HTMLElement = screen.getByTestId("clock-hours");
    const clockMinutes: HTMLElement = screen.getByTestId("clock-minutes");

    act((): void => {
      jest.advanceTimersByTime(60000);
    });

    expect(clockHours).toHaveStyle(
      "transform: translate(-50%, -50%) rotate(98deg)"
    );
    expect(clockMinutes).toHaveStyle(
      "transform: translate(-50%, -50%) rotate(96deg)"
    );
  });
  test("Logo`s snapshot", (): void => {
    expect(logo).toMatchSnapshot();
  });
});
