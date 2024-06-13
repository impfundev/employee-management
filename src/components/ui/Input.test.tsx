import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it("renders an input element with the correct className", () => {
    render(<Input className="test-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("uk-input");
    expect(inputElement).toHaveClass("test-class");
  });

  it("passes another props to the input element", () => {
    render(<Input type="text" placeholder="Enter text" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveAttribute("placeholder", "Enter text");
  });
});
