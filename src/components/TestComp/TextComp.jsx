import styles from "./TextComp.module.css";

const TextComp = () => {

    return (

        <>

            <div className={styles.testInfo}>

                <h1 className={styles.titulo}>QuizMatrix</h1>

                <p className={styles.parrafo}>
                    Nuestra plataforma ofrece una variedad de pruebas en línea para evaluar y mejorar tu conocimiento en diferentes áreas.
                </p>

                <h2 className={styles.subTitulo}>Tipos de pruebas:</h2>

                <ul className={styles.listado}>

                    <li className={styles.parrafoTecnologia}>
                        <strong>HTML: </strong>Evalúa tu comprensión de la estructura y semántica web.
                    </li>

                    <li className={styles.parrafoTecnologia}>
                        <strong>CSS: </strong>Evalúa tus habilidades en técnicas de estilo y diseño.
                    </li>

                    <li className={styles.parrafoTecnologia}>
                        <strong>JavaScript: </strong>Desafía tus habilidades de resolución de problemas y codificación.
                    </li>

                </ul>

                <p className={styles.texto}>Elige una prueba que se adapte a tus habilidades y empieza a mejorar hoy mismo!</p>

            </div>

        </>
    );
};

export default TextComp;
