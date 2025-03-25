import { fireEvent, render, screen } from "@testing-library/react";
import Login from "../login/Login";
import "@testing-library/jest-dom";

test("should load login component", () => {
  render(<Login />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});
test("should load button component in page", () => {
  render(<Login />);
  // const button = screen.getByRole("button");
  const button = screen.getByText("Login");
  expect(button).toBeInTheDocument();
});
test("should name input component in page", () => {
  render(<Login />);
  const nameInput = screen.getByPlaceholderText("Username");
  expect(nameInput).toBeInTheDocument();
});

test("should have two input component in page", () => {
  render(<Login />);
  const nameInput = screen.getAllByRole("textbox");
  expect(nameInput.length).toBe(1);
});
test("login button should be clicked", () => {
  render(<Login />);
  const loginButton = screen.getByRole("button", { name: "Login" });
  fireEvent.click(loginButton);
});
