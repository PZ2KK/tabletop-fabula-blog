import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ArticleSection from '@/components/ArticleSection';
import Footer from '@/components/Footer';

const LandingPage = () => {
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
