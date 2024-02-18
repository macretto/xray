import './App.css';
import ResponsiveAppBar from './components/Navbar';
import { Routes, Route } from "react-router";
import Home from './components/Home';
import Exams from './components/Exams';
import Main from './components/Main';

import DetailPage from './components/DetailPage';
import Products from './components/Products';

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
        {/* <Route path="/detail/:id" element={<Products />} /> */}
        {/* <Route path="/Products" element={<Products />} /> */}
      </Routes>
      {/* {response} */}

    </div>
  );
}

export default App;
