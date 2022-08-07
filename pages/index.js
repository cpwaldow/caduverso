import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Image from 'next/image';
import mypic from '../image/profile.jpeg';

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
        <h1>Bem-vindos ao Caduverso</h1>
        <Image src={mypic} width="144" height={144} loading="lazy" alt="Cadu" />
      </main>
    </div>
  );
}
