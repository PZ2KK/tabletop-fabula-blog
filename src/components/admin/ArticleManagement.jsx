import Button from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { useArticles } from "@/context/ArticleContext";
import LoadingWrapper from "../ui/LoadingWrapper";
import Pagination from "../ui/Pagination";

const ArticleTable = ({ id, title, category, status, index }) => {
  const rowStyle = index % 2 === 0 ? "" : "bg-gray-50";
  return (
    <TableRow className={rowStyle}>
      <TableCell>{title}</TableCell>
      <TableCell>{category}</TableCell>
      <TableCell>
        <span
          className={`px-2 py-1 rounded-md ${
            status === "Published"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {status ? status : "No Status"}
        </span>
      </TableCell>
      <TableCell className="flex justify-end gap-6">
          <Pencil className="h-4 w-4 text-gray-600 hover:text-black cursor-pointer"/>
          <Trash2 className="h-4 w-4 text-gray-600 hover:text-black cursor-pointer"/>
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
  const categories = ["Highlight", "Book", "Inspiration", "General"];

  return (
    // Header
    <div className="flex-col w-full h-full">
        <div className="flex justify-between items-center py-6 mx-20">
        <h1 className="text-2xl font-semibold text-gray-800 whitespace-nowrap ">
            Article management
        </h1>
        <div>
            <Button text="+ Create article" style="black"/>
        </div>
        </div>

        <hr className="pb-6"/>

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
                {categories.map((target) => (
                <SelectItem key={target} value={target}>
                    {target}
                </SelectItem>
                ))}
            </SelectContent>
            </Select>
            </div>
        </div>
        
        {/* Article */}
        <LoadingWrapper isLoading={isLoading} isError={isError}>
            <div className="border rounded-md mx-20">
            <Table>
                <TableHeader>
                <TableRow>
                    <TableHead>Article title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead></TableHead>
                </TableRow>
                </TableHeader>
                <TableBody>
                {posts.length === 0 ? (
                    <TableRow>
                    <TableCell className="text-center text-xl text-gray-500 py-20">
                        There is no post match the keyword or category. Please try again.
                    </TableCell>
                    </TableRow>
                ) : (
                    posts.map((post, index) => (
                    <ArticleTable key={post.id} {...post} index={index} />
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
