import React from 'react';
import './BentoGrid.css';

const BentoGrid = ({ articles }) => {
  return (
    <div className="bento-grid">
      {articles.slice(0, 16).map((article, index) => (
        <div key={index} className="bento-item" onClick={() => window.open(article.url, '_blank')}>
          <img src={article.urlToImage} alt={article.title} />
          <div className="bento-details">
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
