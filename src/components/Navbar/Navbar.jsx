import React from 'react';
import styles from "./Navbar.module.css";

const Navbar = () => {
    
    // Función para manejar el clic en el menú
    const handleMenuClick = () => {
        const navbar = document.querySelector(`.${styles.navbar}`);
        navbar.classList.toggle(`${styles.open}`);
    };

    return (
        <div className={styles.contenedor}>

            <a href="/" className={styles.logo}>
                <span>QuizMatrix</span>
            </a>

            <ul className={styles.navbar}>

                <li>
                    <a href="/">Inicio</a>
                </li>

                <li>
                    <a href="/about">Sobre nuestra web</a>
                </li>

                <li>
                    <a href="/tests">Hacer Test</a>
                </li>

                <li>
                    <a href="/contact">Contacto</a>
                </li>

                <li>
                    <a href="/login">Inicia sesión</a>
                </li>

            </ul>

            <div className={styles.main}>

                <img 
                    src="/imgs-home-page/menu-line.png" 
                    alt="Icono-de-Menu" 
                    className={styles.menuIcon} 
                    onClick={handleMenuClick}
                />
                
            </div>

        </div>
    );
}

export default Navbar;