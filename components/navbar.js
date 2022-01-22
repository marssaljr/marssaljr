import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [Menu, setMenu] = useState(false);
  useEffect(() => {
    setMenu(false);
  }, []);
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.brand}>
          <img src="/logo-mobile.svg" className={styles.logomobile} />
          <img src="/logo.svg" className={styles.logodesktop} />
        </a>
      </Link>
      <div className={styles.menu}>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/stats">
          <a>Stats</a>
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
          <Link href="/stats">
            <li className={styles.list}>Stats</li>
          </Link>
          <Link href="/hire">
            <li className={styles.list}>Contact</li>
          </Link>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}