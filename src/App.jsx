import './App.css';
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NoMatchPage from './pages/NoMatchPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="*" element={<NoMatchPage/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
