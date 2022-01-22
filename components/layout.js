import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./head";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Navbar />
      <div className={styles.main}>{children}</div>
      <Footer />
    </>
  );
}
