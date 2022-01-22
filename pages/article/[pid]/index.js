import { useRouter } from "next/router";
import Header from "../../../components/head";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading";
import styles from "../../../styles/Article.module.css";

const Article = () => {
  const router = useRouter();
  const { pid } = router.query;
  const url = "https://marssaljr.vercel.app/article/";
  const { data, error } = pid
    ? useFetch(`${process.env.api_endpoint}/articles/${pid}`)
    : null;

  if (error)
    return (
      <div>
        <Loading />
        <h1>Sorry, article not found ;(</h1>
      </div>
    );
  //console.log(data, pid);
  console.log(data, pid);
  while (!data) {
    return (
      <p>
        <Loading />
      </p>
    );
  }

  return (
    <div className={styles.section}>
      <Header>
        <meta property="og:type" content="article" />
        <meta property="article:author" content="Marçal Junior" />
        <meta property="og:description" content={data.description} />
        <meta property="article:tag" content="Programming, Technology" />
        <meta property="article:published_time" content={data.created_at} />
        <meta property="og:image" content={data.thumbnail} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:url" content={url + data.id} />
      </Header>
      <div className={styles.article}>
        <div className={styles.articleHeader}>
          <h1>{data.title}</h1>
        </div>
        <img
          src={data.thumbnail}
          className={styles.articleThumbnail}
          width="100%"
        />
        <div className={styles.articleBody}>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Article;
