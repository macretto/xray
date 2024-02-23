import { Route, Routes } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar.js";
import DetailPage from "./pages/DetailPage";
import Exams from "./pages/Exams";
import Home from "./pages/Home";
import Main from "./pages/Main";

// import { useApi } from './hooks/use-api';

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
