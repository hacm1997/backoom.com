import React, {useEffect, useState} from "react";
import Head from "next/head";
import styles from "./styles.module.css";
import NavBar from "../navbar/navbar";
import Footer from "../footer/footer";
import "moment/locale/es";
import moment from "moment/moment";
import ProgressBar from "react-progressbar-on-scroll";
import common from "../../../../services/common.json";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {MyGlobalContext, useGlobalContext} from "../../../content/context/global_var";

moment.locale("es");

export default function Layout({children, setClosedCart}: any) {
    const data: any = common.headData;
    const [market, setMarket] = useState(0);
    //const { countMarket, setCountMarket } = useGlobalContext()
    const [value, setValue] = useState(0);

    return (
        <>
            <div>
                <Head>
                    <title>Backoom</title>
                    <meta name="keywords" content={data.keywords}/>
                    <meta name="description" content={data.description}/>
                </Head>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
                />
                <link rel="canonical" href=""/>

                <a
                    href="https://api.whatsapp.com/send?phone=573156059925&text=%C2%A1Hola%20Backoom!%F0%9F%94%A9%20Vengo%20tu%20sitio%20web,%20quisiera%20obtener%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20productos.%20"
                    target="_blank"
                    rel="noreferrer"
                    title="Whatsapp"
                    className={styles.float}
                >
                    <i className="fa fa-whatsapp my-float"></i>
                </a>

                <div className={styles.progress_bar}>
                    <ProgressBar
                        color="#F2AC38"
                        height={3}
                        direction="right"
                        position="top"
                        gradient={true}
                        gradientColor="#eee"
                    />
                </div>

                <MyGlobalContext.Provider value={{value, setValue}}>
                    <NavBar setClosedCart={setClosedCart}/>

                    {children}
                </MyGlobalContext.Provider>
                <Footer/>
            </div>
        </>
    );
}
