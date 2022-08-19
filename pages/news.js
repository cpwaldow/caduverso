// key 2ab25364a39b41fea2a4211ff10ba685
// GET https://newsapi.org/v2/everything?q=Apple&from=2022-08-19&sortBy=popularity&apiKey=2ab25364a39b41fea2a4211ff10ba685

import Head from 'next/head';
import Header from '../Components/Header';
import NewsComponent from '../Components/News';

export async function getStaticProps() {
  const response = await fetch(
    'https://newsapi.org/v2/top-headlines?country=br&apiKey=2ab25364a39b41fea2a4211ff10ba685',
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
      <NewsComponent data={data} />
    </>
  );
}
