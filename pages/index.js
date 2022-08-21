import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../Components/Header';
import Image from 'next/image';
import Link from 'next/link';
import mypic from '../image/profile.jpeg';
import S from '../styles/Index.module.css';

// Referencia: https://br.pinterest.com/pin/334040497372786387/
export default function Home() {
  return (
    <div>
      <section className={styles.container}>
        <Head>
          <title>Caduverso</title>
          <meta name="description" content="Bem-vindos ao Caduverso" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
      </section>
      <main>
        <section className={S.container}>
          <section>
            <h1 className={S.name}>Oi, eu sou o Cadu!</h1>
            <p className={S.job}>Desenvolvedor Front-end e Instrutor</p>
            <Link href="https://www.linkedin.com/in/carlos-waldow/">
              <a target="_blank" className={S.linkedin}>
                Linkedin
              </a>
            </Link>
          </section>
          <Image
            src={mypic}
            width={350}
            height={350}
            alt="Cadu"
            className={S.img}
          />
        </section>
      </main>
    </div>
  );
}
