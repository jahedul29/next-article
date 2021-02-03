import React from "react";
import articleListStyle from "../styles/ArticleList.module.css";
import ArticleItems from "./ArticleItems";

const ArticleList = ({ posts }) => {
  return (
    <div className={articleListStyle.grid}>
      {posts.map((post) => (
        <ArticleItems article={post} />
      ))}
    </div>
  );
};

export default ArticleList;
