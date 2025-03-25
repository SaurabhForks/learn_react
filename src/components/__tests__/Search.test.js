import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../body/Body";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { act } from "react";
it("should rnder the body component with serach input ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </BrowserRouter>,
    ),
  );

  const searchInput = screen.getByPlaceholderText("Search Restaurants");
  fireEvent.change(searchInput, { target: { value: "Hotel" } });
  expect(searchInput).toBeInTheDocument();

  //   const cards = screen.getAllByTestId("cardTest");

  //   expect(cards.length).toBe(0);
});
