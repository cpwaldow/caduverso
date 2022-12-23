import React, { useState } from 'react';
import Header from '../Components/Header';
import ExpressionsList from './expressionsList';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import ChangeEuphemism from '../Components/ChangeEuphemism';

export default function Euphemism() {
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
          <blockquote cite="https://pt.wikipedia.org/wiki/Eufemismo">
            <p className={styles['eufemismo-txt']}>
              Eufemismo é uma figura de linguagem que emprega termos mais
              agradáveis para suavizar uma expressão. Expressões populares têm
              um caráter cômico, o que pode atender em parte a do eufemismo.
              Situações de grande impacto, como a morte, beira o grotesco e a
              função dessa figura de linguagem se perde
            </p>
          </blockquote>
        </article>
      </section>
      <ChangeEuphemism eufenismo={ExpressionsList()} />
    </div>
  );
}
