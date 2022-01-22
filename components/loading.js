import styles from "../styles/Loading.module.css";

export default function loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        <div className={styles.ldsRipple}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
