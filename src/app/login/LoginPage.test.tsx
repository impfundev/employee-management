import { render, screen } from "@testing-library/react";
import LoginPage from "./page";

describe("LoginPage", () => {
  it("renders a form with the correct title", () => {
    render(<LoginPage />);
    const legendElement = screen.getByRole("heading", {
      name: "Sign In to Continue",
    });
    expect(legendElement).toBeInTheDocument();
  });

  it("renders two input fields", () => {
    render(<LoginPage />);
    const emailInput = screen.getByRole("textbox", {
      name: "Enter Email or Phone Number",
    });
    const passwordInput = screen.getByRole("textbox", {
      name: "Enter Password",
    });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("renders a sign in button", () => {
    render(<LoginPage />);
    const signInButton = screen.getByRole("button", { name: "Sign In" });
    expect(signInButton).toBeInTheDocument();
  });

  it("renders a link to the sign up page", () => {
    render(<LoginPage />);
    const signUpLink = screen.getByRole("link", { name: "Sign Up" });
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink).toHaveAttribute("href", "/sign-up");
  });

  it("renders a link to the forgot password page", () => {
    render(<LoginPage />);
    const forgotPasswordLink = screen.getByRole("link", {
      name: "Forgot Password?",
    });
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink).toHaveAttribute("href", "#");
  });
});
