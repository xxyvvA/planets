import Head from "../components/Head";
import Navigation from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head title={"homepage"} />
      <div className={styles.container}>
        <Navigation />
      </div>
    </>
  );
}
