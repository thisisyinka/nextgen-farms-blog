import Head from 'next/head';
import Nav from '../components/nav';
import Header from '../components/header/Header';
import Articles from '../components/blog/Articles';
import Footer from '../components/footer/Footer';
import { getAPI } from '../lib/api';

const Home = ({ articles, categories }) => {
  return (
    <>
      <Head>
        <title>NextGen Farms Blog</title>
        <meta name='description' content='NextGen Farms Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Nav />
        <Header />
        <Articles articles={articles} categories={categories} />
        <Footer />
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const articlesResponse = await getAPI('/articles?populate=*');
  const categoriesResponse = await getAPI('/categories');
  return {
    props: {
      articles: articlesResponse.data,
      categories: categoriesResponse.data,
    },
  };
}
