import styles from "./EmpleadoComp.module.css";


const EmpleadoComp = ({ empleado }) => {

    const { nombre, descripcion, tecnologias, fotoImg } = empleado;

    return (
        <>
            <section className={styles.cards}>

                <article className={styles.cardItem}>

                    <div className={styles.cardContent}>

                        <figure className={styles.cardPicture}>

                            <a href="linkedin.com/in/cochises">
                                <img
                                    src={fotoImg}
                                    alt="Imagen de Tecnologia"
                                    className={styles.cardImg}
                                />
                            </a>

                        </figure>

                        <div className={styles.cardTexts}>

                            <h1 className={styles.cardTitle}>
                                {nombre}
                            </h1>

                            <h2 className={styles.subTitle}>
                                {descripcion}
                            </h2>

                            <p className={styles.cardParagraph}>
                                {tecnologias}
                            </p>

                        </div>

                        <section className={styles.cardContenedorBtn}>

                            <a href="#" className={styles.cardBtn}>Contáctame</a>

                        </section>

                    </div>

                </article>

            </section>
        </>
    );
};

export default EmpleadoComp; 
