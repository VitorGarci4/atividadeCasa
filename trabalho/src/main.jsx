import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import Media from "./Media.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
 
  {
    path: "/media",
    element: <Media/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);