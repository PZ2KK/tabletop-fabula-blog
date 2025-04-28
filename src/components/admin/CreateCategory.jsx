import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const CreateCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      alert(`Category "${categoryName}" created successfully.`);
      navigate("/admin/category");
    } catch (err) {
      alert("Error saving category");
      console.error("Error creating category", err);
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center py-6 mx-20">
        <h1 className="text-2xl font-semibold text-gray-800">
            Create Category
        </h1>
        <div>
            <Button
            text="Create category"
            style="black"
            onClick={handleSubmit}
            />
        </div>
      </div>

      <hr className="pb-6" />

      {/* Form */}
      <div className="w-full max-w-60 mx-20 ">
        <label className="block font-semibold text-gray-600 mb-2">
          Category name
        </label>
        <Input
          id="categoryName"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Enter category name"
        />
      </div>
    </div>
  );
};

export default CreateCategory;
