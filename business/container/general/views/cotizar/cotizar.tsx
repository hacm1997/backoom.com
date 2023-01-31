import styles from "./styles.module.css";
import Formulario from "./formulario/formulario";
import Producto from "./producto/producto";
import { useCookies } from "react-cookie";
import { Head } from "next/document";
export default function Cotizar(props: any) {
  const [cookies, setCookie, removeCookie] = useCookies();
  return (
    <>
      <div className={styles.apoyoGrafico}></div>
      <section className={styles.section}>
        <div className={styles.form}>
          <Formulario products={cookies.products} />
        </div>
        <Producto products={cookies.products} />
      </section>
    </>
  );
}
