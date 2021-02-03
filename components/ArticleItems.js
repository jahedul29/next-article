import Link from "next/link";
import React from "react";
import articleItemStyle from "../styles/ArticleItem.module.css";

const ArticleItems = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <div className={articleItemStyle.card}>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItems;
