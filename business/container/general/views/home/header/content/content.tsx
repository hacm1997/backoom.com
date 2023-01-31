import styles from "./styles.module.css";
import inicio from "../../../../../../../services/inicio.json"

export default function Content({content}:any) {

    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}>
                    <span>{content.titlespan}</span>
                    <h1>{content.titleh1}</h1>
                </div>
                <p>{content.contentp}</p>
                <div className={styles.buttons}>
                    <a href="#">{content.avideo}</a>
                </div>
            </div>
        </>
    )
}