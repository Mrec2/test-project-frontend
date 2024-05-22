import "./App.css";
import RouterApps from "./router/RouterApps.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import InstallPrompt from "./components/InstallPromptComp/InstallPrompt.jsx";  // Importa el nuevo componente

function App() {
  return (
    <>
      <Navbar />
      <RouterApps />
      <Footer />
      <InstallPrompt />  {/* Agrega el nuevo componente aquí */}
    </>
  );
}

export default App;
