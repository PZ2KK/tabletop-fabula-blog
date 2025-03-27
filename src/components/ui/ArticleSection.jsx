import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import BlogCard from "./BlogCard";

const ArticleSection = ( ) => {
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1)
  const [limit, setLimit] = useState(6);
  const [category, setCategory] = useState("Highlight");
  const categories = ["Highlight", "Book", "Inspiration", "General"];

  useEffect(() => {
    getPost()
  }, [category, page])

  const getPost = async() => {
    try {
      setLoading(true);
      setPosts([]);
      setError(false);
      const response = await axios.get("https://blog-post-project-api.vercel.app/posts", {
        params: {
          category: category === "Highlight" ? undefined : category,
          limit,
          page,
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

  const handlePagination = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {/* ArticleSection */}
      <div className="md:mx-0 md:px-[140px] md:py-20 p-10 pt-0 w-full mx-auto">
          <h2 className="md:text-4xl md:mb-6 text-2xl mb-4 font-bold">
          Latest Articles
          </h2>

        {/* Big Box */}
        <div className="md:flex-row md:justify-between md:items-center flex flex-col items-start bg-gray-100 rounded-lg p-4 gap-4">
          
            {/* Mobile Selection */}
            <div className="md:w-auto md:hidden w-full">
              <p className="text-gray-600 mb-2">Category</p>
              <Select value={category} onValueChange={setCategory}>
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
                  className={`py-2 px-4 rounded-md cursor-pointer transition-all ease-in-out duration-300 ${category === targetCategory ? "bg-gray-300 shadow-sm" : "bg-transparent"}`}
                  onClick={() => setCategory(targetCategory)}
                >
                  {targetCategory}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <form className="relative w-full md:w-64">
              <Input
                placeholder="Search"
                className="bg-white px-4"
              />
            {/* Search Icon */}
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </form>
        </div>
              
            {/* Article */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {isLoading && <p className="text-xl">Loading articles...</p>}
              {isError && <p className="text-red-500">Failed to load articles. Please try again.</p>}
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
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={() => handlePagination(page > 1 ? page - 1 : page, )}
                  disabled={page === 1}
                  className="py-2 px-4 bg-gray-300 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>

                <span className="py-2 px-4">Page <span className="font-bold text-lg">{page}</span> </span>

                <button
                  onClick={() => handlePagination(page != pageLimit ? page + 1 : page, )}
                  disabled={page === pageLimit}
                  className="py-2 px-4 bg-gray-300 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
      </div>
    </>
  );
};

export default ArticleSection;