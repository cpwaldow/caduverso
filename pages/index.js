import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import S from '../styles/Index.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Caduverso</title>
        <meta name="description" content="Bem-vindos ao Caduverso" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className={S.background_container}>
          <h2 className={S.title}>Carlos Eduardo</h2>
        </section>
      </main>
    </div>
  );
}
