function EventDemo() {
    let click = () => {
        alert("buuton clicked")
    }
    return (<button onClick={click}>Click ME</button>)
}

function Doubleclick() {
    return (<button onDoubleClick={() => {
        alert("buuton double  clicked")
    }
    }>click me</button>)
}
var isdisplay ;
function Que() {
    return (
        <>
            <Display isdisplay={false} />
        </>
    )
}
function Display({ isdisplay }) {
    return (<>
        {isdisplay && <h1>is displaying </h1>}
        {!isdisplay && <h1>is not  displaying </h1>}
    </>
    )
}
export { EventDemo, Doubleclick, Que }