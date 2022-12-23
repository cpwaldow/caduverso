import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const ChangeEuphemism = ({ eufenismo }) => {
  const [phrase, setPhrase] = useState(eufenismo[0]);

  const handlePhrase = () => {
    const randomNumber = Math.floor(Math.random() * 23);

    if (phrase === eufenismo[randomNumber]) {
      return setPhrase(eufenismo[randomNumber + 1]);
    }
    return setPhrase(eufenismo[randomNumber]);
  };
  return (
    <>
      <p className={styles.phrase}>{phrase}</p>
      <button onClick={handlePhrase} className={styles.btn}>
        Gerar expressão
      </button>
    </>
  );
};

export default ChangeEuphemism;
