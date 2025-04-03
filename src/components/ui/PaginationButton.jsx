import { cn } from "@/lib/utils";

const PaginationButton = ({ text, onClick, disabled, className }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "py-2 px-4 text-white bg-black hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black rounded-md cursor-pointer",
        className
      )}
    >
      {text}
    </button>
  );
  
  export default PaginationButton;