import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import BlogPost from '@/components/ui/BlogPost';


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
