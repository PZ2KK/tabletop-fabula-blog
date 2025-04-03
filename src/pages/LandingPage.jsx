import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ArticleSection from '@/components/ArticleSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
        <>
            <div className="min-h-screen flex flex-col cabin-font">
                <Navbar />
                <HeroSection />
                <ArticleSection />
                <Footer />
            </div>
        </>
  )};

export default LandingPage;
