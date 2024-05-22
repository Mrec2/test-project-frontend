import { useEffect, useState } from "react";

const TestResults = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("misResultados");
    if (datosLocalStorage) {
      console.log("misResultados", JSON.parse(datosLocalStorage));
      setData(JSON.parse(datosLocalStorage));
    }
  }, []);

  return (
    <div>
      <h2>
        La puntuación de tu test es de <span>{data}</span> puntos sobre 25
      </h2>
      <h2>{(data / 25) * 10}</h2>
    </div>
  );
};

export default TestResults;
