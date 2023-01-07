import React from "react";
import Article from "./Article";

const ArticleList = ({ articles, action }) => {
  return (
    <div className="">
      {Object.values(articles).map((article) => (
        <Article key={article.id} article={article} action={action} />
      ))}
    </div>
  );
};

export default ArticleList;
