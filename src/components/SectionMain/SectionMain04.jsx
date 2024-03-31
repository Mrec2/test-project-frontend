import styles from "./SectionMain04.module.css";

const SectionMain04 = () => {

    return (

        <div className={styles.contenedor}>

            <section className={styles.seccionPrincipal}>

                <div>

                    <h3 className={styles.seccionInfoTitle}>
                        Todos los tests puedes realizarlos en cualquier dispositivo, desde ordenadores hasta dispositivos móviles.
                    </h3>

                </div>

                <div>

                    <img
                        src="../imgs-home-page/icon-dispositivos-moviles.png"
                        alt="Icono de Ordenador y Movil"
                        className={styles.seccionImagenIcon}
                    />

                </div>

            </section>

        </div>
    );
};

export default SectionMain04;