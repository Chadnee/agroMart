import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./MainLayout/Router";
 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className = "max-w-screen m-0 mx-auto border-4 border-orange-500" >
      <RouterProvider router={router} />
    </div> */}
    <div className="w-full m-0 p-0">
  <RouterProvider router={router} />
</div>
  </React.StrictMode>
);
