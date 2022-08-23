import Head from 'next/head';
import Header from '../Components/Header';
import Image from 'next/image';
import Link from 'next/link';

import mypic from '../image/profile.jpeg';
import sinal from '../image/sinal.jpeg';

import styles from '../styles/Home.module.css';
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
        <section className={`${S.container} ${S.first_section}`}>
          <section>
            <h1 className={S.name}>Oi, eu sou o Cadu!</h1>
            <p className={S.job}>Desenvolvedor Front-end e Instrutor</p>
            <Link href="https://www.linkedin.com/in/carlos-waldow/">
              <a target="_blank" className={`${S.btn} ${S.linkedin_color}`}>
                Linkedin
              </a>
            </Link>
          </section>
          <Image
            src={mypic}
            width={300}
            height={300}
            alt="Cadu"
            className={S.img}
          />
        </section>
        <section className={`${S.container} ${S.second_section}`}>
          <Image
            src={sinal}
            width={300}
            height={300}
            alt="sinal"
            className={S.img_sinal}
          />
          <aside className={S.about_me}>
            <h3 className={S.about_me_title}>Sobre Mim</h3>
            <p className={S.about_me_content}>
              Sou formado em Publicidade e Propaganda e apaixonado por
              tecnologia, já trabalhei como Quality Assurance, Desenvolvedor
              Front-end e atualmente sou Instrutor de Tecnologia!
            </p>
            <Link href="https://github.com/cpwaldow">
              <a target="_blank" className={`${S.btn} ${S.github_color}`}>
                Github
              </a>
            </Link>
          </aside>
        </section>
      </main>
    </div>
  );
}
