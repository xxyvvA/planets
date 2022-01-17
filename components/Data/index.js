import styles from "./index.module.css";

const Data = ({ rotation, revolution, radius, temp }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles.name}>ROTATION TIME</p>
        <p className={styles.data}>{rotation}</p>
      </div>

      <div className={styles.content}>
        <p className={styles.name}>REVOLUTION TIME</p>
        <p className={styles.data}>{revolution}</p>
      </div>

      <div className={styles.content}>
        <p className={styles.name}>RADIUS</p>
        <p className={styles.data}>{radius}</p>
      </div>

      <div className={styles.content}>
        <p className={styles.name}>AVERAGE TEMP.</p>
        <p className={styles.data}>{temp}</p>
      </div>
    </div>
  );
};

export default Data;
