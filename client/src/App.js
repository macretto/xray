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
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exams" element={<Exams />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/exams/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
