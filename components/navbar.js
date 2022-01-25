import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [Menu, setMenu] = useState(false);
  useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.brand}>
            <img src="/logo-mobile.svg" className={styles.logomobile} />
            <img src="/logo.svg" className={styles.logodesktop} />
          </a>
        </Link>
        <div className={styles.menu}>
          <Link href="/blog">
            <a>
              {" "}
              <img src="/dot.svg" className={styles.dot} />
              Blog
            </a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/hire">
            <a>Contact</a>
          </Link>
        </div>
        <button
          id="mobilemenu"
          className={styles.mobileMenu}
          onClick={() => (Menu ? setMenu(false) : setMenu(true))}
        >
          <img src="/menu.svg" className={styles.menuicon} />
        </button>
        {Menu ? (
          <ul className={styles.MobileMenu}>
            <Link href="/blog">
              <li className={styles.list}>Blog</li>
            </Link>
            <Link href="/projects">
              <li className={styles.list}>Projects</li>
            </Link>
            <Link href="/about">
              <li className={styles.list}>About</li>
            </Link>
            <Link href="/hire">
              <li className={styles.list}>Contact</li>
            </Link>
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
