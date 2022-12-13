import React from "react";
import { Handle } from "./Handle";
// import FirstComponent from './Components/First-component';
import './index.css';
import Paysage from "./assets/images/1.jpg"
import Paysage1 from "./assets/images/images.jpg"

function App() {

  return (
    <div className="App">
      {/* <FirstComponent /> */}
      <Handle text="1  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, fugit." image={Paysage1}/>
      <Handle text="2  Lorem ipsum dolor sit amet consectetur," image={Paysage}/>
    </div>
  );
}

export default App;