/* eslint-disable react/jsx-no-undef */
import ReactDOM from 'react-dom/client'
import React from 'react';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root/Root';
import Home from './component/Home/Home';
import ErrorPage from './component/ErrorPage/ErrorPage';
import DonationDetails from './component/DonationDetails/DonationDetails';
import DonationPage from './component/DonationPage/DonationPage';
import Statistics from './component/Statistics/Statistics';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/donations",
        element: <DonationPage></DonationPage>
      },
      {
        path: "/donation/:id",
        element: <DonationDetails></DonationDetails>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
