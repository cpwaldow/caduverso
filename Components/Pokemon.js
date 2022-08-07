import Image from 'next/image';
import S from '../styles/PokemonComponent.module.css';

export default function PokemonComponent({ data }) {
  return (
    <>
      <h2 className={S.name}>
        {data.name}, {data.id}
      </h2>
      <img
        className={S.pokeImg}
        src={data.sprites.front_default}
        loading="lazy"
      />

      <section>
        <p>{data.types.length > 1 ? 'Types: ' : 'Type: '}</p>
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
