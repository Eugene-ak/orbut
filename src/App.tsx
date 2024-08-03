import AuthPage from "./pages/Auth";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
