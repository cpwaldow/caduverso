import Head from 'next/head';
import Header from '../Components/Header';

export async function getStaticProps() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
  const data = await response.json();
  return { props: { data } };
}

export default function Pokemon({ data }) {
  console.log(data.moves[0].move.name);
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Header />
      <h2>
        {data.name}, {data.id}
      </h2>
      <section>
        {data.types.map((type) => (
          <p key={type.type.name}>{type.type.name}</p>
        ))}
      </section>
      <h3>Moves</h3>
      <ul>
        {data.moves.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
    </>
  );
}
