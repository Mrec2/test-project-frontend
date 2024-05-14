import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./RegisterComp.module.css";

const RegisterComp = () => {

    return (

        <div className={styles.container}>

            <form className={styles.formulario}>

                <h1 className={styles.title}>QuizMatrix</h1>

                <div className={styles.botones}>
                        <Link to="/login" className={`${styles.btnLogin} ${styles.btnEdit}`}>Iniciar sesión</Link>
                        <Link to="/register" className={`${styles.btnRegister} ${styles.btnEdit}`}>Registrarse</Link>
                </div>

                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Escribe tu nombre"
                    className={styles.inputs}
                    required=""
                />

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Escribe tu correo electrónico"
                    className={styles.inputs}
                    required=""
                />

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Escribe tu contraseña"
                    className={styles.inputs}
                    required=""
                />

                <button type="submit" className={styles.btn}>Regístrate</button>

            </form>

        </div>

    );

}


export default RegisterComp;