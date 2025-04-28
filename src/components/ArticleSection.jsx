import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import ArticleCard from "./ui/ArticleCard";
import { useArticles } from "@/context/ArticleContext";
import LoadingWrapper from "./ui/LoadingWrapper";
import Pagination from "./ui/Pagination";

const ArticleSection = () => {
  const { posts, category, setCategory, page, setPage, pageLimit, keyword, setKeyword } = useArticles();
  const categories = ["Highlight", "Book", "Inspiration", "General"];
  const articleRef = useRef(null);
  
  useEffect(() => {
    articleRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [page]);

  return (
    <div className="md:mx-0 md:px-[140px] md:py-20 p-10 pt-0 w-full mx-auto">
      <h2 className="md:text-4xl md:mb-6 text-2xl mb-4 font-bold" ref={articleRef}>Latest Articles</h2>

      {/* Category Selection */}
      <div className="md:flex-row md:justify-between md:items-center flex flex-col items-start bg-gray-100 rounded-lg p-4 gap-4">
        {/* Mobile Category */}
        <div className="md:w-auto md:hidden w-full">
          <p className="text-gray-600 mb-2">Category</p>
          <Select value={category} onValueChange={(value) => { setCategory(value); setPage(1); }}>
            <SelectTrigger className="bg-white w-full md:w-auto cursor-pointer">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((targetCategory) => (
                <SelectItem key={targetCategory} value={targetCategory}>{targetCategory}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Desktop Category */}
        <div className="hidden md:flex gap-2">
          {categories.map((targetCategory) => (
            <button
              key={targetCategory}
              className={cn("py-2 px-4 rounded-md cursor-pointer transition-all ease-in-out duration-300", category === targetCategory ? "bg-gray-300 shadow-sm" : "bg-transparent")}
              onClick={() => { setCategory(targetCategory); setPage(1); }}
            >
              {targetCategory}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
        <Input
            placeholder="Search"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setPage(1);
            }}
            className="bg-white px-4 focus:outline-none focus:ring-0"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Articles */}
      <LoadingWrapper>
        {posts.length === 0 ? (
          <p className="text-center text-xl text-gray-500 my-20">
            There is nothing match your keyword or category. Please try again.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {posts.map((post) => (
              <ArticleCard key={post.id} {...post} />
            ))}
          </div>
        )}
      </LoadingWrapper>

      {/* Pagination */}
      <Pagination page={page} pageLimit={pageLimit} setPage={setPage} />
    </div>
  );
};

export default ArticleSection;
