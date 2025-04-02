import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogPost from '@/components/BlogPost';


const PostPage = () => {
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
