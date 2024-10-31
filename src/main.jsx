import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Roots/Root.jsx';
import Error from './components/Error/Error.jsx';
import Home from './components/Home/Home.jsx';
import DashedBoard from './components/DashedBoard/DashedBoard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    // step---------------------1
    errorElement:<Error></Error>,
    // step---------------------2
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'books/:bookId',
        loader:() => fetch('./booksData.json'),
        element:<BookDetails></BookDetails>
      },
      {
        path:'dashedBoard',
        element:<DashedBoard></DashedBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
