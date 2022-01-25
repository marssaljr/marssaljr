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
            I've 19 years old and live in the city of Pouso Alegre, in the state
            of Minas Gerais, in the country Brazil. I’m a Self-taught Developer,
            which means that I have no degree and learn everything by myself,
            And have much confidence in what I apply to my projects, I speak
            English very well which helps me a lot, and am not a good designer
            but enjoy it. I like to write, not just codes, and enjoy solving
            problems and refactoring old projects.
          </p>
        </div>
      </div>
    </div>
  );
}
