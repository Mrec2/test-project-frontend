import styles from "./About.module.css";

import AboutComp from "../../components/AboutComp/AboutComp";
import EmpleadoComp from "../../components/AboutComp/EmpleadoComp";

const About = () => {

    const empleado1 = {
        nombre: "Mario Fernández",
        descripcion: "Full Stack Developer",
        tecnologias: "Mongo DB, ExpressJS, ReactJS, NodeJS",
        fotoImg: "/Fundadores/foto-juan-mario.jpeg",
        contacto: "https://www.linkedin.com/in/jmfpinedo/"
        
    };

    const empleado2 = {
        nombre: "Alberto González",
        descripcion: "Front-end Developer",
        tecnologias: "HTML, CSS, Bootstrap 5, Sass, Javascript, React",
        fotoImg: "/Fundadores/foto-alberto-gonzalez.jpeg",
        contacto: "https://www.linkedin.com/in/cochises/"
    };

    const empleado3 = {
        nombre: "Juan Manuel",
        descripcion: "Back-end Developer",
        tecnologias: "Javascript, ReactJS, Python, Flask",
        fotoImg: "/Fundadores/foto-juan-manuel.jpeg",
        contacto: "https://www.linkedin.com/in/juan-manuel-iriondo-ortega-45a30128/"
    };

    const empleado4 = {
        nombre: "Juan Alberto",
        descripcion: "Back-end Developer",
        tecnologias: "Java, Spring, SpringBoot, MySql, Hibernate",
        fotoImg: "/Fundadores/foto-juan-alberto.jpeg",
        contacto: "https://www.linkedin.com/in/jamunozanares/"
    };

    return (
        <>

            <div className={styles.aboutPage}>

                <h1 className={styles.aboutPageTitle}>Fundadores de QuizMatrix</h1>

                <div className={styles.aboutEmpleados}>

                    <div className={styles.aboutEmpleado}>
                        <EmpleadoComp empleado={empleado1} />
                    </div>

                    <div className={styles.aboutEmpleado}>
                        <EmpleadoComp empleado={empleado2} />
                    </div>

                    <div className={styles.aboutEmpleado}>
                        <EmpleadoComp empleado={empleado3} />
                    </div>

                    <div className={styles.aboutEmpleado}>
                        <EmpleadoComp empleado={empleado4} />
                    </div>

                </div>

                <AboutComp />

            </div>

        </>
    );
};

export default About;
