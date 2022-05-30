import React, { ReactElement } from "react";
import "./article.css";

type ArticleProps = {
  imageUrl: string;
  date: string;
  title: string;
};

const Article = ({ imageUrl, date, title }: ArticleProps): ReactElement => {
  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img src={imageUrl} alt="blog-thumbnail" />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full article</p>
      </div>
    </div>
  );
};

export default Article;
