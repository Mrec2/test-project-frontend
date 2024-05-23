import SectionMain01 from "../../components/SectionMain/SectionMain01";
import SectionMain02 from "../../components/SectionMain/SectionMain02";
import SectionMain03 from "../../components/SectionMain/SectionMain03";
import SectionMain04 from "../../components/SectionMain/SectionMain04";
import InstallPrompt from "../../components/InstallPromptComp/InstallPrompt.jsx";  

const Homepage = () => {
  // Probando la llamada Axios

  return (
    <>
      <SectionMain01 />
      <SectionMain02 />
      <SectionMain03 />
      <SectionMain04 />
      <InstallPrompt /> 
    </>
  );
};

export default Homepage;
