import styles from "./ContactComp.module.css";

const ContactComp = () => {

    return (

        <div className={styles.contactContainer}>

            <form className={styles.contactForm}>

                <h1 className={styles.title}>Contáctanos</h1>

                <label htmlFor="name" className={styles.inputsTitle}>Nombre:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="Escribe tu nombre..." 
                    required 
                />


                <label htmlFor="email" className={styles.inputsTitle}>Correo electrónico:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="Escribe tu correo electrónico..." 
                    required 
                />


                <label htmlFor="message" className={styles.inputsTitle}>Mensaje:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="4" 
                    placeholder="Escribe tu mensaje aquí..."
                    required>
                </textarea>
                

                <button type="submit">Enviar mensaje</button>

            </form>

        </div>

    );

};

export default ContactComp;
