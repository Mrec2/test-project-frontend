import styles from "./Faq.module.css";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.tituloPrincipal}>Preguntas frecuentes</h2>

      <main className={styles.containerPreguntas}>
        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Qué temas de programación están cubiertos en la plataforma?
          </h2>

          <p className={styles.parrafoPregunta}>
            La plataforma cubre una amplia variedad de temas de programación,
            incluyendo Java, CSS, HTML y JavaScript. Puedes encontrar quizzes
            relacionados con estos lenguajes de programación y más.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Cómo puedo acceder a los quizzes?
          </h2>

          <p className={styles.parrafoPregunta}>
            Para acceder a los quizzes, primero necesitas registrarte en nuestra
            plataforma. Una vez registrado, puedes explorar y seleccionar los
            quizzes que te interesen para empezar a resolverlos.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>¿Son los quizzes gratuitos?</h2>

          <p className={styles.parrafoPregunta}>
            Sí, todos los quizzes disponibles en nuestra plataforma son
            gratuitos para los usuarios registrados. No hay ningún cargo por
            resolver quizzes o acceder a los recursos educativos.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Hay límite de intentos para resolver un quiz?
          </h2>

          <p className={styles.parrafoPregunta}>
            No, no hay límite de intentos para resolver un quiz. Puedes intentar
            resolver un quiz tantas veces como desees para mejorar tu
            comprensión y puntaje.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Puedo crear y compartir mis propios quizzes en la plataforma?
          </h2>

          <p className={styles.parrafoPregunta}>
            Actualmente, la función para crear y compartir tus propios quizzes
            no está disponible. Sin embargo, estamos trabajando en agregar esta
            característica en futuras actualizaciones de la plataforma.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Cómo puedo contactar al equipo de soporte?
          </h2>

          <p className={styles.parrafoPregunta}>
            Si tienes alguna pregunta, problema técnico o sugerencia, puedes
            ponerte en contacto con nuestro equipo de soporte enviando un correo
            electrónico a support@plataformaquizzes.com. Estaremos encantados de
            ayudarte.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Qué nivel de dificultad tienen los quizzes?
          </h2>

          <p className={styles.parrafoPregunta}>
            Los quizzes están diseñados para adaptarse a diferentes niveles de
            habilidad, desde principiante hasta avanzado. Puedes encontrar
            quizzes de diferentes niveles de dificultad para desafiar y mejorar
            tus habilidades de programación.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Se proporcionan respuestas explicativas después de resolver un
            quiz?
          </h2>

          <p className={styles.parrafoPregunta}>
            Sí, después de resolver un quiz, se te proporcionarán respuestas
            detalladas y explicaciones para cada pregunta. Esto te ayudará a
            comprender los conceptos y mejorar tus habilidades de programación.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Es necesario tener conocimientos previos de programación para
            utilizar la plataforma?
          </h2>

          <p className={styles.parrafoPregunta}>
            No, nuestra plataforma está diseñada para usuarios de todos los
            niveles, desde principiantes hasta expertos. Incluso si eres nuevo
            en la programación, encontrarás quizzes y recursos que te ayudarán a
            aprender y mejorar tus habilidades.
          </p>
        </section>

        <section className={styles.containerPregunta}>
          <h2 className={styles.tituloPregunta}>
            ¿Se proporciona retroalimentación sobre el desempeño en los quizzes?
          </h2>

          <p className={styles.parrafoPregunta}>
            Sí, al completar un quiz, recibirás retroalimentación instantánea
            sobre tu desempeño, incluyendo tu puntaje y las áreas en las que
            podrías mejorar. Esta retroalimentación te ayudará a identificar tus
            fortalezas y debilidades en la programación.
          </p>
        </section>
      </main>
    </div>
  );
};

export default FAQ;
