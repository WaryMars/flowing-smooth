import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Shop from "./pages/Shop.jsx";
import About from "./sections/About.jsx";
import Cart from "./sections/Cart.jsx";
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Account from './sections/Account.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "account",
    element: <Account />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  
]);

const root  = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
