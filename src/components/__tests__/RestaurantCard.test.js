import RestaurantCard from "../restaurantCard/ResturantCard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../../mocks/restaurantCardMock.json";
import { BrowserRouter } from "react-router";
it("should render RestaurantCard component", () => {
  render(
    <BrowserRouter>
      <RestaurantCard data={MOCK_DATA} />
    </BrowserRouter>,
  );
  const title = screen.getByText("Gupta Bhojnalay");
  expect(title).toBeInTheDocument();
});
