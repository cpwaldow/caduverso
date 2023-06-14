import React from 'react';
import exercises from '../Components/exercises.json';
import Head from 'next/head';
import Header from '../Components/Header';
import Timer from '../Components/Timer';
import styles from '../styles/Home.module.css';
import gymStyle from '../styles/Gym.module.css';

const gym = () => {
  return (
    <section className={styles.container}>
      <Head>
        <meta name='description' content='exercícios para academia' />
        <title>Caduverso - Academia</title>
      </Head>
      <Header />

      <section className={gymStyle.container}>
        <Timer />
        {exercises.map((element) => (
          <details key={element.weekday} className={gymStyle.card}>
            <summary className={gymStyle.weekDay}>{element.weekday}</summary>
            <h4>{element.muscleGroup}</h4>
            <section className={gymStyle.exercises}>
              {element.exercises.map((exercise) => (
                <React.Fragment key={exercise.exercise}>
                  <h4 className={gymStyle.exerciseName}>{exercise.exercise}</h4>
                  <p>
                    Série: {exercise.series} Repetições: {exercise.repeticoes}
                  </p>
                </React.Fragment>
              ))}
            </section>
          </details>
        ))}
      </section>
    </section>
  );
};

export default gym;
