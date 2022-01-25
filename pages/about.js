import styles from "../styles/About.module.css";
import Header from "../components/head";

export default function About() {
  return (
    <div className="container">
      <Header>
        <title>About</title>
      </Header>
      <div className={styles.about}>
        <h1>About Me</h1>
        <div className={styles.aboutText}>
          <p>
            I've {new Date().getFullYear() - 2003} years old and live in the
            city of Pouso Alegre, in the state of Minas Gerais, in the country
            Brazil. I’m a Self-taught Developer, which means I have no degree
            and learn everything by myself, I have much confidence in what I
            apply in my projects, I speak English well which allows me to learn
            in different paths. I like to write, not only codes, I appreciate
            solving problems, learning new technologies, and refactoring old
            projects.
          </p>
        </div>
      </div>
    </div>
  );
}
