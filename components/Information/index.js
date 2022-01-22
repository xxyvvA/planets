import styles from "./index.module.css";
import planets from "../../data.json";

const Information = ({ name, description, source, planetView, setPlanetView, planet }) => {
  return (
    <div className={styles.container}>
      <div className={styles.partition}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.source}>
          Source:&nbsp;<a href={source}>Wikipedia</a>&nbsp;&nbsp;&nbsp;
          <a href={source}>
            <img src={"/img/icon-source.svg"} />
          </a>
        </p>
      </div>

      <img
        className={`${styles.planet} ${styles[planet.name.toLowerCase()]}`}
        src={planet.images.planet}
      />
      {planetView === "geology" ? (
        <img className={styles.geology} src={planet.images[planetView]} />
      ) : null}

      <div className={styles.border}>
        <div className={styles.buttons}>
          <input
            type="radio"
            name="interactive"
            id="overview"
            value="overview"
            checked={planetView === "planet"}
            onChange={() => {
              setPlanetView("planet");
            }}
          />
          <label className={styles[planet.name.toLowerCase()]} htmlFor="overview">
            <span className={styles.number}>01</span>OVERVIEW
          </label>

          <input
            type="radio"
            name="interactive"
            id="int-structure"
            value="int-structure"
            checked={planetView === "internal"}
            onChange={() => {
              setPlanetView("internal");
            }}
          />
          <label className={styles[planet.name.toLowerCase()]} htmlFor="int-structure">
            <span className={styles.number}>02</span>
            <span className={styles.word}>INTERNAL</span>&nbsp;STRUCTURE
          </label>

          <input
            type="radio"
            name="interactive"
            id="surface-geo"
            value="surface-geo"
            checked={planetView === "geology"}
            onChange={() => {
              setPlanetView("geology");
            }}
          />
          <label className={styles[planet.name.toLowerCase()]} htmlFor="surface-geo">
            <span className={styles.number}>03</span>
            <span className={styles.word}>SURFACE</span>&nbsp;GEOLOGY
          </label>
        </div>
      </div>
    </div>
  );
};

export default Information;
