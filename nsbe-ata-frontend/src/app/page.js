import Image from "next/image";
import styles from "./page.module.css";
import Register from "./pages/registerPage/page";


export default function Home() {
  return (
    <main className={styles.main}>
    <Register />
    </main>
  );
}
