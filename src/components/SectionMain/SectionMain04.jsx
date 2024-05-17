import styles from "./SectionMain04.module.css";

const SectionMain04 = () => {

    return (

        <div className={styles.contenedor}>

            <section className={styles.seccionPrincipal}>

                <div>

                    <h3 className={styles.seccionInfoTitle}>
                        Amplía tus horizontes de aprendizaje, ¡donde sea que estés!
                    </h3>

                    <p className={styles.seccionInfoTexto}>
                        Con nuestra plataforma, puedes realizar todos los tests desde
                        cualquier dispositivo, ya sea un ordenador, tablet o móvil. ¡Aprende
                        en cualquier momento y en cualquier lugar!
                    </p>

                </div>

                <div>

                    <img
                        src="/imgs-home-page/icon-dispositivos-moviles.png"
                        alt="Icono de Ordenador y Móvil"
                        className={styles.seccionImagenIcon}
                    />

                </div>

            </section>

        </div>

    );
    
};

export default SectionMain04;
