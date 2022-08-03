import Header from '../Components/Header';
import styles from '../styles/Home.module.css';
import fundStyle from '../styles/Fundamentos.module.css';
import Head from 'next/head';
import Photo from '../Components/Photo';

import CaduAgiota from '../image/cadu-agiota.jpeg';
import Caique1 from '../image/caique.png';
import Caique2 from '../image/caique2.png';
import Caique3 from '../image/caique3.png';
import FundoT23 from '../image/fundo-t23.png';
import renan from '../image/renan.png';
import renan2 from '../image/renan2.png';
import renan3 from '../image/renan3.png';
import renan4 from '../image/renan4.png';
import sincero from '../image/sincero.png';
import tiago1 from '../image/tiago1.png';
import tiago2 from '../image/tiago2.png';
import tiago3 from '../image/tiago3.png';
import vitor from '../image/vitor.png';
import vitor2 from '../image/vitor2.png';
import vitor3 from '../image/vitor3.png';

export default function fundamentos() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Acervo Fundamentos</title>
        <meta name="description" content="Acervo fundamentos" />
      </Head>
      <Header />
      <h1>Acervo fundamentos</h1>
      <section className={fundStyle.row}>
        <Photo props={{ image: { CaduAgiota }, name: 'CaduAgiota' }} />
        <Photo props={{ image: { Caique1 }, name: 'Caique1' }} />
        <Photo props={{ image: { Caique2 }, name: 'Caique2' }} />
        <Photo props={{ image: { Caique3 }, name: 'Caique3' }} />
        <Photo props={{ image: { FundoT23 }, name: 'FundoT23' }} />
        <Photo props={{ image: { renan }, name: 'renan' }} />
        <Photo props={{ image: { renan2 }, name: 'renan2' }} />
        <Photo props={{ image: { renan3 }, name: 'renan3' }} />
        <Photo props={{ image: { renan4 }, name: 'renan4' }} />
        <Photo props={{ image: { sincero }, name: 'sincero' }} />
        <Photo props={{ image: { tiago1 }, name: 'tiago1' }} />
        <Photo props={{ image: { tiago2 }, name: 'tiago2' }} />
        <Photo props={{ image: { tiago3 }, name: 'tiago3' }} />
        <Photo props={{ image: { vitor }, name: 'vitor' }} />
        <Photo props={{ image: { vitor2 }, name: 'vitor2' }} />
        <Photo props={{ image: { vitor3 }, name: 'vitor3' }} />
      </section>
    </div>
  );
}
