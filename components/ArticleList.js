import React from "react";
import articleListStyle from "../styles/ArticleList.module.css";
import ArticleItems from "./ArticleItems";

const ArticleList = ({ articles }) => {
  return (
    <div className={articleListStyle.grid}>
      {articles.map((article) => (
        <ArticleItems article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
