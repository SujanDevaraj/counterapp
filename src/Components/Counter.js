import React,{useState} from "react"

const Counter=()=>{

let [count,setCount]=useState(0)

function increase() {
    setCount(count+1)
    
}

return(
    <div >
        <h1>{count}</h1>
        <div className="btns">
        <button onClick={increase}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    </div>
)

}
export default Counter;