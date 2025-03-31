import './App.css';
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NoMatchPage from './pages/NoMatchPage';
import PostPage from './pages/PostPage';
import {Toaster} from 'sonner';


function App() {
  return (
    <>
      <Toaster richColors/>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="*" element={<NoMatchPage/>}/>
          <Route path="/post/:postId" element={<PostPage/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App
