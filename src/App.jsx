import './App.css';
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import {Navbar, HeroSection, Footer} from './components/ui/MainSection';
import LandingPage from './pages/LandingPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
