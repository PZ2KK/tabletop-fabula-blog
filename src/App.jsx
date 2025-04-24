import './App.css';
import "tailwindcss";
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NoMatchPage from './pages/NoMatchPage';
import PostPage from './pages/PostPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import ArticleManagement from './components/admin/ArticleManagement';
import CategoryManagement from './components/admin/CategoryManagement';
import NotificationManagement from './components/admin/NotificationManagement';
import ProfileManagement from './components/admin/ProfileManagement';
import PasswordManagement from './components/admin/ResetPassword';
import {Toaster} from 'sonner';
import { ArticleProvider } from './context/ArticleContext';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Toaster/>
      <ArticleProvider>
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="*" element={<NoMatchPage/>}/>
            <Route path="/post/:postId" element={<PostPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

            {/* Admin Path */}
            <Route path="/admin" element={<AdminPage/>}>
              <Route index element={<ArticleManagement />} />
              <Route path="article" element={<ArticleManagement />} />
              <Route path="category" element={<CategoryManagement />} />
              <Route path="notification" element={<NotificationManagement />} />
              <Route path="profile" element={<ProfileManagement />} />
              <Route path="resetpassword" element={<PasswordManagement />} />
            </Route>

        </Routes>
      </Router>
      </ArticleProvider>
    </>
  );
};

export default App
