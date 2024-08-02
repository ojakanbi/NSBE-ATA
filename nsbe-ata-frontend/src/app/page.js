import Image from "next/image";
import styles from "./page.module.css";
import Register from "./components/Register/register";


export default function Home() {
  return (
    <main className={styles.main}>
    <Register />
    </main>
  );
}
