import useFetch from "../hooks/useFetch";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
import Loading from "../components/loading";

export default function Projects() {
  const { data, error } = useFetch(process.env.api_endpoint + "/projects");
  if (error) {
    return (
      <div>
        <Loading />
        <h1>Error 500</h1>
        <p>Api is offline, or something like that.</p>
      </div>
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
    <div className="container">
      {data.map((article) => (
        <Link className={styles.articleLink} href={`/project/${article.id}`}>
          <div className={styles.articleId} key={article.id}>
            <img
              src={article.thumbnail}
              className={styles.thumbnail}
              width="100%"
            />
            <div className={styles.description}>
              <h2 className={styles.articleTitle}>{article.title}</h2>

              <p>{article.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
