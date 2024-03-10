import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home/Home";
import InfoLic from "./components/academicInfo/InfoLic";
import InfoMas from "./components/academicInfo/InfoMas";
import Contact from "./components/contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <h1>Error</h1>,
        children: [
            {
                path: "contacts/:contactId",
                element: <h1>Componente contact</h1>,
            }
        ]
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
    {
        path: "/more-info-l/:id",
        element: <InfoLic/>,
    },
    {
        path: "/more-info-m",
        element: <InfoMas/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
