import React, { useState } from 'react';
import styles from '../styles/Home.module.css';

const ChangeEuphemism = ({ eufenismo }) => {
  const [index, setIndex] = useState(0);
  const [phrase, setPhrase] = useState(eufenismo[index]);
  const handlePhrase = () => {
    if (index > eufenismo.length - 1) {
      setIndex(1);
      return setPhrase(eufenismo[0]);
    }
    setIndex(index + 1);
    return setPhrase(eufenismo[index]);
  };
  return (
    <section className={styles['eufemismo-container']}>
      <p className={styles.phrase}>{phrase}</p>
      <button onClick={handlePhrase} className={styles.btn}>
        Próximo Eufemismo
      </button>
    </section>
  );
};

export default ChangeEuphemism;
