import React, { useState } from 'react';
import Header from './Components/header/Header';
import ExpressionsList from './expressionsList';
import styles from '../styles/Home.module.css';

export default function Expressions() {
  const arr = ExpressionsList();
  const [phrase, setPhrase] = useState(arr[0]);

  const handlePhrase = () => {
    const randomNumber = Math.floor(Math.random() * 23);

    if (phrase === arr[randomNumber]) {
      return setPhrase(arr[randomNumber + 1]);
    }
    return setPhrase(arr[randomNumber]);
  };

  return (
    <div className={styles.container}>
      <Header />
      <p className={styles.phrase}>{phrase}</p>
      <button onClick={handlePhrase} className={styles.btn}>
        Gerar expressão
      </button>
    </div>
  );
}
