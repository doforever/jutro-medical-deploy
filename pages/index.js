import Head from 'next/head';
import { data } from '../data/data';

function Home({ sliderData}) {
  return (
    <div>
      <Head>
        <title>Jutro Medical App</title>
        <meta name="description" content="Recruitment task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {sliderData.map(({title}, i) => (
          <div key={i}>{title}</div>
        ))}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      sliderData: data,
    }
  };
}

export default Home;