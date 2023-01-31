import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Layout from "../../business/container/general/layout/layout";
import Banner from "../../business/container/general/views/cotizar/banner/banner";
import Cotizar from "../../business/container/general/views/cotizar/cotizar";
import { useEffect, useState } from "react";
import Head from "next/head";

const Home: NextPage = () => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <>
      <Head>
        <meta
          name="description"
          content="En Skapate Hookah Bar podrás vivir una rumba a otro nivel, un espacio exclusivo, con música crossover, espectáculos de soñar y vivir una experiencia fusionada entre sonrisas, fiesta y mucho sabor que elevarán tus sentidos."
        />
      </Head>
      <Layout>
        <Banner title="Confirmar cotización" />
        <Cotizar />
      </Layout>
    </>
  );
};

export default Home;
