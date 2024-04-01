import styles from "./EmpleadoComp.module.css";


const EmpleadoComp = ({ empleado }) => {

    const { nombre, descripcion, tecnologias, fotoImg } = empleado;

    return (
        <>
            <article className={styles.card}>

                <section className={styles.cardContenetorImg}>

                    <img
                        src={fotoImg}
                        alt='Imagen de Card'
                        className={styles.cardImg}
                    />

                </section>

                <section className={styles.cardContenedorInfo}>

                    <h1 className={styles.cardTitulo}>
                        {nombre}
                    </h1>

                    <h3 className={styles.cardSubTitulo}>
                        {descripcion}
                    </h3>

                    <p className={styles.cardParrafo}>
                        {tecnologias}
                    </p>

                </section>

                <section className={styles.cardContenedorBtn}>

                    <a href="#" className={styles.cardBtn}>Contáctame</a>

                </section>

            </article>
        </>
    );
};

export default EmpleadoComp; 
