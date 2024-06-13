import { render, screen } from "@testing-library/react";
import SignUpPage from "./page";

describe("SignUpPage", () => {
  it("renders a form with the correct title", () => {
    render(<SignUpPage />);
    const legendElement = screen.getByRole("heading", {
      name: "Sign Up to Continue",
    });
    expect(legendElement).toBeInTheDocument();
  });

  it("renders four input fields", () => {
    render(<SignUpPage />);
    const emailInput = screen.getByRole("textbox", { name: "Enter Email" });
    const passwordInput = screen.getByRole("textbox", {
      name: "Enter Password",
    });
    const nameInput = screen.getByRole("textbox", { name: "Enter Name" });
    const phoneNumberInput = screen.getByRole("textbox", {
      name: "Enter Phone Number",
    });
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(phoneNumberInput).toBeInTheDocument();
  });

  it("renders a sign up button", () => {
    render(<SignUpPage />);
    const signUpButton = screen.getByRole("button", { name: "Sign In" });
    expect(signUpButton).toBeInTheDocument();
  });

  it("renders a link to the login page", () => {
    render(<SignUpPage />);
    const loginLink = screen.getByRole("link", { name: "Login" });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });
});
