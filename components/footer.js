import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <ul className={styles.socials}>
          <Link href="https://linkedin.com/in/marssaljr" target="_blank">
            <li>
              <a target="_blank">
                <i className="devicon-linkedin-plain"></i>
              </a>
            </li>
          </Link>
          <Link href="https://github.com/marssaljr" target="_blank">
            <li>
              <a target="_blank">
                <i className="devicon-github-original"></i>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
