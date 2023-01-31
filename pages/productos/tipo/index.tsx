import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import common from "../../../services/common.json";
import styles from "./styles.module.css";
import Layout from "../../../business/container/general/layout/layout";
import Banner from "../../../business/container/general/views/productos/banner/banner";
import Tipo from "../../../business/container/general/views/productos/tipo/tipo";
import products from "../../../services/productos.json";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

function Home() {
  const router = useRouter();
  const [cookies, setCookie, removeCookie] = useCookies();
  const [productos, setProductos] = useState([products]);
  const [defineType, setDefineType] = useState("");
  const [showChild, setShowChild] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [closedCart, setClosedCart] = useState(true);

  const endOffset = itemOffset + 8;

  const navbar = common.navbar;
  const apiProductos: any = products;
  const typeVerify = cookies.title || "";
  const {
    query: { tipe },
  } = router;

  const style1 = {
    color:
      router.asPath === navbar.productos.types.tornillos ? "#ffffff" : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style2 = {
    color:
      router.asPath === navbar.productos.types.tuercas ? "#ffffff" : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style3 = {
    color:
      router.asPath === navbar.productos.types.arandelas ? "#ffffff" : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style4 = {
    color:
      router.asPath === navbar.productos.types.industrialliviana
        ? "#ffffff"
        : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style5 = {
    color:
      router.asPath === navbar.productos.types.varillas ? "#ffffff" : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style6 = {
    color:
      router.asPath === navbar.productos.types.bristol ? "#ffffff" : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style7 = {
    color:
      router.asPath === navbar.productos.types.aceroinoxidable
        ? "#ffffff"
        : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style8 = {
    color:
      router.asPath === navbar.productos.types.anclajes ? "#ffffff" : "black",
    fontSize: "14px",
    cursor: "pointer",
  };
  const style9 = {
    color:
      router.asPath === navbar.productos.types.consumibles
        ? "#ffffff"
        : "black",
    fontSize: "14px",
    cursor: "pointer",
  };

  useEffect(() => {
    if (tipe) {
      // @ts-ignore
      setDefineType(tipe);
    } else {
      setDefineType(typeVerify);
    }

    switch (defineType) {
      case "tornillos":
        setProductos(apiProductos.tornillos.items);
        break;
      case "tuercas":
        setProductos(apiProductos.tuercas.items);
        break;
      case "arandelas":
        setProductos(apiProductos.arandelas.items);
        break;
      case "tornilleriaindustrialliviana":
        setProductos(apiProductos.tornilleriaindustrialliviana.items);
        break;
      case "varillas":
        setProductos(apiProductos.varillas.items);
        break;
      case "bristol":
        setProductos(apiProductos.bristol.items);
        break;
      case "aceroinoxidable":
        setProductos(apiProductos.aceroinoxidable.items);
        break;
      case "anclajes":
        setProductos(apiProductos.anclajes.items);
        break;
      case "consumibles":
        setProductos(apiProductos.consumibles.items);
        break;
    }

    setShowChild(true);
  });

  if (!showChild) {
    return null;
  }
  const cardPerPage = 8;
  const PagesVisited = itemOffset * cardPerPage;
  let currentItems = productos.slice(PagesVisited, PagesVisited + cardPerPage);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="En Skapate Hookah Bar podrás vivir una rumba a otro nivel, un espacio exclusivo, con música crossover, espectáculos de soñar y vivir una experiencia fusionada entre sonrisas, fiesta y mucho sabor que elevarán tus sentidos."
        />
      </Head>
      <Layout setClosedCart={setClosedCart}>
        <Banner>
          <h1>Tornillos industriales</h1>
          <nav className={styles.nav}>
            <Link href={navbar.productos.types.tornillos}>
              <p
                style={style1}
                className={
                  router.pathname == navbar.productos.types.tornillos
                    ? "active"
                    : "non-active"
                }
              >
                Tornillos
              </p>
            </Link>
            <Link href={navbar.productos.types.tuercas}>
              <p
                style={style2}
                className={
                  router.pathname == navbar.productos.types.tuercas
                    ? "active"
                    : "non-active"
                }
              >
                Tuercas
              </p>
            </Link>
            <Link href={navbar.productos.types.arandelas}>
              <p
                style={style3}
                className={
                  router.pathname == navbar.productos.types.arandelas
                    ? "active"
                    : "non-active"
                }
              >
                Arandelas
              </p>
            </Link>
            <Link href={navbar.productos.types.industrialliviana}>
              <p
                style={style4}
                className={
                  router.pathname == navbar.productos.types.industrialliviana
                    ? "active"
                    : "non-active"
                }
              >
                Tornillería industrial liviana
              </p>
            </Link>
            <Link href={navbar.productos.types.varillas}>
              <p
                style={style5}
                className={
                  router.pathname == navbar.productos.types.varillas
                    ? "active"
                    : "non-active"
                }
              >
                Varillas
              </p>
            </Link>
            <Link href={navbar.productos.types.bristol}>
              <p
                style={style6}
                className={
                  router.pathname == navbar.productos.types.bristol
                    ? "active"
                    : "non-active"
                }
              >
                Bistrol
              </p>
            </Link>
            <Link href={navbar.productos.types.aceroinoxidable}>
              <p
                style={style7}
                className={
                  router.pathname == navbar.productos.types.aceroinoxidable
                    ? "active"
                    : "non-active"
                }
              >
                Acero inoxidable
              </p>
            </Link>
            <Link href={navbar.productos.types.anclajes}>
              <p
                style={style8}
                className={
                  router.pathname == navbar.productos.types.anclajes
                    ? "active"
                    : "non-active"
                }
              >
                Anclajes
              </p>
            </Link>
            <Link href={navbar.productos.types.consumibles}>
              <p
                style={style9}
                className={
                  router.pathname == navbar.productos.types.consumibles
                    ? "active"
                    : "non-active"
                }
              >
                Consumibles
              </p>
            </Link>
          </nav>
        </Banner>
        <Tipo
          closedCart={closedCart}
          setClosedCart={setClosedCart}
          itemOffset={itemOffset}
          itemsPerPage={cardPerPage}
          setItemOffset={setItemOffset}
          currentItems={currentItems}
          productos={productos}
        />
      </Layout>
    </>
  );
}

export default Home;
