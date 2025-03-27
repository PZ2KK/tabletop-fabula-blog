import {Navbar, HeroSection, Footer} from '@/components/ui/MainSection';
import ArticleSection from '@/components/ui/ArticleSection';

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
