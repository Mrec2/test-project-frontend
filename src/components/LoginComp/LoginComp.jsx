import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./LoginComp.module.css";

const LoginComp = () => {

    return (

            <div className={styles.container}>

                <form className={styles.formulario}>

                    <h1 className={styles.title}>QuizMatrix</h1>

                    <div className={styles.botones}>
                        <Link to="/login" className={`${styles.btnLogin} ${styles.btnEdit}`}>Iniciar sesión</Link>
                        <Link to="/register" className={`${styles.btnRegister} ${styles.btnEdit}`}>Registrarse</Link>
                    </div>

                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Escribe tu correo electrónico"
                        className={styles.inputs}
                        required
                    />

                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Escribe tu contraseña"
                        className={styles.inputs}
                        required
                    />

                    <Link to="/recover-account" className={styles.link}>¿Olvidaste tu contraseña?</Link>

                    <button type="submit" className={styles.btn}>Iniciar sesión</button>

                    <Link to="/register" className={`${styles.link} ${styles.linkCenter}`}>¿Aún no eres miembro? ¡Regístrate ahora!</Link>

                </form>

            </div>

    );

}


export default LoginComp;
