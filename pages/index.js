import styles from "../styles/Index.module.css";

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
            old. I have a solid familiarity of Development procedure and
            Security... I am nowadays growing my skillset by studying Node,
            Next, along with Django, and Tests. I believe that with my current
            experience I would be an excellent choice for Junior Level/Mid-level
            developer.
          </p>
        </div>
      </div>
    </div>
  );
}
