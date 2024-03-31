import styles from "./SectionMain01.module.css";

const SectionMain01 = () => {

    return (
        
        <div className={styles.contenedor}>

            <section className={styles.sectionPrincipal}>

                <section className={styles.sectionTexto}>

                    <h1 className={styles.sectionPrincipalTitulo}>
                        Pon a prueba tu destreza en programación con nuestros tests en línea
                    </h1>

                    <button className={styles.sectionPrincipalBtn}>Empezar</button>

                </section>

                <section className={styles.sectionImagen}>

                    <img
                        src="/imgs-home-page/icon-programming.png"
                        alt="Logo de Programación"
                        className={styles.imgPortada} 
                    />

                </section>

            </section>

            

        </div>
    );
};

export default SectionMain01;
