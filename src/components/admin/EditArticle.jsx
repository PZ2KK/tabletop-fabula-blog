import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useArticles } from "@/context/ArticleContext";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CiImageOn } from "react-icons/ci";
import { cn } from '@/lib/utils';
import LoadingWrapper from "../ui/LoadingWrapper";
import DeleteModal from "../ui/DeleteModal";

const EditArticle = () => {
  const { postId } = useParams();
  const { fetchPostById } = useArticles();

  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
  const [modalToggle, setModalToggle] = useState(false);

  const categories = ["Highlight", "Book", "Inspiration", "General"];

  const fileInputRef = useRef(null);

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      try {
        const fetchedPost = await fetchPostById(postId);
        if (fetchedPost) {
          setPost(fetchedPost);
          setImageUrl(fetchedPost.image);
        } else {
          setError("Post not found");
        }
      } catch (err) {
        setError("Error fetching post data");
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      getPost();
    }
  }, [postId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

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
      setPost((prevPost) => ({ ...prevPost, image: imageUrl }));
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      const updatedPost = { ...post, date: new Date().toISOString() };

      const response = await fetch(``, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        navigate("/admin/article");
      } else {
        setError("Error updating the post");
      }
    } catch (err) {
      setError("Error updating the post");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    try {
        alert("Deleting the post...");
      } catch (err) {
        setError("Error deleting the post");
      }
  };

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
                <LoadingWrapper />
            </div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="flex-col w-full h-full bg-white">
      {modalToggle && (
        <DeleteModal 
            modalToggle={modalToggle} 
            setModalToggle={setModalToggle} 
            handleDelete={handleDelete}
            postId={postId} 
            postTitle={post.title}
        />
      )}
      {/* Header */}
      <div className="fixed flex justify-between items-center py-6 px-20 bg-white z-10 w-full shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">Edit Article</h1>
        <div className="flex gap-4 w-[45%] pr-60">
          <Button text="Delete Article" style="red" onClick={() => setModalToggle(!modalToggle)} />
          <Button text="Save as draft" style="white" onClick={() => handleSave('draft')} />
          <Button text="Save" style="black" onClick={() => handleSave('published')} />
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
            <div className="pt-2">
              <Button text="Upload thumbnail image" style="white" type="button" onClick={handleUploadClick} />
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
              value={post.category}
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
            <Input disabled value={post.author} className="bg-gray-200 border border-gray-400" />
          </div>

          {/* Title */}
          <label className="text-sm text-gray-500 font-semibold">Title</label>
          <div className="w-1/3 pb-4">
            <Input
              name="title"
              value={post.title}
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
              value={post.description}
              onChange={handleChange}
              placeholder="Description"
              rows={4}
              className="bg-white"
            />
          </div>

          {/* Content */}
          <label className="text-sm text-gray-500 font-semibold">Content</label>
          <div className="w-1/2 pb-12">
            <Textarea
              name="content"
              value={post.content}
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

export default EditArticle;
