import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Contact from "./components/contact/contact";
import Error from "./components/error/Error";
import Restaurant from "./components/resaurant/Restaurant";
// import Groceries from "./components/groceries/Groceries";

// const element = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")]));
const Groceries = lazy(() => import("./components/groceries/Groceries"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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
        <Route path="*" element={<Error />} errorElement />
      </Route>
    </Routes>
  </BrowserRouter>,
);
