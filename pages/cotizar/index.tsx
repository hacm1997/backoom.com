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
          content="En Backoom."
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
