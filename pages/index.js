import Head from 'next/head';
import { data } from '../data/data';
import Slider from '../components/Slider';

function Home({ sliderData}) {
  return (
    <div>
      <Head>
        <title>Jutro Medical App</title>
        <meta name="description" content="Recruitment task" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider slides={sliderData}/>
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