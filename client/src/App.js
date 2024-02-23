import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";import "./App.css";
import Exams from "./pages/Exams";
import Home from "./pages/Home";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
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
