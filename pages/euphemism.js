import React, { useState } from 'react';
import Header from '../Components/Header';
import ExpressionsList from './expressionsList';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Euphemism() {
  const arrayPhrase = ExpressionsList();
  const [phrase, setPhrase] = useState(arrayPhrase[0]);

  const handlePhrase = () => {
    const randomNumber = Math.floor(Math.random() * 23);

    if (phrase === arrayPhrase[randomNumber]) {
      return setPhrase(arrayPhrase[randomNumber + 1]);
    }
    return setPhrase(arrayPhrase[randomNumber]);
  };

  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="Expressões para guerreiros que são bem determinados"
        />
        <title>Caduverso - Expressões</title>
      </Head>
      <Header />
      <section>
        <article>
          <h2 className={styles.eufemismo}>Eufemismo</h2>
          <blockquote cite='https://pt.wikipedia.org/wiki/Eufemismo'>
            <p className={styles['eufemismo-txt']}>Eufemismo é uma figura de linguagem que emprega termos mais agradáveis para suavizar uma expressão. Expressões populares têm um caráter cômico, o que pode atender em parte a do eufemismo. Situações de grande impacto, como a morte, beira o grotesco e a função dessa figura de linguagem se perde</p>
          </blockquote>
        </article>
      </section>
      <p className={styles.phrase}>{phrase}</p>
      <button onClick={handlePhrase} className={styles.btn}>
        Gerar expressão
      </button>
    </div>
  );
}
