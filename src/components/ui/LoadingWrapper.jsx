import { useArticles } from "@/context/ArticleContext";

const LoadingWrapper = ({ children }) => {
  const { isLoading, isError } = useArticles();

  if (isLoading)
    return (
      <div className="flex flex-col flex-grow items-center justify-center text-xl p-18">
        <div className="spinner mb-5"></div>
        <p>Loading articles...</p>
      </div>
    );

  if (isError)
    return (
      <div className="flex flex-col flex-grow items-center justify-center text-xl text-red-500 p-18">
        <p>Failed to load articles. Please try again.</p>
      </div>
    );

  return children;
};

export default LoadingWrapper;