import Button from "../ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";

const DeleteCategoryModal = ({ modalToggle, setModalToggle, handleDelete, postId, postTitle }) => {
  return (
    <div className="flex items-center justify-center w-screen fixed inset-0 bg-black/60 p-0 z-99">
      <div className="flex flex-col items-center bg-white rounded-xl py-12 w-full max-w-md gap-4 relative">
        <span
          className="absolute top-2 right-3 text-3xl cursor-pointer text-black hover:text-gray-300"
          onClick={() => setModalToggle(!modalToggle)}
        >
          &times;
        </span>
        <h2 className="flex flex-col items-center text-4xl text-red-500 text-center font-bold gap-6">
          <TbAlertOctagonFilled size="60" />
          Delete category
        </h2>
        <p className="text-gray-500 drop-shadow-lg">
          Are you sure you want to delete this category?
        </p>
        <p className="font-bold px-12 text-center">
          "{postTitle}"
        </p>
        <div className="flex justify-between w-full px-18 gap-6">
          <Button text="Cancel" style="white" onClick={() => setModalToggle(!modalToggle)} />
          <Button text="Delete" style="red" onClick={() => handleDelete(postId)} />
        </div>
      </div>
    </div>
  );
};

const CategoryTable = ({ id, name, index, setModalToggle, setCategoryId, setCategoryName }) => {
  const rowStyle = index % 2 === 0 ? "" : "bg-gray-50";
  const navigate = useNavigate();

  return (
    <TableRow className={rowStyle}>
      <TableCell className="pl-6 py-4">{name}</TableCell>
      <TableCell className="align-middle">
        <div className="flex items-center justify-end gap-6 pr-6">
          <Pencil
            className="h-4 w-4 text-gray-600 hover:text-black cursor-pointer"
            onClick={() => navigate(`/admin/edit-category/${id}`)}
          />
          <Trash2
            className="h-4 w-4 text-gray-600 hover:text-black cursor-pointer"
            onClick={() => {
              setCategoryId(id);
              setCategoryName(name);
              setModalToggle(true);
            }}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

const CategoryManagement = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState("");

  const [categories, setCategories] = useState([
    { id: 1, name: "Highlight" },
    { id: 2, name: "Book" },
    { id: 3, name: "Inspiration" },
    { id: 4, name: "General" },
  ]);

  const navigate = useNavigate();

  const handleDelete = async (categoryId) => {
    try {
      alert(`Deleting category ${categoryId}`);
    } catch (err) {
      alert("Error deleting category");
      console.error("Error deleting category", err);
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center py-6 mx-20">
        <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
          Category Management
        </h1>
        <div>
        <Button
              text={<>
                <div className="flex items-center gap-2">
                <FaPlus /> 
                Create category
                </div>
              </>}
              style="black"
              onClick={() => navigate("/admin/create-category")}
          />
        </div>
      </div>

      <hr className="pb-6" />

      {/* Modal */}
      {modalToggle && (
        <DeleteCategoryModal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          handleDelete={handleDelete}
          postId={categoryId}
          postTitle={categoryName}
        />
      )}

      {/* Table */}
      <div className="border rounded-md mx-20">
        <Table>
          <TableHeader>
            <TableRow className="shadow-md">
              <TableHead className="pl-6">Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length === 0 ? (
              <TableRow>
                <TableCell className="text-center text-xl text-gray-500 py-20" colSpan={2}>
                  No categories found.
                </TableCell>
              </TableRow>
            ) : (
              categories.map((category, index) => (
                <CategoryTable
                  key={category.id}
                  {...category}
                  index={index}
                  setModalToggle={setModalToggle}
                  setCategoryId={setCategoryId}
                  setCategoryName={setCategoryName}
                />
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CategoryManagement;
