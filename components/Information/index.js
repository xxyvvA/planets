import styles from "./index.module.css";

const Information = ({ name, description, source, planetView, setPlanetView }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <p className={styles.source}>
        Source:&nbsp;<a href={source}>Wikipedia</a>&nbsp;&nbsp;&nbsp;
        <a href={source}>
          <img src={"/img/icon-source.svg"} />
        </a>
      </p>
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
        <label htmlFor="overview">
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
        <label htmlFor="int-structure">
          <span className={styles.number}>02</span>INTERNAL STRUCTURE
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
        <label htmlFor="surface-geo">
          <span className={styles.number}>03</span>SURFACE GEOLOGY
        </label>
      </div>
    </div>
  );
};

export default Information;
