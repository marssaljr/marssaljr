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
            Hello World, My name is Marçal Junior, and I'm a code writer. I have just written code since my ten years old and
I create a lot of <Link href="/projects"><a className={styles.link}>projects</a></Link> public and privates using JavaScript, Python, and others programming languages.
This site is my Personal Portfolio(I think you already notice it) and a <Link href="/blog"><a className={styles.link}>Blog/Journaling</a></Link> too,
so if you want you can read my texts. I like to write while coding, seems like I'm teaching someone
or something like that. If you're interested in my skills, you can go to the <Link href="/stats"><a className={styles.link}>stats</a></Link> tab, or <Link href="/hire"><a className={styles.link}>hire me</a></Link> to send an email and get in touch If you are not, I hope u enjoy and learn something with it.
          </p>
        </div>
      </div>
    </div>
  );
}
