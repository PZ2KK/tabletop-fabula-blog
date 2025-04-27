import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ArticleContext = createContext();

export const ArticleProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [status, setStatus] = useState("");
  const [category, setCategory] = useState("Highlight");
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(1);

  
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 700);
    return () => clearTimeout(handler);
  }, [keyword]);

  useEffect(() => {
    fetchData();
  }, [category, page, debouncedKeyword]);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-GB", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get("https://blog-post-project-api.vercel.app/posts", {
        params: {
          category: category === "Highlight" ? undefined : category,
          limit: 6,
          page,
          keyword: debouncedKeyword || undefined, 
        },
      });

      const formattedPosts = response.data.posts.map((post) => ({
        ...post,
        date: formatDate(post.date),
      }));

      setPosts(formattedPosts);
      setPageLimit(response.data.totalPages);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const fetchPostById = async (postId) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(`https://blog-post-project-api.vercel.app/posts/${postId}`);
      return { ...response.data, date: formatDate(response.data.date) };
    } catch (error) {
      console.error(error);
      setError(true);
      return [];
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <ArticleContext.Provider value={{ posts, isLoading, isError, category, setCategory, page, setPage, pageLimit, fetchPostById, keyword, setKeyword, }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => {
  return useContext(ArticleContext);
};
