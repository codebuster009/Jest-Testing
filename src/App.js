import "./App.css";
import { useState } from "react";

function App() {
  const [data , setData] = useState("")
  return (
    <div className="App">
      <h1>Test Event with Button {data}</h1>
      <h1>{data}</h1>
      <button onClick={()=> {setData("hello")}}>Update</button>
      <input onChange={(e)=> {setData(e.target.value)}} type="text" placeholder="Enter Your Name Gracefully" value= {data} />
    </div>
  );
}

export default App;
