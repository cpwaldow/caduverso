import Head from 'next/head';
import Header from '../Components/Header';
import Link from 'next/link';

export async function getStaticProps() {
  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0',
  );
  const data = await response.json();

  return { props: { data } };
}

export default function PokemonList({ data }) {
  return (
    <>
      <Head>
        <title>Lista de Pokemons</title>
      </Head>
      <Header />
      <h1>Pokemon</h1>
      <h3>{data.count} pokemons</h3>
      <ul>
        {data.results.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}
