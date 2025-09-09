import { useEffect, useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [visible ,setVisible] = useState(false);
    const [time,setTime]  = useState(0);
    useEffect(()=>{
        console.log("with emppty array")
    }
    )
    useEffect(()=>{
        console.log("useeffected")
    })
    useEffect(()=>{
        setTimeout(()=>{
            setTime(time+1);
        },1000)
    } , [time])
    return(
        <>
        <div>counter={count}</div>
        <button onClick={()=>setCount(count+1)}>click</button>
        <button onClick={()=>setCount(!visible)}>click
        {visible?"show":"hide"}
        </button>
        <h1>{visible&&<h1>helllo world</h1>}</h1>
        <h1>timer:{time}</h1>
        </>
    )
}
export default Counter