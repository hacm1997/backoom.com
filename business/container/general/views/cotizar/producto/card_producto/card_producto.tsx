import styles from "./styles.module.css";
import React, {useState} from "react";

export default function Card_producto(props: any) {

    //console.log(props.products);
    const list_products = props.products.map((item:any, index:any)=>(
        <ul key={index}>
            <li><p>{item}</p></li>
        </ul>
    ))
    return (
        <>
            <div className={styles.card}>
                <div className={styles.content}>

                    <div className={styles.agregar}>
                        <div className={styles.content}>
                            <h3>Productos a cotizar</h3>
                            <div className={styles.list_products}>
                                {list_products}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
