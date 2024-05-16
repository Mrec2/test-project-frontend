import styles from "./About.module.css";

import AboutComp from "../../components/AboutComp/AboutComp";
import EmpleadoComp from "../../components/AboutComp/EmpleadoComp";

const About = () => {
    
    const empleado1 = {
        nombre: "Mario Fernández",
        descripcion: "Full Stack Developer",
        tecnologias: "Mongo DB, ExpressJS, ReactJS, NodeJS",
        fotoImg: "https://media.licdn.com/dms/image/D4D35AQGmK4N-NralDA/profile-framedphoto-shrink_800_800/0/1663588454959?e=1716292800&v=beta&t=hN9R0X9aK3IIv-PT6v7G9AZrLT87xc5lW54SIj9WrgA",
    };

    const empleado2 = {
        nombre: "Alberto González",
        descripcion: "Front-end Developer",
        tecnologias: "HTML, CSS, Bootstrap 5, Sass, Javascript, React",
        fotoImg: "https://media.licdn.com/dms/image/D4E03AQGC2lUUubgmtw/profile-displayphoto-shrink_800_800/0/1670689613174?e=1717632000&v=beta&t=HSNM6v0i_2fNVteCpSB-8UrvlvaaOgW7cAr_Ir1v7Tg",
    };

    const empleado3 = {
        nombre: "Juan Manuel",
        descripcion: "Back-end Developer",
        tecnologias: "Javascript, ReactJS, Python, Flask",
        fotoImg: "https://media.licdn.com/dms/image/C4E03AQEUOP4wN4Zeuw/profile-displayphoto-shrink_800_800/0/1527702044044?e=1717632000&v=beta&t=40DADdMPKj__mJHfAqNeCheeRsDjx4GVoRMyB2UHUg4",
    };

    const empleado4 = {
        nombre: "Juan Alberto",
        descripcion: "Back-end Developer",
        tecnologias: "Java, Spring, SpringBoot, MySql",
        fotoImg: "https://media.licdn.com/dms/image/C4E03AQGf-94CgAgbpQ/profile-displayphoto-shrink_800_800/0/1516938069267?e=1717632000&v=beta&t=Zh3ja0Wka4ESUCEOTspArd3zWg0eUE0EO7qFv37upKo",
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
