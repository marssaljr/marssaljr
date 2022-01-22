import useFetch from "../hooks/useFetch";
import styles from "../styles/Projects.module.css";
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
    <div className={styles.container}>
      <div className={styles.project}>
        {data.map((project) => (
          <Link className={styles.projectLink} href={`/project/${project.id}`}>
            <div className={styles.projectId} key={project.id}>
              <img
                src={project.thumbnail}
                className={styles.thumbnail}
                width="100%"
              />
              <div className={styles.description}>
                <h2 className={styles.projectTitle}>{project.title}</h2>

                <p>{project.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
