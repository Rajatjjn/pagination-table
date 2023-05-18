import React,{useState} from "react";

export default function Child({callback}){
  function handle(){
    callback("hello from child")
  }

  return(
    <>
    <button onClick={handle}>child data</button>
    </>
  )

}