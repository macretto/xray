import './App.css';
import ResponsiveAppBar from './components/Navbar';
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Exams from './pages/Exams';
import Main from './pages/Main';
import DetailPage from './pages/DetailPage';


import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className='App'>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Exams" element={<Exams />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
