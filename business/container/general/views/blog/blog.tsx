import styles from "./styles.module.css"
import Card from "./card/card"

export default function Blog() {
    return (
        <>
            <div className={styles.section}>
                <div className={styles.apoyoGrafico}>
                    <img src="/images/tramado.png" alt=""/>
                </div>
                <div className={styles.cardGeneral}>
                    <Card/>
                </div>
            </div>
        </>
    )
}