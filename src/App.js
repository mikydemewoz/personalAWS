import "./App.css";
import Welcome from "./Components/Welcome";
import Portfolio from "./Components/Portfolio";
import { Divider } from "@mui/material";
import MyPaper from "./Components/MyPaper";
import Experiance from "./Components/Experiance";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
        
      <Welcome />
      <Divider textAlign="left">
        <h1>Portfolio</h1>
      </Divider>
      <Portfolio />
      <Divider textAlign="left">
        <h1>My Experience</h1>
      </Divider>
      <Experiance/>
      <Divider textAlign="left">
        <h1>My Blog</h1>
      </Divider>
      <MyPaper/>
      <Divider textAlign="left">
        <h1>Contact Me</h1>
      </Divider>
    <ContactMe/>
    </div>
  );
}

export default App;
