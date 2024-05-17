import styles from "./SectionMain02.module.css";

const SectionMain02 = () => {

    return (

        <div className={styles.contenedor}>

            <section className={styles.sectionConocimientos}>

                <div className={styles.sectionConocimientosContenido}>

                    <h3 className={styles.sectionConocimientosTitulo}>
                        ¡Demuestra tu dominio en codificación aceptando el desafío!
                    </h3>

                    <p className={styles.sectionConocimientosParrafo}>
                        Pon a prueba tus habilidades con nuestros tests diseñados por el
                        equipo de expertos de{" "}
                        <span className={styles.sectionConocimientosParrafoEdit}>
                            QuizMatrix
                        </span>
                        . Cada test está diseñado para ayudarte a fortalecer tus
                        conocimientos y mejorar tus habilidades en programación.
                    </p>

                    <button className={styles.sectionConocimientosBtn}>
                        Únete ahora
                    </button>

                </div>

                <div className={styles.sectionConocimientosImagen}>

                    <img
                        src="/imgs-home-page/test-icon.png"
                        alt="Icono de Test"
                        className={styles.sectionConocimientosImg}
                    />

                </div>

            </section>

        </div>

    );
    
};

export default SectionMain02;
