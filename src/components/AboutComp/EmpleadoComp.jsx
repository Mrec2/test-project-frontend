import PropTypes from "prop-types";
import styles from "./EmpleadoComp.module.css";


const EmpleadoComp = ({ empleado }) => {

    const { nombre, descripcion, tecnologias, fotoImg } = empleado;

    return (
        <div className={styles.empleado}>

            <div className={styles.empleadoFoto}>
                <img src={fotoImg} alt="foto de empleado" className={styles.empleadoFotoImg} />
            </div>

            <div className={styles.empleadoNombre}>{nombre}</div>
            <div className={styles.empleadoDescripcion}>{descripcion}</div>
            <div className={styles.empleadoTecnologias}>{tecnologias}</div>
            <div className={styles.empleadoLinkedin}></div>

        </div>
    );
};

// Define las propiedades esperadas para el componente EmpleadoComp utilizando PropTypes
EmpleadoComp.propTypes = {
    empleado: PropTypes.shape({ // Define la forma esperada del objeto empleado
        nombre: PropTypes.string.isRequired,
        descripcion: PropTypes.string.isRequired,
        tecnologias: PropTypes.string.isRequired,
        fotoImg: PropTypes.string, // Propiedad fotoImg: tipo string (opcional)
    }).isRequired,
};

export default EmpleadoComp; 
