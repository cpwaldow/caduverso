import Head from 'next/head';
import Header from '../Components/Header';
import NewsComponent from '../Components/News';
import S from '../styles/News.module.css';

export async function getStaticProps() {
  const apiKey = process.env.GOOGLE_KEY;
  /* const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=br&apiKey=2ab25364a39b41fea2a4211ff10ba685',
  ); */
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`,
  );
  const data = await response.json();
  return { props: { data } };
}

export default function Googlenews({ data }) {
  return (
    <>
      <Head>
        <meta name="description" content="News" />
        <title>Notícias</title>
      </Head>
      <Header />
      <h1>Principais notícias</h1>
      <section className={S.container}>
        {data.articles.map((item) => (
          <NewsComponent data={item} key={item.publishedAt} />
        ))}
      </section>
    </>
  );
}
