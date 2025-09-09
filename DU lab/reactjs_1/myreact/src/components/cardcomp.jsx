export default function Attr() {
    let title = 'Nature ';
    return (
        <Sum title={title} />
    )

}
function Sum(props) {
    let price = 200000
    return (
        <Image title={props.title} price={price} />
    )
}
function Image(props) {
    let url = "https://media.istockphoto.com/id/477473902/photo/tea-plantations.jpg?s=1024x1024&w=is&k=20&c=j6-hEf67UlDpxtkxCiqMRy8EGmSFLCmsnvejzp5YYUA="
    return (
        <Text title={props.title} price={props.price} url={url} />
    )
}
function Text(props) {
    const item = [
        "Laptop", "Smartphone", "Tablet", "Smartwatch", "Television",
        "Refrigerator", "Washing Machine", "Microwave Oven", "Air Conditioner", "Printer",
        "Gaming Console", "Keyboard", "Mouse", "Power Bank", "Smart Home Hub"
    ]

    return (
        <>
            <Card title={props.title} price={props.price} url={props.url} item={item} />
        </>

    )
}
function Card(props) {
    return (
        <>

            <div class="card" style ={{ width : "18rem"}} >
                <img class="card-img-top" src={props.url} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">{props.price}</p>
                    <a href="#" class="btn btn-primary me-3">Buy</a>
                    <a href="#" class="btn btn-primary">Add to cart</a>

                </div>
                 <ul class="list-group list-group-flush">
                
                    {props.item.map((pr) =>{
                        return(<>
                            <li class="list-group-item ">{pr}</li>
                        </>)
                    })
                    }
            </ul>
            </div >

           

        </>
    )


}