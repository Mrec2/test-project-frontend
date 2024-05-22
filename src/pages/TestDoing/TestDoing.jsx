import { useEffect, useState } from "react";
import styles from "./TestDoing.module.css";
import EnviarRespuestaAxios from "../../../services/enviarRespuestaAxios";

const TestDoing = () => {
  const [datos, setDatos] = useState([]);
  const [miTest, setMiTest] = useState("");
  const [respuestas, setRespuestas] = useState([]);

  const sendRespuestas = () => {
    // console.log("respuestas", respuestas);
    // console.log("datos", datos);
    // console.log("datos de 0", datos[0]);
    // console.log("index respuesta", respuestas);
    const respuestasEnviadas = datos.map((item, index) => ({
      question: item.question,
      answer: item.bodyOptions[respuestas[index]],
    }));

    const respAxios = new EnviarRespuestaAxios();
    console.log("respuestasEnviadas", respuestasEnviadas);
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
      {miTest && <h1 className={styles.testDoingTitle}>Test de {miTest}</h1>}

      <div className={styles.testDoingQuestions}>
        {datos.length > 0 ? (
          datos.map((item, index) => (
            <div key={index} className={styles.testDoingPregunta}>
              <h2 className={styles.testDoingTitleQuestions}>
                {item.question}
              </h2>

              {item.bodyOptions.map((opcion, opcionIndex) => (
                <div
                  key={opcionIndex}
                  className={styles.testDoingPreguntaSeparacion}
                >
                  <input
                    type="radio"
                    id={`opcion-${index}-${opcionIndex}`}
                    name={`opcion-${index}`}
                    value={opcionIndex}
                    onChange={() => handleRespuestaChange(index, opcionIndex)}
                    className={styles.testDoingInput}
                  />

                  <label
                    htmlFor={`opcion-${index}-${opcionIndex}`}
                    className={styles.testDoingOptions}
                  >
                    {opcion}
                  </label>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No hay datos</p>
        )}

        <div className={styles.containerBtn}>
          <button
            type="button"
            onClick={sendRespuestas}
            className={styles.testDoingBtn}
          >
            Enviar respuestas
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestDoing;
