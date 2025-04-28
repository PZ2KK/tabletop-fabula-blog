import axios from 'axios';
import Button from '../ui/Button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState, useRef } from "react";
import { CiImageOn } from "react-icons/ci";
import { cn } from '@/lib/utils';

const CreateArticle = () => {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    image: imageUrl,
    category: '',
    author: 'Thompson P.',
    description: '',
    content: '',
    status: 'draft',
  });

  const categories = ["Highlight", "Book", "Inspiration", "General"];

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input for imageUrl
  const handleUploadClick = () => {
    fileInputRef.current?.click();  
  };

  // Handle file input for imageUrl
   const handleImageUrlChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const maxSizeInMB = 2;
      const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  
      if (file.size > maxSizeInBytes) {
        alert(`File size should not exceed ${maxSizeInMB} MB`);
        return;
      }
  
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
  
      setFormData((prevData) => ({
        ...prevData,
        image: imageUrl,
      }));
    }
  };

  // Handle form submit
  const handleSubmit = async (status) => {
    const dataToSubmit = { ...formData, status };
    console.log("Form data:", dataToSubmit);
  
    try {
      const response = await axios.post('/api/articles', dataToSubmit, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        alert("Article created successfully!");
      } else {
        alert("Error creating article.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };
  
  const handleSaveAsDraft = () => {
    handleSubmit('draft');
  };
  
  const handleSaveAndPublish = () => {
    handleSubmit('published');
  };

  return (
    <div className="flex-col w-full h-full bg-white">
      {/* Header */}
      <div className="fixed flex justify-between items-center py-6 px-20 bg-white z-10 w-full shadow-sm ">
        <h1 className="text-2xl font-semibold text-gray-800 ">
          Create article
        </h1>
        <div className="flex gap-4 w-[40%] pr-60">
            <Button text="Save as draft" style="white" onClick={handleSaveAsDraft} />
            <Button text="Save and publish" style="black" onClick={handleSaveAndPublish} />
        </div>
      </div>

      <hr className="pb-6" />

      {/* Form */}
      <div className="flex flex-col mx-20 pt-24">
        <form onSubmit={(e) => e.preventDefault()}>
            {/* Image */}
            <div className="flex flex-col w-1/3 gap-2 pr-24 pb-4">
                <label className="text-sm text-gray-500 font-semibold">Thumbnail image</label>
                <div
                  className={cn(
                    'border-gray-300 border-2 border-dashed rounded-md w-full h-48 flex items-center justify-center overflow-hidden',
                    {
                      'border-solid border-1 border-black ': imageUrl,
                    }
                  )}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="Thumbnail preview" className="object-cover w-full h-full" />
                  ) : (
                    <div className="text-gray-400 text-3xl">
                      <CiImageOn />
                    </div>
                  )}
                </div>
                <div className='pt-2'>
                <Button text="Upload thumbnail image" style="white" type="button" onClick={handleUploadClick}/>
                </div>

                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageUrlChange}
                  style={{ display: "none" }}
                />
            </div>

            {/* Category */}
            <label className="text-sm text-gray-500 font-semibold">Category</label>
            <div className="pb-4">
                <Select
                 name="category"
                 value={formData.category}
                 onValueChange={(value) => handleChange({ target: { name: 'category', value } })}
                 >
                    <SelectTrigger className="bg-white cursor-pointer w-60">
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
            <div className="w-60 pb-4">
                <Input
                disabled
                value={formData.author}
                className="bg-gray-200 border border-gray-400"
                />
            </div>

            {/* Title */}
            <label className="text-sm text-gray-500 font-semibold">Title</label>
            <div className="w-1/3 pb-4">
                <Input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Article title"
                className="bg-white"
                />
            </div>

            {/* Description */}
            <label className="text-sm text-gray-500 font-semibold">Description (max 120 letters)</label>
            <div className="w-1/2 pb-4">
                <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="description"
                rows={4}
                className="bg-white"
                />
            </div>

            {/* Content */}
            <label className="text-sm text-gray-500 font-semibold">Content</label>
            <div className="w-1/2 pb-12">
                <Textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                placeholder="Content"
                rows={10}
                className="bg-white h-100"
                />
            </div>
          </form>
      </div>
    </div>
  );
};

export default CreateArticle;
