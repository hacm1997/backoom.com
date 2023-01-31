import styles from "./styles.module.css";
import Card_producto from "./card_producto/card_producto";
import { useCookies } from "react-cookie";
import Head from "next/head";
export default function Producto(props: any) {
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <>
      <Head>
        <meta
          name="description"
          content="En Skapate Hookah Bar podrás vivir una rumba a otro nivel, un espacio exclusivo, con música crossover, espectáculos de soñar y vivir una experiencia fusionada entre sonrisas, fiesta y mucho sabor que elevarán tus sentidos."
        />
      </Head>
      <div className={styles.productos}>
        <div className={styles.content}>
          <h3>Productos</h3>
        </div>
        <div className={styles.general_productos}>
          <Card_producto products={props.products} />
          {/*<Card_producto/>
                    <Card_producto/>
                    <Card_producto/>
                    <Card_producto/>
                    <Card_producto/>*/}
        </div>
      </div>
    </>
  );
}
