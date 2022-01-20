import NextLink from "next/link";
import Head from "../components/Head";
import styles from "../styles/Landing.module.css";
import Navigation from "../components/Navigation";
import planets from "../data.json";

const Landing = () => {
  return (
    <>
      <Head title="Planets" />

      <div className={styles.container}>
        <Navigation />
        <div className={styles.planets}>
          {planets.map((planet) => (
            <NextLink href={`/${planet.name.toLowerCase()}`} passHref key={planet.name}>
              <a className={styles.link}>
                <img
                  src={planet.images.planet}
                  className={styles.images}
                  alt={`${planet.name.toLowerCase()}`}
                />
                &nbsp;&nbsp;
                {planet.name}
              </a>
            </NextLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Landing;
