import Head from "next/head";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        <h1>Index page</h1>
      </main>
    </>
  );
}
