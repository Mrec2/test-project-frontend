// import { useEffect, useState } from "react";
// import styles from "./TestDoing.module.css";
// import EnviarRespuestaAxios from "../../../services/enviarRespuestaAxios";

// const TestDoing = () => {
//   // Define el estado para almacenar los datos
//   const [datos, setDatos] = useState([]);
//   const [miTest, setMiTest] = useState("");

//   const pruebaJson = {
//     id: 1,
//     idPregunta: 1,
//     idRespuesta: 1,
//   };

//   const sendRespuestas = () => {
//     const respAxios = new EnviarRespuestaAxios();
//     respAxios.postRespuestas(JSON.stringify(pruebaJson));
//   };

//   useEffect(() => {
//     const datosLocalStorage = localStorage.getItem("misDatos");
//     if (datosLocalStorage) {
//       console.log("misDatos", datosLocalStorage);
//       setDatos(JSON.parse(datosLocalStorage));
//     }
//   }, []);

//   useEffect(() => {
//     const datosLocalStorage = localStorage.getItem("queTest");
//     if (datosLocalStorage) {
//       console.log("miTest", datosLocalStorage);
//       setMiTest(datosLocalStorage);
//     }
//   }, []);

//   return (
//     <div className={styles.testDoingContainer}>
//       {miTest === "Javascript" && <h1>Test de Javascript</h1>}
//       {miTest === "CSS" && <h1>Test de CSS</h1>}
//       {miTest === "HTML" && <h1>Test de HTML</h1>}
//       {miTest === "Java" && <h1>Test de Java</h1>}
//       <div>
//         {datos.length > 0 ? (
//           datos.map((item, index) => (
//             <div key={index}>
//               <h2 className={styles.tituloPregunta}>{item.pregunta}</h2>
//               <ul>
//                 {item.opciones.map((opcion, opcionIndex) => (
//                   <li key={opcionIndex}>{opcion}</li>
//                 ))}
//               </ul>
//             </div>
//           ))
//         ) : (
//           <p>No hay datos</p>
//         )}
//       </div>
//       <button type="button" onClick={sendRespuestas}>
//         Enviar respuestas
//       </button>
//     </div>
//   );
// };

// export default TestDoing;

import { useEffect, useState } from "react";
import styles from "./TestDoing.module.css";
import EnviarRespuestaAxios from "../../../services/enviarRespuestaAxios";

const TestDoing = () => {
  const [datos, setDatos] = useState([]);
  const [miTest, setMiTest] = useState("");
  const [respuestas, setRespuestas] = useState([]);

  // const pruebaJson = {
  //   id: 1,
  //   idPregunta: 1,
  //   idRespuesta: 1,
  // };

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
    console.log("misDatos", datosLocalStorage);
    alert("misDatos", datosLocalStorage);
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

  console.log("datos.length", datos.length);

  return (
    <div className={styles.testDoingContainer}>
      {miTest && <h1>Test de {miTest}</h1>}
      <div>
        {datos.length != 0 ? (
          datos.map((item, index) => (
            <div key={index}>
              <h2 className={styles.tituloPregunta}>{item.question}</h2>
              {item.bodyOptions.map((opcion, opcionIndex) => (
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
