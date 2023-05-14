import React from 'react';
import exercises from '../Components/exercises.json';
import Head from 'next/head';
import Header from '../Components/Header';
import styles from '../styles/Home.module.css';

const weekDay = [
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
];

const gym = () => {
  console.log(exercises);
  return (
    <section className={styles.container}>
      <Head>
        <meta name='description' content='exercícios para academia' />
        <title>Caduverso - Expressões</title>
      </Head>
      <Header />
      <section>
        {exercises.map((element) => (
          <section key={element.weekday}>
            <h2>{element.weekday}</h2>
            <p>{element.muscleGroup}</p>
            {element.exercises.map((exercise) => (
              <React.Fragment key={exercise.exercise}>
                <h4>{exercise.exercise}</h4>
                <p>
                  Série: {exercise.series} Repetições: {exercise.repeticoes}
                </p>
              </React.Fragment>
            ))}
          </section>
        ))}
      </section>
    </section>
  );
};

export default gym;
