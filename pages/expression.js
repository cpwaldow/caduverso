import React, { useState } from 'react';
import Header from '../Components/Header';
import ExpressionsList from './expressionsList';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

export default function Expressions() {
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
      <p className={styles.phrase}>{phrase}</p>
      <button onClick={handlePhrase} className={styles.btn}>
        Gerar expressão
      </button>
    </div>
  );
}
