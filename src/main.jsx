import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componets/Root/Root.jsx';
import Home from './componets/Home/Home.jsx';
import Login from './componets/Login/Login.jsx';
import Register from './componets/Register/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Oders from './componets/Oders/Oders.jsx';
import Profile from './componets/Profile/Profile.jsx';
import PrivateRoute from './componets/Routes/PrivateRoute.jsx';


const router = createBrowserRouter([
  {
  path: "/",
  element: <Root></Root>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'Login',
      element: <Login></Login>
    },
    {
      path: 'Register',
      element: <Register></Register>
    },
    {
      path: 'Oders',
      element: <PrivateRoute><Oders></Oders></PrivateRoute>
    },

    {
      path: 'profile',
      element: <PrivateRoute><Profile></Profile></PrivateRoute>
    }
    
   
  ]
  }
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
