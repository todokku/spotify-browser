import React from "react";
import { render, cleanup, fireEvent } from "../utils/test-utils";
import "jest-dom/extend-expect";

import TokenStorage, { hasTokenSpy } from "../TokenStorage";
jest.mock("../TokenStorage");

import { HomePage } from "./HomePage";

beforeEach(() => {
  TokenStorage.mockClear();
  hasTokenSpy.mockClear();
});

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

describe("HomePage", () => {
  it("should contains one link when there is not token", () => {
    hasTokenSpy.mockReturnValue(false);
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId("home-page")).toBeInTheDocument();
    const loginLink = getByTestId("login-link");
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveTextContent("Login");
    expect(loginLink).toHaveAttribute(
      "href",
      "http://api.spotify.test/v1/login"
    );
  });

  it("should contains one <Loader /> while is loading", () => {
    const { getByTestId } = render(<HomePage isLoading={true} />);
    expect(getByTestId("loader")).toBeInTheDocument();
  });

  it("should contains one <Loader /> while is logging in", () => {
    const { getByTestId } = render(<HomePage />);
    fireEvent.click(getByTestId("login-link"));
    expect(getByTestId("loader")).toBeInTheDocument();
  });
});
