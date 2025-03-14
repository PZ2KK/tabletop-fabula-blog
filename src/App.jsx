import './App.css';
import "tailwindcss";
import {Navbar, HeroSection, Footer} from './components/ui/LandingPage';
import ArticleSection from './components/ui/ArticleSection';


function App() {
  return (
    <>
      <div className="min-h-screen cabin-font">
        <Navbar />
        <HeroSection />
        <ArticleSection />
        <Footer />
      </div>
    </>
  );
};

export default App
