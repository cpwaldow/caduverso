import Head from 'next/head';
import Header from '../Components/Header';
import PokemonComponent from '../Components/Pokemon';

export async function getStaticProps() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);
  const data = await response.json();
  return { props: { data } };
}

export default function Pokemon({ data }) {
  return (
    <>
      <Head>
        <meta name="description" content="Pokémon" />
        <title>Pokemon</title>
      </Head>
      <Header />
      <PokemonComponent data={data} />
    </>
  );
}
