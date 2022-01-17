import styles from "./index.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>THE PLANETS</h1>
        <div className={styles.planets}>
          <a href="#">MERCURY</a>
          <a href="#">VENUS</a>
          <a href="#">EARTH</a>
          <a href="#">MARS</a>
          <a href="#">JUPITER</a>
          <a href="#">SATURN</a>
          <a href="#">URANUS</a>
          <a href="#">NEPTUNE</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
