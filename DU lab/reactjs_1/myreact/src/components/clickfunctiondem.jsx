// click function handling
export default function Parent(){
    return(
        <Child name ="vishwraj" age={19}/>
    )
}

function Child(props){
    return(
        <>
        <h1> name: {props.name}</h1>
         <h1> name: {props.age}</h1>
        </>
    )
}