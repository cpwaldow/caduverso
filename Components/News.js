import S from '../styles/NewsComponent.module.css';

export default function NewsComponent({ data }) {
  console.log(data);
  return (
    <section className={S.container}>
      <img src={data.urlToImage} className={S.newsImg} alt={data.title} />
      <section className={S.content}>
        <h3 className={S.text}>{data.title}</h3>
        <p className={S.text}>{data.description}</p>
      </section>
    </section>
  );
}
