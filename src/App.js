import "./App.css";
import { useState } from "react";

function App() {
  const [data , setData] = useState("")
  return (
    <div className="App">
      <h1>OnChange Event with Input Text</h1>
      <input onChange={(e)=> {setData(e.target.value + "test")}} type="text" placeholder="Enter Your Name Gracefully" value= {data} />
    </div>
  );
}

export default App;
