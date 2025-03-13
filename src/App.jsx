import './App.css';
import "tailwindcss";
import Navbar from './components/ui/Navbar';
import HeroSection from './components/ui/Herosection';

function App() {
  return (
    <>
      <div className="min-h-screen cabin-font">
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};

export default App
