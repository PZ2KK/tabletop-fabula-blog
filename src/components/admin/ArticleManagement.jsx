// import { useState } from 'react';
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import {
//   Pencil,
//   Trash2,
//   Search
// } from 'lucide-react';
// import { useArticles } from "@/context/ArticleContext";


// const Article = ({ id, title, category, status, index }: Article & { index: number }) => {
//   const rowStyle = index % 2 === 0 ? '' : 'bg-gray-50'; 
//     return (
//         <TableRow className={rowStyle}>
//             <TableCell>{title}</TableCell>
//             <TableCell>{category}</TableCell>
//             <TableCell>
//                 <span
//                     className={`px-2 py-1 rounded-md ${status === 'Published'
//                         ? 'bg-green-100 text-green-600'
//                         : 'bg-yellow-100 text-yellow-600'
//                         }`}
//                 >
//                     {status}
//                 </span>
//             </TableCell>
//             <TableCell className="flex justify-end gap-2">
//                 <Button variant="ghost" size="icon">
//                     <Pencil className="h-4 w-4 text-gray-600" />
//                 </Button>
//                 <Button variant="ghost" size="icon">
//                     <Trash2 className="h-4 w-4 text-gray-600" />
//                 </Button>
//             </TableCell>
//         </TableRow>
//     );
// };

// const ArticleManagement = () => {
//   const { posts, category, setCategory, page, setPage, pageLimit, keyword, setKeyword } = useArticles();
//   const categories = ["Highlight", "Book", "Inspiration", "General"];

//   return (
//       <div className="flex-1 p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-semibold text-gray-800">Article management</h1>
//           <Button>+ Create article</Button>
//         </div>

//         <div className="flex gap-4 mb-4">
//           <div className="relative w-64">
//             <Input
//               type="search"
//               placeholder="Search..."
//               className="pl-10" // Reserve space for the icon
//               value={keyword}
//               onChange={(e) => setKeyword(e.target.value)}
//             />
//             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" /> {/* Icon */}
//           </div>
//             <Select onValueChange={setCategory} value={category}>
//                 <SelectTrigger className="w-[180px]">
//                     <SelectValue placeholder="Status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                     <SelectItem value="Published">Published</SelectItem>
//                     <SelectItem value="Draft">Draft</SelectItem>
//                 </SelectContent>
//             </Select>
//             <Select onValueChange={setCategory} value={category}>
//               <SelectTrigger className="w-[180px]">
//                 <SelectValue placeholder="Category" />
//               </SelectTrigger>
//               <SelectContent>
//                 {categories.map((cat) => (
//                     <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//         </div>

//         <div className="border rounded-md">
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                     <TableHead>Article title</TableHead>
//                     <TableHead>Category</TableHead>
//                     <TableHead>Status</TableHead>
//                     <TableHead></TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {posts.map((post, index) => (
//                         <Article key={post.id} {...post} index={index} />
//                     ))}
//                 </TableBody>
//             </Table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ArticleManagement;

