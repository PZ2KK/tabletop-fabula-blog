import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import BlogCard from "./BlogCard";
import { blogPosts } from "@/data/blogpost";

const ArticleSection = ( ) => {
  const [category, setCategory] = useState("Highlight");
  const categories = ["Highlight", "Book", "Inspiration", "General"];

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
                  {categories.map((target) => (
                    <SelectItem key={target} value={target}>
                      {target}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Desktop Selection */}
            <div className="hidden md:flex gap-2">
              {categories.map((target) => (
                <button
                  key={target}
                  className={`py-2 px-4 rounded-md cursor-pointer transition-all ease-in-out duration-300 ${category === target ? "bg-gray-300 shadow-sm" : "bg-transparent"}`}
                  onClick={() => setCategory(target)}
                >
                  {target}
                </button>
              
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <Input
                placeholder="Search"
                className="bg-white px-4"
              />
            {/* Search Icon */}
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
        </div>
              
            {/* Article */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {blogPosts.map((post) => (
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
      </div>
    </>
  );
};

export default ArticleSection;