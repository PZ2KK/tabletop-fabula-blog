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

const ArticleSection = ({ title = "Latest Articles" }) => {
  const [category, setCategory] = useState("Highlight");
  const categories = ["Highlight", "Book", "Inspiration", "General"];

  return (
    <>
    {/* ArticleSection */}
    <div className="md:mx-0 md:px-[140px] md:py-20 p-10 pt-0 w-full mx-auto">
        <h2 className="md:text-4xl md:mb-6 mb-4 text-2xl font-bold">
        {title}
        </h2>

      {/* Big Box */}
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center bg-gray-100 rounded-lg p-4 gap-4">
        
          {/* Mobile Selection */}
          <div className="w-full md:w-auto md:hidden">
            <p className="text-gray-600 mb-2">Category</p>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-white w-full md:w-auto">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((book) => (
                  <SelectItem key={book} value={book}>
                    {book}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Selection */}
          <div className="hidden md:flex gap-2">
            {categories.map((book) => (
              <button
                key={book}
                className={`py-2 px-4 rounded-md transition-all ease-in-out duration-300 ${category === book ? "bg-gray-300 shadow-sm" : "bg-transparent"}`}
                onClick={() => setCategory(book)}
              >
                {book}
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
    </div>
    </>
  );
};

export default ArticleSection;