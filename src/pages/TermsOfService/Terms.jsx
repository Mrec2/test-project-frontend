import styles from "./Terms.module.css";

const Terms = () => {

    return (
        
        <div className={styles.container}>
            
                <h1 className={styles.tituloPrincipal}>Términos de Servicio</h1>

                <section className={styles.containerTerminos}>

                    <h2 className={styles.tituloTermino}>1. Aceptación de los Términos</h2>

                    <p className={styles.parrafoTermino}>
                        Al acceder o utilizar nuestra plataforma de cualquier manera,
                        aceptas cumplir estos términos de servicio. Si no estás de acuerdo
                        con alguno de los términos, te pedimos que no utilices nuestros
                        servicios.
                    </p>

                </section>


                <section className={styles.containerTerminos}>

                    <h2 className={styles.tituloTermino}>2. Uso Aceptable</h2>

                    <p className={styles.parrafoTermino}>
                        Nuestra plataforma está destinada únicamente para uso personal y no
                        comercial. Te comprometes a utilizar nuestros servicios de manera
                        ética y legal. No deberás utilizar la plataforma para cualquier
                        actividad ilegal o que viole los derechos de otros usuarios o
                        terceros.
                    </p>

                </section>

                <section className={styles.containerTerminos}>

                    <h2 className={styles.tituloTermino}>3. Registro de Cuenta</h2>

                    <p className={styles.parrafoTermino}>
                        Es posible que necesites registrarte para acceder a ciertas
                        funciones de nuestra plataforma. Debes proporcionar información
                        precisa y actualizada durante el proceso de registro. Eres
                        responsable de mantener la confidencialidad de tu cuenta y
                        contraseña.
                    </p>

                </section>


                <section className={styles.containerTerminos}>

                    <h2 className={styles.tituloTermino}>4. Propiedad Intelectual</h2>

                    <p className={styles.parrafoTermino}>
                        Todos los derechos de propiedad intelectual relacionados con nuestra
                        plataforma y sus contenidos son propiedad nuestra o de nuestros
                        licenciantes. No tienes derecho a copiar, modificar, distribuir,
                        transmitir, mostrar públicamente o crear trabajos derivados de
                        ningún contenido de nuestra plataforma sin nuestro consentimiento
                        previo por escrito.
                    </p>

                </section>


                <section className={styles.containerTerminos}>

                    <h2 className={styles.tituloTermino}>5. Limitación de Responsabilidad</h2>

                    <p className={styles.parrafoTermino}>
                        No seremos responsables de ningún daño directo, indirecto,
                        incidental, especial, emergente o punitivo que surja del uso de
                        nuestra plataforma.
                    </p>

                </section>


                <section className={styles.containerTerminos}>

                    <h2 className={styles.tituloTermino}>6. Modificaciones</h2>

                    <p className={styles.parrafoTermino}>
                        Nos reservamos el derecho de modificar estos términos de servicio en
                        cualquier momento. Los cambios entrarán en vigencia inmediatamente
                        después de su publicación en nuestra plataforma. Es tu
                        responsabilidad revisar periódicamente estos términos para estar al
                        tanto de las modificaciones.
                    </p>

                </section>

        </div>
    );
};

export default Terms;
