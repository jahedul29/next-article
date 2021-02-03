import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";
import styles from "../styles/layout.module.css";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello welcome to next js app</h1>

      <ArticleList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  let posts = {};
  const res = await fetch(`${server}/api/article`);
  const data = await res.json();

  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};

// export const getStaticProps = async () => {
//   let posts = {};
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return {
//     props: {
//       posts: data.slice(0, 10),
//     },
//   };
// };
