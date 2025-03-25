import { render, screen } from "@testing-library/react";
import Header from "../header/Header";
import { Provider } from "react-redux";
import store from "../../redux/store";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterEach(() => {});
  afterAll(() => {});
  it("should render with USER our header component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const login = screen.getByText("USER:");
    expect(login).toBeInTheDocument();
  });
  it("should render with cart icon on header component", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const cart_icon = screen.getByRole("cart_icon");
    expect(cart_icon).toBeInTheDocument();
  });
});
