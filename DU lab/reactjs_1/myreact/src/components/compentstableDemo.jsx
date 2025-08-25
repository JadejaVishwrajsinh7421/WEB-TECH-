export default function A() {
    let name = 'vishwrajsinh';
    return(
         <B name={name} />
    )
   
}
function B(props) {
    let age =12
    return(
            <C name={props.name}  age = {age} />
    )
}
function C(props) {
        return(
            <>
            <p> name from parent is {props.name}</p>
            <p>age is : {props.age}</p>
             </>
            )
   

}