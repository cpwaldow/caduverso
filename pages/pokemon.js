import Head from 'next/head';
import Header from '../Components/Header';
import Image from 'next/image';

export async function getStaticProps() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/25`);
  const data = await response.json();
  return { props: { data } };
}

export default function Pokemon({ data }) {
  console.log(data.sprites.front_default);
  return (
    <>
      <Head>
        <title>Pokemon</title>
      </Head>
      <Header />
      <h2>
        {data.name}, {data.id}
      </h2>
      <Image src={data.sprites.front_default} width="100px" height="100px" />
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
