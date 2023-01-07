import React from "react";

const style = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: " #aaa",
    borderBottomSize: 1,
    marginBottom: 10,
  },
  title: { fontWeight: "bold" },
  date: {
    fontSize: "0.85rem",
    colo: "#888",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: { paddingLeft: 20 },
};

const dispalyDate = (dateString) => {
  return new Date(dateString).toDateString();
};
const ArticleItem = ({ article, action }) => {
  const author = action(article.authorId);
  return (
    <div style={style.article}>
      <h3 style={style.title}>{article.title}</h3>
      <h4 style={style.date}>{dispalyDate(article.date)}</h4>
      <div style={style.author}>
        <a href={author.website}>
          <h4>
            {author.firstName} - {author.lastName}
          </h4>
        </a>
      </div>
      <p style={style.body}>{article.body}</p>
    </div>
  );
};

export default ArticleItem;
