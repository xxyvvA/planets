import { useState } from "react";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";
import Information from "../components/Information/index";
import Data from "../components/Data";
import planets from "../data.json";

export default function Home() {
  const [planetView, setPlanetView] = useState("planet");
  const planet = planets[4];
  return (
    <>
      <Head title={planet.name} />
      <div className={styles.container}>
        <Navigation />
        <div className={styles.information}>
          {planetView === "geology" ? (
            <div className={styles.abomination}>
              <img className={styles.planet} src={planet.images.planet} alt="Jupiter" />
              <img
                className={styles.geology}
                src={planet.images[planetView]}
                alt="geological view of Jupiter"
              />
            </div>
          ) : (
            <img className={styles.planet} src={planet.images[planetView]} alt="Jupiter" />
          )}
          <Information
            name={planet.name}
            planet={planets[4]}
            description={planet[planetView].content}
            source={planet[planetView].source}
            planetView={planetView}
            setPlanetView={setPlanetView}
          />
        </div>
        <div className={styles.data}>
          <Data
            rotation={planet.rotation}
            revolution={planet.revolution}
            radius={planet.radius}
            temp={planet.temperature}
          />
        </div>
      </div>
    </>
  );
}
