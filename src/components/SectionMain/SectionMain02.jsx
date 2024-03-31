import styles from "./SectionMain02.module.css";

const SectionMain02 = () => {

    return (

        <div className={styles.contenedor}>

            <section className={styles.sectionConocimientos}>

                <div className={styles.sectionConocimientosContenido}>

                    <h3 className={styles.sectionConocimientosTitulo}>
                        Acepta el desafío y demuestra tu dominio en codificación
                    </h3>

                    <p className={styles.sectionConocimientosParrafo}>
                        Desafíate con pequeños tests. Cada tests está diseñado por los creadores
                        de <span className={styles.sectionConocimientosParrafoEdit}>TestsOnlineJava</span> para ayudarte a fortalecer tus conocimientos.
                    </p>

                    <button className={styles.sectionConocimientosBtn}>Únete ahora</button>

                </div>

                <div className={styles.sectionConocimientosImagen}>

                    <img
                        src="../imgs-home-page/test-icon.png"
                        alt="Icono de Test"
                        className={styles.sectionConocimientosImg}
                    />

                </div>

            </section>

        </div>
    );
};

export default SectionMain02;
