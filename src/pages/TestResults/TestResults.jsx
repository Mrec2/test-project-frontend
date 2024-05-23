import { useEffect, useState } from "react";
import styles from "./testResults.module.css";

const TestResults = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("misResultados");
    if (datosLocalStorage) {
      console.log("misResultados", JSON.parse(datosLocalStorage));
      setData(JSON.parse(datosLocalStorage));
      //Prueba para color verde
      // setData(25);
    }
  }, []);

  return (
    <div className={styles.testResultsContainer}>
      <h2
        className={styles.testTestResultsTitle}
        style={{ color: (data / 25) * 100 > 50 ? "green" : "red" }}
      >
        La puntuación de tu test es de <span>{data}</span> puntos sobre 25
      </h2>
      <h2
        className={styles.testResultsScore}
        style={{ color: (data / 25) * 100 > 50 ? "green" : "red" }}
      >
        {(data / 25) * 100}%{" "}
        {(data / 25) * 100 > 50
          ? "Has superado el test"
          : "N.M Necesitas mejorar"}
      </h2>
    </div>
  );
};

export default TestResults;
