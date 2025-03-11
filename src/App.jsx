import './App.css';
import "tailwindcss";
import Navbar from './componenets/ui/Navbar';
import HeroSection from './componenets/ui/Herosection';

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
