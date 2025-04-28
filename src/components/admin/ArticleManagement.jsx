import Button from "../ui/Button";
import { Input } from "@/components/ui/Input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Pencil, Trash2, Search } from "lucide-react";
import { FaPlus } from "react-icons/fa6";
import { useArticles } from "@/context/ArticleContext";
import LoadingWrapper from "../ui/LoadingWrapper";
import Pagination from "../ui/Pagination";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../ui/DeleteModal";


const ArticleTable = ({
  id,
  title,
  category,
  status,
  index,
  setModalToggle,
  setPostId,
  setPostTitle,
}) => {
  const rowStyle = index % 2 === 0 ? "" : "bg-gray-50";
  const navigate = useNavigate();
  return (
    <TableRow className={rowStyle}>
      <TableCell className="pl-6">{title}</TableCell>
      <TableCell className="pl-6">{category}</TableCell>
      <TableCell className="pl-6">
        
        <div
          className={`flex items-center justify-start gap-1 px-2 py-2 rounded-md ${
            status === "Published"
              ? "text-green-600"
              : "text-yellow-600"
          }`}
        >
          <span className={`h-1 w-1 rounded-full ${
            status === "Published"
              ? "bg-green-600"
              : "bg-yellow-600"
          }`} />
          {status ? status : "Draft"}
        </div>
      </TableCell>
      <TableCell className="align-middle">
        <div className="flex items-center justify-end gap-6 pr-6">
          <Pencil
            className="h-4 w-4 text-gray-600 hover:text-black cursor-pointer"
            onClick={() => navigate(`/admin/edit-article/${id}`)}
          />
          <Trash2
            className="h-4 w-4 text-gray-600 hover:text-black cursor-pointer"
            onClick={() => {
              setPostId(id);
              setPostTitle(title);
              setModalToggle(true);
            }}
          />
        </div>
      </TableCell>
    </TableRow>
  );
};

const ArticleManagement = () => {
  const {
    posts,
    category,
    setCategory,
    status,
    setStatus,
    page,
    setPage,
    pageLimit,
    keyword,
    setKeyword,
    isLoading,
    isError,
  } = useArticles();
  const [modalToggle, setModalToggle] = useState(false);
  const [postId, setPostId] = useState(null);
  const [postTitle, setPostTitle] = useState("");

  const categories = ["Highlight", "Book", "Inspiration", "General"];
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      alert(`Deleting the post ${postId}`);
    } catch (err) {
      alert("Error deleting the post");
      console.error("Error deleting the post", err);
    }
  };

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <div className="flex-col w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center py-6 mx-20">
        <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap ">
          Article management
        </h1>
        <div>
          <Button
              text={<>
                <div className="flex items-center gap-2">
                <FaPlus /> 
                Create article
                </div>
              </>}
              style="black"
              onClick={() => navigate("/admin/create-article")}
          />
        </div>
      </div>

      <hr className="pb-6" />

      {modalToggle && (
        <DeleteModal
          modalToggle={modalToggle}
          setModalToggle={setModalToggle}
          handleDelete={handleDelete}
          postId={postId}
          postTitle={postTitle}
        />
      )}

      {/* Table */}
      <div className="flex justify-between gap-4 mb-4 mx-20">
        <div className="relative w-60">
          <Input
            type="search"
            placeholder="Search..."
            className="pl-10"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>

        <div className="flex">
          <Select onValueChange={setStatus} value={status}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Published">Published</SelectItem>
              <SelectItem value="Draft">Draft</SelectItem>
            </SelectContent>
          </Select>

          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger className="w-[180px] ml-6">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Article */}
      <LoadingWrapper>
        <div className="border rounded-md mx-20 ">
          <Table>
            <TableHeader>
              <TableRow className="shadow-md">
                <TableHead className="pl-6">Article title</TableHead>
                <TableHead className="pl-6">Category</TableHead>
                <TableHead className="pl-6">Status</TableHead>
                <TableHead className="pl-6"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {posts.length === 0 ? (
                <TableRow>
                  <TableCell className="text-center text-xl text-gray-500 py-20">
                    There is no post match the keyword or category. Please try
                    again.
                  </TableCell>
                </TableRow>
              ) : (
                posts.map((post, index) => (
                  <ArticleTable
                    key={post.id}
                    {...post}
                    index={index}
                    setModalToggle={setModalToggle}
                    setPostId={setPostId} 
                    setPostTitle={setPostTitle}
                  />
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </LoadingWrapper>

      <Pagination
        page={page}
        pageLimit={pageLimit}
        setPage={setPage}
        className="mt-4"
      />
    </div>
  );
};

export default ArticleManagement;
