import "./App.css";
import RouterApps from "./router/RouterApps.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import InstallPrompt from "./components/InstallPromptComp/InstallPrompt.jsx"; 

function App() {
  return (
    <>
      <Navbar />
      <RouterApps />
      <Footer />
      {/* <InstallPrompt /> */}
    </>
  );
}

export default App;
