import styles from "../styles/Index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <div className={styles.objects}>
        <img className={styles.personalPhotoi} src="/pic.svg" alt="me" />
        <div className={styles.text}>
          <div className={styles.textIntro}>
            <h1>Marçal Junior</h1>
            <p>Full Stack Web Developer</p>
          </div>
          <p className={styles.textHistory}>
            I'm a hobbyist Web Developer who study development since 10 years
            old. I like to write texts and docs so on this site, you can check
            for it. I have a solid understanding of HTML, CSS, JS, Python,
            TypeScript, Git, Docker... I am currently expanding my skillset by
            studying Django, Node.Js, React.Js, Next.Js along with SQL, NoSQL,
            and Tests. I believe that with my current experience I would be an
            excellent choice for Junior Level/Mid-level developer.
          </p>
        </div>
      </div>
    </div>
  );
}
