import { useRouter } from "next/router";
import styles from "../../../styles/Project.module.css";
//import useSWR from "swr";
import useFetch from "../../../hooks/useFetch";
import Loading from "../../../components/loading";
import Header from "../../../components/head";

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;
  const url = "https://marssaljr.vercel.app/project/";
  const { data, error } = pid
    ? useFetch(`${process.env.api_endpoint}/projects/${pid}`)
    : 1;
  if (error)
    return (
      <div>
        <Loading />
        <h1>Sorry, project not found ;(</h1>
      </div>
    );
  //console.log(data, pid);
  while (!data) {
    return <Loading />;
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
      <div className={styles.project}>
        <div className={styles.projectHeader}>
          <h1>{data.title}</h1>
        </div>
        <img
          src={data.thumbnail}
          className={styles.projectThumbnail}
          width="100%"
        />
        <div className={styles.projectBody}>
          <p>{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
