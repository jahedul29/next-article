import Head from "next/head";
import ArticleList from "../components/ArticleList";
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
  const origin = process.env.baseUrl;

  const res = await fetch(`${origin}/api/article`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
