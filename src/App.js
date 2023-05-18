import React,{useState} from "react";
import "./style.css";
import Child from "./Child.js"
export default function App() {
  const[data,setData]=useState("")
  function HandleCallback(datas){
    setData(datas)
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Child callback={HandleCallback}/>
      <p>data from child:{data}</p>
    </div>
  );
}
