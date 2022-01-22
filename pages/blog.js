import useFetch from "../hooks/useFetch";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import Loading from "../components/loading";

export default function Home() {
  const { data, error } = useFetch(process.env.api_endpoint + "/articles");
  if (error) {
    return (
      <>
        <Loading />
        <h1>Error 500</h1>
        <p>Api is offline, or something like that.</p>
      </>
    );
  }
  if (!data) {
    return (
      <div className={styles.container}>
        <Loading />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {data.map((article) => (
        <Link className={styles.articleLink} href={`/article/${article.id}`}>
          <div className={styles.articleId} key={article.id}>
            <img
              src={article.thumbnail}
              class={styles.thumbnail}
              width="100%"
            />
            <div className={styles.description}>
              <h2 className={styles.articleTitle}>{article.title}</h2>
              <div className={styles.categories}>
                {article.categories.map((slug) => (
                  <span className={styles.category}>
                    <strong>#{slug.category}</strong>
                  </span>
                ))}
              </div>

              <p>{article.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
