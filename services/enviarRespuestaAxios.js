import InitAxios from "./initAxios";

class EnviarRespuestaAxios extends InitAxios {
  constructor() {
    super("http://localhost:8080/answers");
  }

  async postRespuestas(respuestas) {
    try {
      const response = await this.axios.post("", respuestas, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        console.log(
          "Respuesta del servidor para las preguntas enviadas:",
          response.data
        );
        window.location.href = "/test-results";
        localStorage.setItem("misResultados", JSON.stringify(response.data));
        console.log(response.data);
        alert("Respuestas enviadas");
      } else if (response.status === 400) {
        console.error("Respuesta del servidor no fue 200 OK", response.data);
        // window.location.href = "/test-results";
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  }
}

export default EnviarRespuestaAxios;
