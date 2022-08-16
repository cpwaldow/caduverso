import Image from 'next/image';
import S from '../styles/PokemonComponent.module.css';

export default function PokemonComponent({ data }) {
  return (
    <>
      <h2 className={S.name}>
        {data.name}, {data.id}
      </h2>
      <Image
        src={data.sprites.front_default}
        loading="lazy"
        alt={data.name}
        width={200}
        height={200}
      />

      <section className={S.container}>
        <p>{data.types.length > 1 ? 'Types: ' : 'Type: '}</p>
        {data.types.map((type) => (
          <p key={type.type.name} className={S.type}>
            {type.type.name}
          </p>
        ))}
      </section>
      <h3>Abilities</h3>
      <ul className={S['abilities-list']}>
        {data.abilities.map((item) => (
          <li key={item.ability.name} className={S['abilities-item']}>
            {item.ability.name}
          </li>
        ))}
      </ul>
      <h3>Stats</h3>
      <ul className={S['stats-list']}>
        {data.stats.map((item) => (
          <li key={item.stat.name}>
            {item.stat.name}: {item.base_stat}
          </li>
        ))}
      </ul>
    </>
  );
}
