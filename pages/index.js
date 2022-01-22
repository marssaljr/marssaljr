import styles from "../styles/Index.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.whoami}>
        <img
          className={styles.personalPhoto}
          src="https://scontent.fppy8-1.fna.fbcdn.net/v/t1.6435-9/67934997_2486080248280863_3208459755454464000_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=gaP_hPaVW3cAX8HMNxF&_nc_ht=scontent.fppy8-1.fna&oh=00_AT9bkcguxtsaws_v-27YBm64JQ-sMN1L8GEc9vmN5d5Fqg&oe=620EAB4C"
          alt="me"
        />
        <div className={styles.whoamitext}>
          <h1>~# whoami</h1>
          <p>
            Hello World, My name is Marçal Junior, and I'm a code writer. I just
            write code since my 10 years old and
          </p>
          <p>
            I create a lot of{" "}
            <Link href="/projects">
              <a className={styles.link}>projects</a>
            </Link>{" "}
            publics and privates usign JavaScript, Python and others programming
            languages.
          </p>
          <p>
            This site is my Personal Portfolio(I think you already notice it)
            and a{" "}
            <Link href="/blog">
              <a className={styles.link}>Blog/Journaling</a>
            </Link>{" "}
            too,{" "}
          </p>
          <p>
            so if you want you can read my texts. I like to write while coding,
            seens like I'm teaching someone
          </p>
          <p>
            or something like that. If you're interesting on my skills, you can
            go to{" "}
            <Link href="/stats">
              <a className={styles.link}>stats</a>
            </Link>{" "}
            tab, or{" "}
            <Link href="/hire">
              <a className={styles.link}>hire-me</a>
            </Link>{" "}
            to send a email and get in touch If you not, I hope u enjoy and
            learn something with it.
          </p>
        </div>
      </div>
    </div>
  );
}
