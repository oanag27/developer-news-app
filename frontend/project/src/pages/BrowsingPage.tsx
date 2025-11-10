import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

export interface IBrowsingPage {
  title: string;
  url: string;
  source: string;
}

export default function BrowsingPage() {
  const [data, setData] = useState<IBrowsingPage[]>([]);
  const fetchArticlesData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/articles/fetch`
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching articles:", error);
    }
  };
  useEffect(() => {
    fetchArticlesData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container py-5">
        {data.map((article: IBrowsingPage, index) => (
          <div key={index}>
            <h2>{article.title}</h2>
            <a href={article.url}>{article.url}</a>
            <p>{article.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
