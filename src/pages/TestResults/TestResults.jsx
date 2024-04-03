import { useEffect, useState } from "react";

const TestResults = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const datosLocalStorage = localStorage.getItem("misResultados");
    if (datosLocalStorage) {
      console.log("misResultados", datosLocalStorage);
      setData(JSON.parse(datosLocalStorage));
    }
  });

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default TestResults;
