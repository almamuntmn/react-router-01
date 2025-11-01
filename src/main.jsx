import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import Mobiles from './component/Mobiles/Mobiles.jsx';
import Contact from './component/Contact/Contact.jsx';

const router=createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {index:true, element:<Home></Home>},
      {path: 'mobiles', element:<Mobiles></Mobiles>},
      {path: 'contact', element:<Contact></Contact>},
      {path: 'app', element:<App></App>}
    ]
  },
  {
    path: "/about",
    element: <div>About</div>
  },
  {
    path: "/contact",
    element: <div>Contact</div>
  },
  {
    path: "/app",
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
