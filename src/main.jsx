import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter , RouterProvider} from "react-router-dom";

import Home from "./components/Home.jsx";
import SignIn from "./components/SignIn.jsx";
import Registration from "./components/Registration.jsx";
import Error from "./components/Error.jsx";
import Book from "./components/Book.jsx";
import App from "./App.jsx";
import "./index.css";
import SportsDetails from "./components/SportDetails.jsx";
import ThankYou from "./components/ThankYou.jsx";



const router = createBrowserRouter([
  { path: "/", element: <Home />, },
  { path: "/sports", element: <SportsDetails/> },
  { path: "/signin", element: <SignIn /> },
  { path: "/registration", element: <Registration/> },
  { path: "*", element: <Error /> } ,
  { path: "/booking", element: <Book /> },
  { path: "/thank-you", element: <ThankYou/> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
