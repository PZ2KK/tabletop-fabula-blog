import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticlePost from '@/components/ArticlePost';

const PostPage = () => {
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
