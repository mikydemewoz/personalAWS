import "./App.css";
import Welcome from "./Components/Welcome";
import Portfolio from "./Components/Portfolio";
import { Button, Divider } from "@mui/material";
import MyPaper from "./Components/MyPaper";
import Experiance from "./Components/Experiance";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* <div style={{textAlign: "right", margin:20 }}>
        <Button>
        <a style={{textDecoration:"none"}} href="https://zedagem-personal.auth.us-east-1.amazoncognito.com/oauth2/authorize?client_id=5i0rtph6jg8bkv6lqpciie3glh&response_type=code&scope=email+openid&redirect_uri=https%3A%2F%2Fwww.zedagem.link%2Fadmin">Login</a>
        </Button>
    
      </div> */}
        
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
