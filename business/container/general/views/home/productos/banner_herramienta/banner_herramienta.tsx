import styles from "./styles.module.css";

export default function Banner_herramienta({content}:any) {
    return (
        <>
            <div className={styles.banner_herramienta}>
                <div className={styles.content}>
                    <h3>{content.bannerTitle}</h3>
                    <a href="/productos/tipo?tipe=tornillos">Ver productos</a>
                </div>
                
                <div className={styles.multimedia}>
                    <img src={content.imgUrl} alt={content.imgAlt}/>
                </div>
            </div>
        </>
    )
}