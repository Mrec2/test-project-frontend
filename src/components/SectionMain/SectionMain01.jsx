import styles from "./SectionMain01.module.css";

const SectionMain01 = () => {

    return (

        <div className={styles.contenedor}>

            <section className={styles.sectionPrincipal}>

                <section className={styles.sectionTexto}>

                    <h1 className={styles.sectionPrincipalTitulo}>
                        ¡Desafía tus habilidades de programación con nuestros tests en
                        línea!
                    </h1>

                    <p className={styles.sectionPrincipalDescripcion}>
                        Ponte a prueba con una variedad de desafíos diseñados para mejorar
                        tus habilidades en programación. Desde principiantes hasta expertos,
                        tenemos algo para todos.
                    </p>

                   

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
