import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./RecoverAccountComp.module.css";

const RecoverAccountComp = () => {

    return (

        <div className={styles.container}>

            <form className={styles.formulario}>

                <h1 className={styles.title}>QuizMatrix</h1>

                <h2 className={styles.subTitle}>¿Olvidaste tu contraseña?</h2>

                <p className={styles.paragraph}>
                    Introduce tu correo electrónico y recibirás un email con las instrucciones
                    para restablecer tu contraseña.
                </p>

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Escribe tu correo electrónico"
                    className={styles.inputs}
                    required=""
                />

                <button type="submit" className={styles.btn}>Enviar email</button>

                <Link to="/login" className={styles.linkCenter}>Volver</Link>

            </form>

        </div>

    )

}

export default RecoverAccountComp;