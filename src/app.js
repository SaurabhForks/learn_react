import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Contact from "./components/contact/contact";
import Error from "./components/error/Error";
import Restaurant from "./components/resaurant/Restaurant";
// const element = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1"), React.createElement("h2", {}, "I am h2")]));

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
            <Route element={<AppLayout />} >
                <Route index element={<Body />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="restaurant/:resId" element={<Restaurant />} />
                <Route path="*" element={<Error />} errorElement />
            </Route>
        </Routes>
    </BrowserRouter>
);
