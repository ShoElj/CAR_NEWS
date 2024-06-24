import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import BentoGrid from './components/BentoGrid';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await Axios.get('https://newsapi.org/v2/everything', {
          params: {
            q: 'car OR motorsport OR automobile',
            apiKey: 'ef3aa032d6f1451ab1f1cc03fae75e31',
            pageSize: 16, // Fetch up to 16 articles
          },
        });
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the articles:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching articles: {error.message}</div>;
  }

  return (
    <div>
      <h1>AutoMobile News</h1>
      <BentoGrid articles={articles} />
    </div>
  );
};

export default App;
