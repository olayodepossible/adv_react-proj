import React from "react";

const ArticleItem = ({ article, author }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <h4>{article.date}</h4>
      <div>
        <a href={author.website}>
          <h4>
            {author.firstName} - {author.lastName}
          </h4>
        </a>
      </div>
      <p>{article.body}</p>
    </div>
  );
};

export default ArticleItem;
