import { useState, useEffect, useRef} from "react";
import axios from "axios";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/select";
import BlogCard from "../BlogCard";

const ArticleSection = ( ) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  const [posts, setPosts] = useState([]);

  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1)

  const [category, setCategory] = useState("Highlight");
  const categories = ["Highlight", "Book", "Inspiration", "General"];

  const articleRef = useRef(null);

  useEffect(() => {
    fetchData()
  }, [category, page])

  useEffect(() => {
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    scrollToArticle();
  }, [page]);

  const fetchData = async() => {
    setPosts([]);
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://blog-post-project-api.vercel.app/posts", {
        params: {
          category: category === "Highlight" ? undefined : category,
          limit,
          page: page,
        }
      })
      setPosts(response.data.posts);
      setPageLimit(response.data.totalPages)
    } catch(error) {
        console.error(error);
        setError(true);
    } finally {
        setLoading(false);
    }
  };

  const scrollToArticle  = () => {
    articleRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  const paginationButton = (label, page, when) => (
    <button
      onClick={() => {
        setPage(page);
      }}
      disabled={when}
      className="py-2 px-4 bg-gray-300 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );

  return (
    <>
      {/* ArticleSection */}
      <div className="md:mx-0 md:px-[140px] md:py-20 p-10 pt-0 w-full mx-auto">
          <h2 className="md:text-4xl md:mb-6 text-2xl mb-4 font-bold" ref={articleRef}>
          Latest Articles
          </h2>

        {/* Big Box */}
        <div className="md:flex-row md:justify-between md:items-center flex flex-col items-start bg-gray-100 rounded-lg p-4 gap-4">
          
            {/* Mobile Selection */}
            <div className="md:w-auto md:hidden w-full">
              <p className="text-gray-600 mb-2">Category</p>
              <Select 
                value={category}  
                onValueChange={(value) => {
                  setCategory(value);
                  setPage(1);
                }}>
                <SelectTrigger className="bg-white w-full md:w-auto cursor-pointer">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((targetCategory) => (
                    <SelectItem key={targetCategory} value={targetCategory}>
                      {targetCategory}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Desktop Selection */}
            <div className="hidden md:flex gap-2">
              {categories.map((targetCategory) => (
                <button
                  key={targetCategory}
                  className={cn("py-2 px-4 rounded-md cursor-pointer transition-all ease-in-out duration-300", category === targetCategory ? "bg-gray-300 shadow-sm" : "bg-transparent")}
                  onClick={() => {
                    setCategory(targetCategory)
                    setPage(1)}}
                >
                  {targetCategory}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Input
                placeholder="Search"
                className="bg-white px-4 focus:outline-none focus:ring-0"
              />
            {/* Search Icon */}
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
        </div>
              
            {/* Article */}
              {isLoading && 
                <div className="flex flex-col items-center text-xl p-10">
                  <div className="spinner mb-5"></div>
                  <p>Loading articles...</p>
                </div>
              }
              {isError && 
                <div className="flex flex-col items-center text-xl text-red-500">
                  <p>Failed to load articles. Please try again.</p>
                </div>
              }
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  image={post.image}
                  category={post.category}
                  title={post.title}
                  description={post.description}
                  author={post.author}
                  date={post.date}
                  authorImage={post.authorImage}
                />
              ))}
            </div>

            {/* Pagination */}
              <div className="flex justify-center mt-6 md:gap-4 gap-2 md:text-lg text-xs">
                {paginationButton('First', 1, page === 1)}
                {paginationButton('Previous', page > 1 ? page - 1 : page, page === 1)}
                  <span className="flex items-center px-2 md:text-lg text-xs">
                  Page 
                  <span className="font-bold ml-2">{page}</span> 
                </span>
                {paginationButton('Next', page !== pageLimit ? page + 1 : page, page === pageLimit)}
                {paginationButton('Last', pageLimit, page === pageLimit)}
              </div>

        </div>
    </>
  );
};

export default ArticleSection;