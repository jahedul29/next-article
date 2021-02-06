import Head from "next/head";
import ArticleList from "../components/ArticleList";
import styles from "../styles/layout.module.css";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/article", fetcher);
  if (error) return <div>Data Loading Failed</div>;
  if (!data) return <div>Data Loading....</div>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello welcome to next js app</h1>

      <ArticleList articles={data} />
    </div>
  );
}

// export const getStaticProps = async () => {
//   const articles = await fetcher(`/api/article`);
//   return {
//     props: {
//       articles,
//     },
//   };
// };
