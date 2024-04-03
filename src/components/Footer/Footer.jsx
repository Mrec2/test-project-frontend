import styles from "./Footer.module.css";


const Footer = () => {

    return (

        <footer className={styles.footer}>

            <div className={styles.footerContent}>

                <p>
                    Copyright © 2024 Hecho por Mario Fernández, Juan Manuel, Alberto González, Juan Alberto. Todos los derechos reservados.
                </p>

                <ul className={styles.footerLinks}>

                    <li>
                        <a href="/terms">Términos de servicio</a>
                    </li>

                    <li>
                        <a href="/Faq">Preguntas frecuentes</a>
                    </li>

                    <li>
                        <a href="/about">Acerca de nosotros</a>
                    </li>

                    <li>
                        <a href="/contact">Contacto</a>
                    </li>

                </ul>

            </div>

        </footer>

    );
};

export default Footer;
