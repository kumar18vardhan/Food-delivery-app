import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import "./index.css";
import { useState } from "react";

const AppLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Outlet />
      <Footer />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);