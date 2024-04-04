import styles from "./AboutComp.module.css";

const AboutComp = () => {
  return (
    <>
      <div className={styles.aboutMain}>
        <div className={styles.aboutSection}>
          <div className={styles.imgAboutSection}>
            <img src="../../../img/example.jpg" alt="foto empresa" />
          </div>

          <div className={styles.textoAboutSection}>
            <h2>Acerca de QuizMatrix</h2>

            <p>
              En nuestra emocionante travesía en el desarrollo de QuizMatrix,
              nos encontramos inmersos en la exploración y adopción de una
              amplia gama de tecnologías para impulsar tanto el Frontend como el
              Backend hacia la excelencia. En la esfera del Frontend, nos
              destacamos por el uso de React.js, una potente biblioteca de
              JavaScript, en combinación con Yarn para la gestión de paquetes y
              Vite para la administración eficiente del proyecto React. Además,
              hemos integrado diversas bibliotecas de terceros, como Axios, para
              facilitar las solicitudes HTTP al servidor, asegurando así una
              experiencia de usuario fluida y eficaz.
            </p>

            <p>
              Por otro lado, en el Backend, estamos inmersos en la exploración
              de diferentes versiones para potenciar nuestras capacidades y
              ampliar nuestro conocimiento en el mundo del desarrollo web con
              Java. La primera versión de nuestro backend sigue el enfoque
              tradicional, utilizando Servlets, mientras que otra implementa el
              patrón de diseño MVC con DAO o Hibernate para la interacción con
              la base de datos. Nuestro objetivo final es culminar con una
              versión robusta y eficiente utilizando Spring Boot, una plataforma
              que ofrece una solución integral y altamente escalable.
            </p>

            <p>
              Cada una de estas etapas y versiones se han diseñado
              estratégicamente para proporcionarnos las habilidades y el
              conocimiento necesario no solo para este proyecto en particular,
              sino también para adaptarnos fluidamente a diversos entornos de
              trabajo que utilicen Java como base tecnológica.
            </p>

            <p className={styles.parrafo3}>
              Este emocionante proyecto es el resultado de la colaboración entre
              varios compañeros del curso de Aplicaciones Web con Java/Spring en
              Core Network. Juntos, estamos trazando un camino hacia la
              excelencia en el desarrollo de aplicaciones Java, aprovechando al
              máximo nuestras habilidades y conocimientos para alcanzar nuevos
              horizontes en el mundo del desarrollo de software.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComp;
