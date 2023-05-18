import React,{useState,useEffect} from "react"
import "./style.css";

export default function Page(){
  const[store,setStore]=useState([])
  const[todoperpage,settodoperpage]=useState(10)
  const[currentpage,setcurrentpage]=useState(1)

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/")
    .then(response=>response.json())
    .then(data=>setStore(data))

  },[])
  console.log(store)

  const nooftotalpage=Math.ceil(store.length/todoperpage)
  const pages=[...Array(nooftotalpage+1).keys()].slice(1)
  // console.log(pages)
  const lastindex=currentpage*todoperpage
  const firstindex=lastindex-todoperpage
  const visible=store.slice(firstindex,lastindex)

  function handlepre(){
    if(currentpage!==1){
      setcurrentpage(currentpage-1)
    }
  }
  function handlenex(){
    if(currentpage!==nooftotalpage){
      setcurrentpage(currentpage+1)
    }
  }
  return(
    <>
    <select onChange={(e)=>settodoperpage(e.target.value)}>
    <option value="10">10</option>
      <option value="20">20</option>
      <option value="50">50</option>
      <option value="60">60</option>
      </select>
    <table >
    <tr>
      <th>id</th>
      <th>task</th>
      </tr>
{visible.map((task)=>(
  <>
  
    <tr key={task.id}>
  <td>{task.id}</td>
  <td>{task.title}</td>
  </tr>
 
  </>
))}
 </table>
<span onClick={handlepre}>previous</span>
<p>{pages.map((page)=>(
  <>

  <span key={page}
   onClick={()=>setcurrentpage(page)}
   className={`${currentpage===page?"active":""}`}>
{`${page} |`}
  </span>
  </>
))}</p>
<span onClick={handlenex}>next</span>
    </>
  )
}