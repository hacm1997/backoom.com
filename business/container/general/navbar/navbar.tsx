import React, {useContext, useEffect, useState} from "react";
import styles from "./styles.module.css";
import common from "../../../../services/common.json";
import Link from "next/link";
import {useRouter} from "next/router";
import {useCookies} from "react-cookie";
import {useGlobalContext} from "../../../content/context/global_var";

function Navbar({setClosedCart, closedCart}: any) {
    const router = useRouter();

    const [cookies, setCookie, removeCookie] = useCookies();
    const [state, setState] = useState<{ icon: any; menu: any }>({
        icon: "bx bx-menu-alt-right",
        menu: styles.menu,
    });
    const navbar = common.navbar;

    const homeBtnStyle = {
        color: router.asPath === "/" ? "#fff600" : "white",
        fontSize: "16px",
    };

    const productsBtnStyle = {
        color: router.asPath === "/productos" ? "#fff600" : "white",
        fontSize: "16px",
        cursor: "pointer",
    };

    const blogBtnStyle = {
        color: router.asPath === "/blog" ? "#fff600" : "#ffffff",
        fontSize: "16px",
        cursor: "pointer",
    };

    const priceBtnStyle = {
        color: router.asPath === "/cotizar" ? "#fff600" : "#ffffff",
        fontSize: "16px",
        cursor: "pointer",
    };

    const styleProducts = {
        color: router.asPath.lastIndexOf("servicios") === 1 ? "#fff600" : "#white",
    };
    const style = {
        color:
            router.asPath === "/servicios/esofagogastroduodenoscopia"
                ? "#fff600"
                : "#white",
    };

    const handleMenu = () => {
        const menu = styles.menu;
        const icon = "bx bx-menu-alt-right";
        menu !== state.menu
            ? setState({menu: menu, icon: icon})
            : setState({menu: styles.menuActive, icon: "bx bx-menu-alt-left"});
        icon !== state.icon
            ? setState({icon: icon, menu: menu})
            : setState({icon: "bx bx-menu-alt-left", menu: styles.menuActive});
    };

    const [market, setMarket] = useState([]);
    const {value, setValue} = useGlobalContext();

    useEffect(() => {
        setMarket(cookies.products);
    }, [cookies]);

    //console.log("GLOBAL COUNT MARKET => ",value);
    return (
        <>
            <nav>
                <div className={styles.general}>
                    <Link href={navbar.logo.url}>
                        <div className={styles.logo}>
                            <img src={navbar.logo.srcImg} alt={navbar.logo.alt}/>
                        </div>
                    </Link>

                    <div className={state.menu}>
                        <ul>
                            <Link href={navbar.home.url}>
                                <li style={homeBtnStyle} className={styles.landingBtn}>
                                    {navbar.home.name}
                                </li>
                            </Link>
                            <div className={styles.dropdown}>
                                <li>
                  <span style={productsBtnStyle}>
                    {navbar.productos.name}
                      <i className={styles.arrow1 + " bx bxs-down-arrow"}></i>
                  </span>
                                </li>

                                <div className={styles.dropdown_content}>
                                    <Link href={navbar.productos.types.tornillos}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.tornillos
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Tornillos
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.tuercas}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.tuercas
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Tuercas
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.arandelas}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.arandelas
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Arandelas
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.industrialliviana}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.industrialliviana
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Tornillería Industrial Liviana
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.varillas}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.varillas
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Varillas
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.bristol}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.bristol
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Bristol
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.aceroinoxidable}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.aceroinoxidable
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Acero inoxidable
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.anclajes}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.anclajes
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Anclajes
                                        </p>
                                    </Link>
                                    <Link href={navbar.productos.types.consumibles}>
                                        <p
                                            style={style}
                                            className={
                                                " navbar-brand " + router.pathname ==
                                                navbar.productos.types.consumibles
                                                    ? "active"
                                                    : "non-active"
                                            }
                                        >
                                            Consumibles
                                        </p>
                                    </Link>
                                </div>
                            </div>
                            {value || cookies.productscopy ? value === 0  && cookies.productscopy.length === 0 ? null :
                            <Link href={navbar.cotizar.url}>
                                <li style={priceBtnStyle}>{navbar.cotizar.name}</li>
                            </Link>
                            : null}
                            <Link href={navbar.blog.url}>
                                <li style={blogBtnStyle}>{navbar.blog.name}</li>
                            </Link>

                            {value || cookies.productscopy ? value === 0  && cookies.productscopy.length === 0 ? null :
                                router.asPath === "/" || router.asPath === "/cotizar" || router.asPath === "/blog" ?
                                    <Link href="/cotizar">
                                        <li className={styles.carrito}>
                                            <a>
                                                <span className={styles.cantidad}>{value ? value : cookies.productscopy ? cookies.productscopy.length : 0}</span>
                                                <i className="bx bx-cart-alt"></i>
                                            </a>
                                        </li>
                                    </Link>
                                :
                                    <li className={styles.carrito}>
                                            <a href="#carrito" onClick={() => setClosedCart(false)}>
                                            <span className={styles.cantidad}>{value ? value : cookies.productscopy ? cookies.productscopy.length : 0}</span>
                                            <i className="bx bx-cart-alt"></i>
                                        </a>
                                    </li>

                            : null}
                        </ul>
                    </div>
                    <div className={styles.boton}>
                        <a href={navbar.bookingBtn.url} target="_blank">
                            {navbar.bookingBtn.name}
                        </a>
                    </div>

                    <div onClick={handleMenu} className={styles.botonMovil}>
                        <a href="#">
                            <i className={state.icon}></i>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
