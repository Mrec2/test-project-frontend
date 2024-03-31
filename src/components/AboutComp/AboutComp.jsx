import styles from "./AboutComp.module.css";

const AboutComp = () => {
    return (
        <div className={styles.aboutMain}>

            <div className={styles.aboutSection}>

                <div className={styles.imgAboutSection}>
                    <img src="../../../img/example.jpg" alt="foto empresa" />
                </div>

                <div className={styles.textoAboutSection}>

                    <h2>Acerca de Java Test Online Test</h2>

                    <p>
                        Desarrollando una plataforma para la realización de tests online .
                        Las tecnologías que se están usando tanto en Frontend como en
                        Backend son React, Javascript, Css, HTML, Java EE, Java Servelets,
                        JSP etc. Además de todas estas tecnologías se está usando como
                        control de versiones Git y trabajando en remoto con Github.
                    </p>

                    <p>
                        El objetivo del proyecto es el poder integrar todo el potencial de
                        Java con Spring Boot para gestionar todas las peticiones del Front
                        End. En este caso nuestro JSP tendrá que gestionar mediante Servlets
                        toda la información que necesita el Front, como cargar nuestros
                        tests HTML desde el Back, registros de usuarios, validador de
                        respuestas, Login, sesiones, roles etc.
                    </p>

                    <p>
                        Para la realización de este proyecto están colaborando varios
                        compañeros que brevemente serán añadidos.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default AboutComp;


