import styles from "../styles/Stats.module.css";
import Header from "../components/head";

export default function Stats() {
  return (
    <>
      <Header>
        <script src="/fontawesome.js" />
      </Header>
      <div className={styles.stats}>
        <div className={styles.personalInfo}>
          <div className={styles.about}>
            <h1>
              # Personal Info <i className="fab fa-jedi-order"></i>
            </h1>
            <div>
              <p>
                <i className="fas fa-baby-carriage"></i>{" "}
                <strong className={styles.strong}>Age:</strong> Day *{" "}
                {new Date().getFullYear()} <i className="fas fa-equals"></i>{" "}
                {(2003 - new Date().getFullYear()) * -1}
              </p>
              <p>
                <i className="fas fa-laptop-house"></i>{" "}
                <strong className={styles.strong}> Lives in:</strong> Pouso
                Alegre &#183; Minas Gerais &#183; Brazil
              </p>
              <p>
                <i className="fas fa-language"></i>
                <strong className={styles.strong}>Languages:</strong> Portuguese
                Native &#183; English Advanced
              </p>
              <p>
                <i className="fas fa-heartbeat"></i>{" "}
                <strong className={styles.strong}>Loves:</strong> Code &#183;
                Series &#183; (Li/U)nix &#183; Learn &#183; Writing &#183; Books
              </p>
              <p>
                <i className="fas fa-thumbs-down"></i>{" "}
                <strong className={styles.strong}>
                  Dislike but put up with:{" "}
                </strong>
                Design &#183; Meeting
              </p>
            </div>
          </div>
          <div className={styles.techs}>
            <h1>
              # Technical Stuffs <i className="fas fa-laptop-code"></i>
            </h1>
            <div>
              <i className="fas fa-code"></i>{" "}
              <strong className={styles.strong}>Most used Languagens:</strong>
              {"  "}
              <i className="fab fa-js-square"></i> JavaScript &#183;{" "}
              <i className="fab fa-python"></i> Python &#183;{" "}
              <i className="devicon-typescript-plain"></i> TypeScript &#183;{" "}
              <i className="devicon-html5-plain"></i> HTML &#183;{" "}
              <i className="devicon-css3-plain"></i> CSS &#183;{" "}
              <i className="devicon-bash-plain"></i> ShellScript
            </div>
            <div>
              <i className="fas fa-pencil-ruler"></i>{" "}
              <strong className={styles.strong}>Front-end:</strong>{" "}
              <i className="fab fa-react"></i> React.JS &#183; Next.JS &#183;{" "}
              <i className="fab fa-vuejs"></i> Vue.JS
            </div>
            <div>
              <i className="fas fa-server"></i>{" "}
              <strong className={styles.strong}>Back-end:</strong>{" "}
              <i className="fab fa-node-js"></i> Node &#183;{" "}
              <i className="fab fa-python"></i> Django &#183;{" "}
              <i className="devicon-flask-original"></i>Flask
            </div>
            <div>
              <i className="fas fa-cloud"></i>{" "}
              <strong className={styles.strong}>Clouds:</strong>{" "}
              <i className="fab fa-github-alt"></i> Github &#183;{" "}
              <i className="devicon-heroku-original"></i> Heroku &#183;{" "}
              <i className="devicon-docker-plain"></i> Docker
            </div>
            <div>
              <i className="fas fa-tools"></i>{" "}
              <strong className={styles.strong}>Work Tools:</strong>{" "}
              <i className="devicon-git-plain"></i> Git &#183;{" "}
              <i className="devicon-vim-plain"></i> Vim &#183;{" "}
              <i className="devicon-linux-plain"></i> Linux &#183;{" "}
              <i className="devicon-figma-plain"></i> Figma
            </div>
            <div>
              <i className="fas fa-database"></i>{" "}
              <strong className={styles.strong}>DB &#183; Cache: </strong>{" "}
              <i className="devicon-mysql-plain"></i> MySQL &#183;{" "}
              <i className="devicon-mongodb-plain"></i>Mongo(NoSQL) &#183;{" "}
              <i className="devicon-postgresql-plain"></i> PostgreSQL &#183;{" "}
              <i className="devicon-redis-plain"></i> Redis{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
