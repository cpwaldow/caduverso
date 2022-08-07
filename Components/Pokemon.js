import Image from 'next/image';

export default function PokemonComponent({ data }) {
  console.log(data);
  return (
    <>
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
