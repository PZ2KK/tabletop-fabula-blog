import Navbar from '@/components/ui/Navbar';
import HeroSection from '@/components/ui/HeroSection';
import ArticleSection from '@/components/ui/ArticleSection';
import Footer from '@/components/ui/Footer';

const LandingPage = () => {
  return (
        <>
            <div className="min-h-screen cabin-font">
                <Navbar />
                <HeroSection />
                <ArticleSection />
                <Footer />
            </div>
        </>
  )};

export default LandingPage;
