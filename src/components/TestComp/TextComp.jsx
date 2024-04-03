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

                {/* 
                <h2>Niveles</h2>

                <ul>

                    <li className={styles.parrafo}>
                        <strong>Principiante: </strong>Comienza desde lo básico y aprende los fundamentos.
                    </li>

                    <li className={styles.parrafo}>
                        <strong>Intermedio: </strong>Para aquellos que se sienten cómodos con lo básico y están listos para aprender conceptos más complejos.
                    </li>

                    <li className={styles.parrafo}>
                        <strong>Avanzado: </strong>Pon a prueba tu experiencia y conocimiento avanzado en escenarios del mundo real.
                    </li>

                </ul> 
                */}

                <p className={styles.texto}>Elige una prueba que se adapte a tus habilidades y empieza a mejorar hoy mismo!</p>

            </div>

        </>
    );
};

export default TextComp;
