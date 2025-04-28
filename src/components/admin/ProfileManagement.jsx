import axios from 'axios';
import Button from '../ui/Button';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import { CiImageOn } from "react-icons/ci";
import { cn } from '@/lib/utils';

const ProfileManagement = () => {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    bio: '',
    profilePicture: imageUrl,
  });

  // Handle change for form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input for profile picture
  const handleUploadClick = () => {
    fileInputRef.current?.click();  
  };

  // Handle file input for profile picture
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
        profilePicture: imageUrl,
      }));
    }
  };

  // Handle form submit
  const handleSubmit = async () => {
    console.log("Profile data:", formData);

    try {
      const response = await axios.post('/api/profile', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert("Profile updated successfully!");
      } else {
        alert("Error updating profile.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="flex-col w-full h-full bg-white">
      {/* Header */}
      <div className="flex justify-between items-center py-6 px-20 bg-white z-10 w-full shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">
          Profile
        </h1>
        <div>
          <Button text="Save" style="black" onClick={handleSubmit} />
        </div>
      </div>

      <hr className="pb-6" />

      {/* Form */}
      <div className="flex flex-col mx-20">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Profile Picture */}
          <label className="text-sm text-gray-500 font-semibold">Profile Picture</label>
          <div className="flex flex-row items-center gap-6 pr-24 pb-4 pt-2">
            <div
                className={cn(
                'border-gray-300 border-2 border-dashed rounded-full w-24 h-24 flex items-center justify-center overflow-hidden',
                {
                    'border-solid border-1 border-black': imageUrl,
                }
                )}
            >
                {imageUrl ? (
                <img src={imageUrl} alt="Profile Picture" className="object-cover w-full h-full" />
                ) : (
                <div className="text-gray-400 text-3xl">
                    <CiImageOn />
                </div>
                )}
            </div>
            <div className="pt-2 w-1/5">
              <Button text="Upload profile picture" style="white" type="button" onClick={handleUploadClick} />
            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUrlChange}
              style={{ display: "none" }}
            />
          </div>

          <hr className="pb-2 w-1/4" />

          {/* Name */}
          <label className="text-sm text-gray-500 font-semibold">Name</label>
          <div className="w-1/4 pb-4">
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-white"
            />
          </div>

          {/* Username */}
          <label className="text-sm text-gray-500 font-semibold">Username</label>
          <div className="w-1/4 pb-4">
            <Input
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="bg-white"
            />
          </div>

          {/* Email */}
          <label className="text-sm text-gray-500 font-semibold">Email</label>
          <div className="w-1/4 pb-4">
            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-white"
            />
          </div>

          {/* Bio */}
          <label className="text-sm text-gray-500 font-semibold">Bio (max 120 letters) </label>
          <div className="flex w-1/3 h-40  pb-4">
            <Textarea
              name="bio "
              value={formData.bio}
              onChange={handleChange}
              placeholder="Tell us about yourself"
              rows={4}
              className="bg-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileManagement;
