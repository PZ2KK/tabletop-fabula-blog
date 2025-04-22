import { cn } from "@/lib/utils";
import PaginationButton from "./PaginationButton";

const Pagination = ({ page, pageLimit, setPage }) => {
  return (
    <div className="flex justify-center mt-6 md:gap-4 gap-2 md:text-lg text-xs">
      <PaginationButton text={"First"} onClick={() => setPage(1)} disabled={page === 1} />
      <PaginationButton text={"Previous"} onClick={() => setPage(page - 1)} disabled={page === 1} className={"md:grid hidden"} />

      {/* {page > 3 && pageLimit > 5 && (
        <button
          className="py-2 px-4 rounded-md cursor-pointer transition-all ease-in-out duration-300 bg-gray-200"
          onClick={() => setPage(1)}
        >
          1
        </button>
      )}

      {page > 4 && pageLimit > 5 && <span className="py-2 px-4">...</span>} */}

      {/* Page Numbers */}
      {Array.from({ length: Math.min(5, pageLimit) }, (_, i) => {
        const startPage = Math.max(1, Math.min(page - 2, pageLimit - 4));
        const pageNumber = startPage + i;
        return (
          pageNumber <= pageLimit && (
            <button
              key={pageNumber}
              className={cn(
                "md:py-0 py-2 px-3 rounded-md cursor-pointer transition-all ease-in-out duration-300",
                page === pageNumber ? "font-bold cursor-default" : "border hover:bg-gray-100"
              )}
              onClick={() => setPage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        );
      })}

      
      {/* {page < pageLimit - 3 && pageLimit > 5 && <span className="py-2 px-4">...</span>}
      {page < pageLimit - 2 && pageLimit > 5 && (
        <button
          className="py-2 px-4 rounded-md cursor-pointer transition-all ease-in-out duration-300 bg-gray-200"
          onClick={() => setPage(pageLimit)}
        >
          {pageLimit}
        </button>
      )} */}
      {console.log(page)}
      <PaginationButton text={"Next"} onClick={() => setPage(page + 1)} disabled={page === pageLimit || pageLimit === 0} className={"md:grid hidden"} />
      <PaginationButton text={"Last"} onClick={() => setPage(pageLimit)} disabled={page === pageLimit || pageLimit === 0} />
    </div>
  );
};

export default Pagination;
