const AuthButton = ({ text, type }) => {
  const baseStyle =
    "font-bold p-3 px-10 w-full rounded-full cursor-pointer transition duration-300";
  const styles = {
    login:  "text-black bg-white border border-black hover:bg-gray-200",
    signup: "text-white bg-[#02695A] hover:bg-[#69C5C0]",
  }
  return <button className={`${baseStyle} ${styles[type]}`}>{text}</button>;
};

export default AuthButton;