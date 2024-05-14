import { useEffect, useState } from "react";
import styles from "./TestDoing.module.css";
import EnviarRespuestaAxios from "../../../services/enviarRespuestaAxios";

const TestDoing = () => {
  const [datos, setDatos] = useState([]);
  const [miTest, setMiTest] = useState("");
  const [respuestas, setRespuestas] = useState([]);

  const sendRespuestas = () => {
    const respuestasEnviadas = datos.map((item, index) => ({
      pregunta: item.pregunta,
      respuesta: item.opciones[respuestas[index]],
    }));

    const respAxios = new EnviarRespuestaAxios();

    respAxios.postRespuestas(JSON.stringify(respuestasEnviadas));
  };

  const handleRespuestaChange = (index, respuestaId) => {
    const nuevasRespuestas = [...respuestas];
    nuevasRespuestas[index] = respuestaId;
    setRespuestas(nuevasRespuestas);
  };

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("misDatos");
    if (datosLocalStorage) {
      setDatos(JSON.parse(datosLocalStorage));
    }
  }, []);

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("queTest");
    if (datosLocalStorage) {
      setMiTest(datosLocalStorage);
    }
  }, []);

  return (
    <div className={styles.testDoingContainer}>
      {miTest && <h1>Test de {miTest}</h1>}
      <div>
        {datos.length > 0 ? (
          datos.map((item, index) => (
            <div key={index}>
              <h2 className={styles.tituloPregunta}>{item.pregunta}</h2>
              {item.opciones.map((opcion, opcionIndex) => (
                <div key={opcionIndex}>
                  <input
                    type="radio"
                    id={`opcion-${index}-${opcionIndex}`}
                    name={`opcion-${index}`}
                    value={opcionIndex}
                    onChange={() => handleRespuestaChange(index, opcionIndex)}
                  />
                  <label htmlFor={`opcion-${index}-${opcionIndex}`}>
                    {opcion}
                  </label>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No hay datos</p>
        )}
      </div>
      <button type="button" onClick={sendRespuestas}>
        Enviar respuestas
      </button>
    </div>
  );
};

export default TestDoing;
