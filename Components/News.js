import S from '../styles/NewsComponent.module.css';

export default function NewsComponent({ data }) {
  console.log(data);
  return (
    <>
      <h3>{data.title}</h3>
      <img src={data.urlToImage} className={S.newsImg} />
      <p>{data.description}</p>
      <p>{data.content}</p>
    </>
  );
}
