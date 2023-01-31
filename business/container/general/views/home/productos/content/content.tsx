import styles from "./styles.module.css";
import { Cookies } from "react-cookie";
import Link from "next/link";

export default function Content({
  title,
  description,
  index,
}: any) {

  const cookies = new Cookies();
  const setCategoryCookie = () => {
    cookies.set("title", title.split(" ").join("").toLowerCase(), { path: "/" });
  };

  return (
    <>
      <div className={styles.content} key={index}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a onClick={setCategoryCookie} target="_blank">
          <Link href="/productos/tipo">Ver productos</Link>
        </a>
      </div>
    </>
  );
}
