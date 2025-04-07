import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticlePost from '@/components/ArticlePost';
import { useEffect } from "react";

const PostPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
        <>
            <div className="min-h-screen flex flex-col cabin-font">
                <Navbar />
                <ArticlePost/>
                <Footer />
            </div>  
        </>
  )};

export default PostPage;
