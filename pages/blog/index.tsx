import type { NextPage } from "next";
import Layout from "../../business/container/general/layout/layout";
import Banner from "../../business/container/general/views/productos/banner/banner";
import Blog from "../../business/container/general/views/blog/blog";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="En Skapate Hookah Bar podrás vivir una rumba a otro nivel, un espacio exclusivo, con música crossover, espectáculos de soñar y vivir una experiencia fusionada entre sonrisas, fiesta y mucho sabor que elevarán tus sentidos."
        />
      </Head>
      <Layout>
        <Banner>
          <h1>Blogs</h1>
        </Banner>
        <Blog />
      </Layout>
    </>
  );
};

export default Home;
