import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';
import { useEffect } from "react";


const PostPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
        <>
            <div className="min-h-screen flex flex-col cabin-font">
                <Navbar />
                <BlogPost/>
                <Footer />
            </div>  
        </>
  )};

export default PostPage;
