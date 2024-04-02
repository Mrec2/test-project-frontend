import InitAxios from "./initAxios";

class TestAxios extends InitAxios {
  // getTest() {
  //   console.log("Entra en la función getTest()");
  //   return this.axios
  //     .get("")
  //     .then(() => console.log("Probando que se retorne la promesa"));
  // }

  constructor() {
    super("http://localhost:8080/QuizMatrix-backend/testServlet");
    // Alberto super("http://localhost:8080/QuizMatrix-backend/testServlet");
  }

  async postTest(data) {
    try {
      // const response = await this.axios.post(`${data}`, data);
      const response = await this.axios.post(`${data}`, data);
      // alert("Datos enviados correctamente. -->" + data);
      localStorage.setItem("queTest", data);
      if (response.status === 200) {
        // const nuevaUrl = response.data.url;
        window.location.href = "/test-doing";
        console.log("Respuesta del servidor:", response.data);
        localStorage.setItem("misDatos", JSON.stringify(response.data));
      } else if (response.status === 400) {
        console.error("Respuesta del servidor no fue 200 OK", response.data);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  }
}

export default TestAxios;
