import styles from "./About.module.css";

import AboutComp from "../../components/AboutComp/AboutComp";
import EmpleadoComp from "../../components/AboutComp/EmpleadoComp";

const About = () => {
    
    const empleado1 = {
        nombre: "Mario",
        descripcion: "Full Stack Developer",
        tecnologias: "Mongo DB, ExpressJS, ReactJS, NodeJS",
        foto: "mario",
    };

    const empleado2 = {
        nombre: "Alberto",
        descripcion: "Front-end Developer",
        tecnologias: "HTML, CSS, Javascript, React",
        foto: "alberto",
    };

    const empleado3 = {
        nombre: "Juanma",
        descripcion: "Back-end Developer",
        tecnologias: "Javascript, ReactJS, Python, Flask",
        foto: "juanma",
    };

    const empleado4 = {
        nombre: "Juan Alberto",
        descripcion: "Back-end Developer",
        tecnologias: "Java, Spring, SpringBoot, MySql",
        foto: "juan alberto",
    };

    return (
        <>

            <AboutComp />

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
        </>
    );
};

export default About;
