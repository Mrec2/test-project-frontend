import styles from "./TextComp.module.css";

const TextComp = () => {
  return (
    <>
      <div className={styles.testInfo}>
        <h1 className={styles.titulo}>QuizMatrix</h1>

        <p className={styles.parrafo}>
          Nuestra plataforma se especializa en ofrecer una amplia variedad de
          tests en línea dedicados exclusivamente a la programación en Java,
          JavaScript, HTML y CSS. Estos tests están diseñados para evaluar y
          mejorar tus habilidades en estos lenguajes y tecnologías fundamentales
          para el desarrollo web y de software.
        </p>
        <p className={styles.parrafo}>
          Cada test ha sido minuciosamente creado por expertos en la materia,
          garantizando la relevancia y la calidad de los contenidos. Desde
          preguntas básicas hasta desafíos más avanzados, nuestra plataforma
          ofrece una amplia gama de preguntas para ayudarte a fortalecer tus
          conocimientos y habilidades en programación.
        </p>
        <p className={styles.parrafo}>
          Además de proporcionar tests desafiantes, también ofrecemos
          retroalimentación detallada y análisis de resultados para que puedas
          identificar áreas de mejora y seguir progresando en tu aprendizaje. Ya
          sea que estés preparándote para una entrevista técnica, ampliando tus
          habilidades de programación, o simplemente disfrutando del desafío de
          resolver problemas de código, estamos aquí para ayudarte en tu camino
          hacia el dominio de la programación en Java, JavaScript, HTML y CSS.
        </p>

        <h2 className={styles.subTitulo}>Tipos de pruebas:</h2>

        <ul className={styles.listado}>
          <li className={styles.parrafoTecnologia}>
            <strong>HTML:</strong> Evalúa tu comprensión de la estructura y
            semántica web.
          </li>

          <li className={styles.parrafoTecnologia}>
            <strong>CSS:</strong> Evalúa tu dominio en técnicas de estilo y
            diseño.
          </li>

          <li className={styles.parrafoTecnologia}>
            <strong>JavaScript:</strong> Pon a prueba tus habilidades en
            resolución de problemas y codificación dinámica.
          </li>

          <li className={styles.parrafoTecnologia}>
            <strong>Java:</strong> Descubre tus capacidades en programación
            orientada a objetos y desarrollo de aplicaciones robustas y
            escalables.
          </li>
        </ul>

        <p className={styles.texto}>
          Elige una prueba que se adapte a tus habilidades y empieza a mejorar
          hoy mismo!
        </p>
      </div>
    </>
  );
};

export default TextComp;
