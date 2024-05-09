import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Services from './components/Services';
import HomePage from './Pages/HomePage';
import Register from './components/Register';
import Success from './components/Success';

const router = createBrowserRouter([
  {
    path: "/services",
    element: <Services />, 
  },
  {
    path: "/",
    element: <HomePage />, 
  },
  {
    path: "/register",
    element: <Register />, 
  },
  {
    path: "/success",
    element: <Success />, 
  },
  
])

function App() {

  return (
    <div className="App">
        <RouterProvider router={router} />  
  </div>

  );
}

export default App;
