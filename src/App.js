import React from "react";
import ReactDOM from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const approuter= createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
    {
        path:"/contact"
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(<RouterProvider router={approuter}/>);