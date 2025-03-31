import { cn } from "@/lib/utils";

const Button = ({ text, type, onClick }) => {
  const baseStyle =
    "font-bold p-2 px-8 w-full rounded-full cursor-pointer transition duration-300";
  const styles = {
    white:  "text-black bg-white border border-black hover:bg-gray-200",
    black: "text-white bg-black hover:bg-gray-700",
  }
  return (
    <button 
      className={cn(baseStyle, styles[type])} 
      onClick={onClick}
    >
      {text}
    </button>
)};

export default Button;