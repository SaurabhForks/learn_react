import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Contact from "./components/contact/contact";
import Error from "./components/error/Error";
import Restaurant from "./components/resaurant/Restaurant";
import { Provider } from "react-redux";
import store from "./redux/store";
import Cart from "./components/cart/Cart";
import UserContext from "./context/UserContext";
import Login from "./components/login/Login";
// import Groceries from "./components/groceries/Groceries";

// const element = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")]));
const Groceries = lazy(() => import("./components/groceries/Groceries"));

const AppLayout = () => {
  const [userDetail, setUserDetail] = useState({
    name: "Saurabh",
    password: "",
  });
  return (
    <div className="app">
      <UserContext.Provider
        value={{ loggedInUser: userDetail.name, setUserDetail }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="restaurant/:resId" element={<Restaurant />} />
          <Route
            path="groceries"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Groceries />
              </Suspense>
            }
          />
          <Route path="cart" element={<Cart />} />

          <Route path="*" element={<Error />} errorElement />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
);
