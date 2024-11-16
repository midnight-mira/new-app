import React, { useState, useContext } from 'react';
import './card.css';
import { ArticleContext } from '../../ArticleContext';

const Card = ({ article, isSelected, onClick}) => {
  const {
    source = "Unknown Source",
    author = "Unknown Author",
    title = "No Title Available",
    description = "No Description Available",
    urlToImage = "https://via.placeholder.com/150",
    publishedAt = "Unknown Date",
  } = article;

  const [, setSelectedArticle] = useContext(ArticleContext);
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setSelectedArticle(article);
    setIsClicked(!isClicked);
  };

  return (
    <div>
      <div className={isClicked ?  "clicked-container" : "card-container"} onClick={handleClick}>
      <div className="card-picture">
        <img src={urlToImage} alt={title} />
      </div>
      <div className="card-content"> 
        <div className="title">
          {title}
        </div>
        <div className="article-detail"> 
          {author}
          {publishedAt}
        </div>
        <div className="description">
          {description}
        </div>
        <div>
          <button onClick={handleClick}>Read More</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
