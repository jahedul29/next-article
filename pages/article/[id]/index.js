import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const article = () => {
  const { data: article, error } = useSWR(
    `/api/article/${useRouter().query.id}`,
    fetcher
  );

  if (error) return <div>Loading Failed</div>;
  if (!article) return <div>Loading.....</div>;

  return (
    <div>
      <h5>{article.title}</h5>
      <p>{article.body}</p>

      <br />

      <Link href="/">Go to home</Link>
    </div>
  );
};

// export const getStaticProps = async (context) => {
//   // const { protocol, origin } = absoluteUrl(req, req.headers.host);
//   const origin = process.env.baseUrl;

//   const res = await fetch(`${origin}/api/article/${context.params.id}`);
//   const article = await res.json();
//   console.log("response", article);

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   // const { protocol, origin } = absoluteUrl(req, req.headers.host);
//   const origin = process.env.baseUrl;
//   const res = await fetch(`${origin}/api/article`);
//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export default article;
