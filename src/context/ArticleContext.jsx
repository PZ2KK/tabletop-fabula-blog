import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [category, setCategory] = useState("Highlight");
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);

  useEffect(() => {
    fetchData();
  }, [category, page]);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://blog-post-project-api.vercel.app/posts", {
        params: {
          category: category === "Highlight" ? undefined : category,
          limit: 6,
          page,
        },
      });
      setPosts(response.data.posts);
      setPageLimit(response.data.totalPages);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ArticleContext.Provider value={{ posts, isLoading, isError, category, setCategory, page, setPage, pageLimit }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => {
  return useContext(ArticleContext);
};
