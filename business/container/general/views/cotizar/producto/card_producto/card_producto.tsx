import styles from "./styles.module.css";
import React, {useState} from "react";

export default function Card_producto(props: any) {
    
    const list_products = props.products.map((item:any)=>(
        <li>{item}</li>
    ))
    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>

                        <div className={styles.agregar}>
                        <div className={styles.content}>
                            <h3>Productos a cotizar</h3>
                            <ul>
                                {list_products}
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}