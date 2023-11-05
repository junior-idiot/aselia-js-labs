import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Header} from "./Components/Header.tsx";
import {routes} from "./router/routes.tsx";
import "./index.css";

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Header/>
      <div className={"pt-20"}>
          <RouterProvider router={router}/>
      </div>
  </React.StrictMode>,
)
