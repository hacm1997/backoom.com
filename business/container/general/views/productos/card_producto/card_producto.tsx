import styles from "./styles.module.css";
import React, {useEffect, useState} from "react";
import { Cookies } from "react-cookie";

export default function Card_producto({producto, index, dataOfChild, listUpdate}:any) {
    /*const [cantidad, setCantidad] = useState(10);
    const [panelAgregar, SetPanelAgregar] = useState(false);
    
    const total = cantidad;
    const handleMas = () => {
        setCantidad(cantidad + 1);
    }

    const rangoPrecio = () => {
        SetPanelAgregar(!panelAgregar);
    }
    const handleMenos = () => {
       if (cantidad > 10) {
           setCantidad(cantidad - 1);
       }
    }*/
    
    const addProduct = () => {

        dataOfChild(producto.name);
    } 

    return (
        <>
            <div className={styles.card} key={index}>
                <div className={styles.multimedia}>
                    <img src={producto.img} alt={producto.name}/>
                </div>
                <div className={styles.content}>
                    <h3>{producto.name}</h3>
                    <p >{producto.type}</p>
                    <p >{producto.measures}</p>
                    <p >{producto.finish}</p>
                    
                    <a onClick={addProduct}><i className='bx bx-cart'></i>Añadir</a>
                    {/*panelAgregar ?
                        <div className={styles.agregar}>
                        <div className={styles.content}>
                            <span>Puedes comprar mínimo 10 unidades*</span>

                            <div className={styles.cantidad}>
                                <button onClick={handleMenos}  className={styles.mas}><i className='bx bx-minus'></i></button>
                                <input type="text" value={total}/>
                                <button onClick={handleMas} className={styles.menos}><i className='bx bx-plus'></i></button>
                            </div>
                            <button className={styles.confirmar}>Confirmar</button>
                        </div>
                    </div>
                    : null*/}
                </div>

            </div>
        </>
    )
}
