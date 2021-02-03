import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { server } from "../../../config";

const article = ({ article }) => {
  // const { id } = useRouter().query;
  console.log(article);

  return (
    <div>
      <h5>{article.title}</h5>
      <p>{article.body}</p>

      <br />

      <Link href="/">Go to home</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/article/${context.params.id}`);
  const article = await res.json();
  console.log("response", article);

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/article`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default article;
