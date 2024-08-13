import Image from "next/image";
import styles from "./page.module.css";
import Register from "./pages/registerPage/page";
import HomePage from "./pages/homePage/page"


export default function Home() {
  return (
    <main className={styles.main}>
      <HomePage />
    </main>
  );
}
