import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { CiImageOn } from "react-icons/ci";

const CreateArticle = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const categories = ["Highlight", "Book", "Inspiration", "General"];

  return (
    <div className="flex-col w-full h-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center py-6 mx-20">
        <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
          Create article
        </h1>
        <div className="flex gap-4 w-1/3">
          <Button text="Save as draft" style="white" />
          <Button text="Save and publish" style="black" />
        </div>
      </div>

      <hr className="pb-6" />

      {/* Form */}
      <div className="flex flex-col gap-2 mx-20">
        {/* Upload */}
        <div className="flex flex-col gap-4 w-1/3 pr-24 pb-4">
            <label className="text-sm text-gray-500 font-semibold">Thumbnail image</label>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-md w-full h-48 flex items-center justify-center">
                <div className="text-gray-400 text-3xl">
                    <CiImageOn />
                </div>
            </div>
            <div>
            <Button text="Upload thumbnail image" style="white" />
            </div>
        </div>

        {/* Category */}
        <label className="text-sm text-gray-500 font-semibold">Category</label>
        <div className="w-60 pb-4">
          <Select>
            <SelectTrigger className="bg-white cursor-pointer">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category} className="cursor-pointer">
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Author name */}
        <label className="text-sm text-gray-500 font-semibold">Author name</label>
        <div className="w-60 pb-4 ">
          <Input disabled value="Thompson P." className="bg-gray-200 border border-gray-400"/>
        </div>

        {/* Title */}
        <label className="text-sm text-gray-500 font-semibold">Title</label>
        <div className="w-full pb-4">
          <Input placeholder="Article title" className="bg-white"/>
        </div>

        {/* Introduction */}
        <label className="text-sm text-gray-500 font-semibold">Introduction (max 120 letters)</label>
        <div className="w-full">
          <Textarea placeholder="Introduction" rows={4} className="bg-white"/>
        </div>

        {/* Content */}
        <label className="text-sm text-gray-500 font-semibold">Content</label>
        <div className="w-full pb-12">
          <Textarea placeholder="Content" rows={10} className="bg-white h-30"/>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
