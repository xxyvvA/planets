import styles from "./index.module.css";
import NextLink from "next/link";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>THE PLANETS</h1>
        <div className={styles.planets}>
          <NextLink href="/" passHref>
            <a>MERCURY</a>
          </NextLink>
          <NextLink href="/venus" passHref>
            <a>VENUS</a>
          </NextLink>
          <NextLink href="/earth" passHref>
            <a>EARTH</a>
          </NextLink>
          <NextLink href="/mars" passHref>
            <a>MARS</a>
          </NextLink>
          <NextLink href="/jupiter" passHref>
            <a>JUPITER</a>
          </NextLink>
          <NextLink href="/saturn" passHref>
            <a>SATURN</a>
          </NextLink>
          <NextLink href="/uranus" passHref>
            <a>URANUS</a>
          </NextLink>
          <NextLink href="/neptune" passHref>
            <a>NEPTUNE</a>
          </NextLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
