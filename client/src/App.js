import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./pages/Error";
import Exams from "./pages/Exams";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/exams", element: <Exams /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
