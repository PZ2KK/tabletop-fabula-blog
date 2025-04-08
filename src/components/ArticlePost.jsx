import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Smile, Link as LinkIcon, Facebook, Twitter, Linkedin } from 'lucide-react';
import Button from './ui/Button';
import LoginModal from './ui/LoginModal';
import { toast } from 'sonner'
import { cn } from '@/lib/utils';
import { useArticles } from '@/context/ArticleContext';
import LoadingWrapper from './ui/LoadingWrapper';
import ReactMarkdown from 'react-markdown';

const ArticlePost = () => {
  const { postId } = useParams();
  const {fetchPostById} = useArticles();
  const [post, setPost] = useState("");
  const [modalToggle, setModalToggle] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [likesCount, setLikesCount] = useState(321);
  const [hasLiked, setHasLiked] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadPost = async() => {
      try {
      const response = await fetchPostById(postId);
      if (!response || Object.keys(response).length === 0) {
        navigate("*")
      }
      setPost(response);
    } catch(error){
      console.error(error)
      
    }}
    loadPost();
  }, []);

  const handleSend = () => {
    if (!isLogin) {
      setModalToggle(!modalToggle);
    } else {

    }
  };

  const handleLike = () => {
    if (!isLogin) {
      setModalToggle(!modalToggle);
    } else {
      if (!hasLiked) {
        setLikesCount(likesCount + 1);
      } else {
        setLikesCount(likesCount - 1);
      }
      setHasLiked(!hasLiked);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied!", {
      richColors: true,
      description: 'This article has been copied to your clipboard',
    });
  };

  return (
    <LoadingWrapper>
      <div className="flex flex-col md:px-[140px] md:mx-60 mx-0 py-8 md:pt-36 pt-18 px-6">
        {/* Login Modal */}
        {modalToggle && <LoginModal modalToggle={modalToggle} setModalToggle={setModalToggle} />}

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img 
            src={post.image}
            alt={post.title}
            className="w-full md:h-150 object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Box */}
          <div className="md:w-2/3">
            {/* Category and Date */}
            <div className="mb-4">
              <span className="bg-green-200 rounded-full px-3 py-2 text-sm font-semibold text-green-600 mr-2">{post.category}</span>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-6">{post.title}</h1>
            
            
            {/* Content */}
            <div className="markdown mb-6">
               <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
            
            {/* Author Section Mobile*/}
            <div className="md:hidden grid mb-12">
              <div className="sticky top-36 bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={post.author} 
                    alt={post.author} 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <h3 className="font-bold text-lg">{post.author}</h3>
                </div>
                <div className="text-gray-700 whitespace-pre-line">
                  {post.author}
                </div>
              </div>
            </div>
            
            {/* Interaction Buttons */}
            <div className="flex flex-wrap justify-between gap-4 mb-12 px-6 py-4 bg-gray-100 md:rounded-xl rounded-none md:shadow-xl shadow-none md:-mx-0 -mx-6">
              {/* Left Box */}
              <button 
                onClick={handleLike}
                className="flex justify-center items-center px-9 py-2 md:w-auto w-full rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <Smile className={cn(`h-5 w-5 mr-2 ${hasLiked ? 'text-white fill-yellow-500' : 'text-gray-700'}`)} />
                <span>{likesCount}</span>
              </button>
              
              {/* Right Box */}
              <div className="flex flex-row gap-3">
                {/* CopyLink */}
                <button 
                  onClick={handleCopyLink}
                  className="flex items-center md:px-8 px-6 py-2 rounded-full bg-white hover:bg-gray-100 border border-gray-300 transition-colors cursor-pointer"
                >
                  <LinkIcon className="h-5 w-5 text-gray-700 mr-2" />
                  <span>Copy link</span>
                </button>
                
                {/* Facebook */}
                <a 
                  href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 rounded-full bg-[#1877F2] hover:bg-[#165EBD] transition-colors cursor-pointer"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>

                {/* LinkedIn */}
                <a 
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 rounded-full bg-[#0077B5] hover:bg-[#006A97] transition-colors cursor-pointer"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>

                {/* Twitter */}
                <a 
                  href={`https://twitter.com/intent/tweet?url=${window.location.href}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-3 rounded-full bg-[#55ACEE] hover:bg-[#4D99D3] transition-colors cursor-pointer"
                >
                  <Twitter className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            
            {/* Comments Section */}
            <div className="mb-8">
              <h2 className="text-lg text-gray-600">
                Comment
              </h2>
              {/* Comment Form */}
              <div className="flex flex-col md:items-end items-starts">
                <textarea 
                  placeholder="What are your thoughts?"
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-4 py-3 text-gray-600 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-200 focus:outline-none resize-y"
                  rows={4}
                />
                <div className="flex md:w-50 w-30 mt-2">
                  <Button 
                    text="Send" 
                    style="black" 
                    onClick={handleSend}
                  />
                </div>
              </div>

              {/* Existing Comments */}
              {/* {comments.map((comment) => (
                <div key={comment.id} className="border-b border-gray-200 py-6">
                  <div className="flex items-center mb-2">
                    <img 
                      src={comment.avatar} 
                      alt={comment.name} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-medium">{comment.name}</h4>
                      <p className="text-gray-500 text-sm">{comment.date}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{comment.content}</p>
                </div>
              ))} */}
            </div>
          </div>
          
          {/* Right Box */}
          <div className="md:w-1/3 md:block hidden">
            {/* Author Section Desktop*/}
            <div className="sticky top-36 bg-gray-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <img 
                  src={post.author} 
                  alt={post.author} 
                  className="w-12 h-12 rounded-full mr-3"
                />
                <h3 className="font-bold text-lg">{post.author}</h3>
              </div>
              <div className="text-gray-700 whitespace-pre-line">
                {post.author}
              </div>
            </div>
          </div>
        </div>
      </div>
    </LoadingWrapper>
  );
};

export default ArticlePost;