import styles from "./index.module.css";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <NextLink href="/" passHref>
          <a className={styles.title}>THE PLANETS</a>
        </NextLink>
        <div className={styles.planets}>
          <NextLink href="/mercury" passHref>
            <a className={styles.mercury}>MERCURY</a>
          </NextLink>
          <NextLink href="/venus" passHref>
            <a className={styles.venus}>VENUS</a>
          </NextLink>
          <NextLink href="/earth" passHref>
            <a className={styles.earth}>EARTH</a>
          </NextLink>
          <NextLink href="/mars" passHref>
            <a className={styles.mars}>MARS</a>
          </NextLink>
          <NextLink href="/jupiter" passHref>
            <a className={styles.jupiter}>JUPITER</a>
          </NextLink>
          <NextLink href="/saturn" passHref>
            <a className={styles.saturn}>SATURN</a>
          </NextLink>
          <NextLink href="/uranus" passHref>
            <a className={styles.uranus}>URANUS</a>
          </NextLink>
          <NextLink href="/neptune" passHref>
            <a className={styles.neptune}>NEPTUNE</a>
          </NextLink>
        </div>
        <NextLink href="/" passHref>
          <a className={styles.ham}>
            <img src="img/icon-hamburger.svg" />
          </a>
        </NextLink>
      </div>
    </div>
  );
};

export default Navigation;
