import './App.css';
import "tailwindcss";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NoMatchPage from './pages/NoMatchPage';
import PostPage from './pages/PostPage';
import AuthPage from './pages/AuthPage';
import {Toaster} from 'sonner';
import { ArticleProvider } from './context/ArticleContext';


function App() {
  return (
    <>
      <Toaster/>
      <ArticleProvider>
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<NoMatchPage/>}/>
            <Route path="/post/:postId" element={<PostPage/>}/>
            <Route path="/signup" element={<AuthPage/>}/>
            <Route path="/login" element={<AuthPage/>}/>
        </Routes>
      </Router>
      </ArticleProvider>
    </>
  );
};

export default App
