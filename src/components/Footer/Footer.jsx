import styles from "./Footer.module.css";


const Footer = () => {

    return (

        <footer className={styles.footer}>

            <div className={styles.footerContent}>

                <p>
                    Copyright © 2024 Made by Mario, Juan Manuel, Alberto, Alejandro. All
                    rights reserved.
                </p>

                <ul className={styles.footerLinks}>

                    <li>
                        <a href="/terms">Terms of Service</a>
                    </li>

                    <li>
                        <a href="/Faq">FAQ</a>
                    </li>

                    <li>
                        <a href="/about">About Us</a>
                    </li>

                    <li>
                        <a href="/contact">Contact</a>
                    </li>

                </ul>

            </div>

        </footer>

    );
};

export default Footer;
