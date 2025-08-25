export default function Products() {
    const Products = [
        {
            img: "https://www.bing.com/th/id/OIP.h0PnJVWRWPsBvbsrTe7TpQHaE8?w=244&h=211&c=8&rs=1&qlt=70&o=7&cb=thws4&dpr=1.3&pid=3.1&rm=3",
            title: "Running Shoes",
            price: 2499
        },
        {
            img: "https://www.bing.com/th/id/OIP.8ZzqgJHq3ZkZKZzvKZzKZgHaHa?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Wireless Headphones",
            price: 1799
        },
        {
            img: "https://www.bing.com/th/id/OIP.3fJ3kJHkJHkJHkJHkJHkJgHaHa?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Smart Watch",
            price: 3499
        },
        {
            img: "https://www.bing.com/th/id/OIP.XYZ123XYZ123XYZ123XYZ123?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Bluetooth Speaker",
            price: 1299
        },
        {
            img: "https://www.bing.com/th/id/OIP.ABC456ABC456ABC456ABC456?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Gaming Mouse",
            price: 899
        },
        {
            img: "https://www.bing.com/th/id/OIP.DEF789DEF789DEF789DEF789?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Laptop Backpack",
            price: 1599
        },
        {
            img: "https://www.bing.com/th/id/OIP.GHI012GHI012GHI012GHI012?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Fitness Tracker",
            price: 2199
        },
        {
            img: "https://www.bing.com/th/id/OIP.JKL345JKL345JKL345JKL345?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Portable Charger",
            price: 999
        },
        {
            img: "https://www.bing.com/th/id/OIP.MNO678MNO678MNO678MNO678?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "LED Desk Lamp",
            price: 649
        },
        {
            img: "https://www.bing.com/th/id/OIP.PQR901PQR901PQR901PQR901?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Noise Cancelling Earbuds",
            price: 2899
        },
        {
            img: "https://www.bing.com/th/id/OIP.STU234STU234STU234STU234?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Digital Camera",
            price: 4999
        },
        {
            img: "https://www.bing.com/th/id/OIP.VWX567VWX567VWX567VWX567?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Tripod Stand",
            price: 799
        },
        {
            img: "https://www.bing.com/th/id/OIP.YZA890YZA890YZA890YZA890?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Wireless Keyboard",
            price: 1399
        },
        {
            img: "https://www.bing.com/th/id/OIP.BCD123BCD123BCD123BCD123?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Laptop Cooling Pad",
            price: 749
        },
        {
            img: "https://www.bing.com/th/id/OIP.EFG456EFG456EFG456EFG456?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Smartphone Gimbal",
            price: 2999
        },
        {
            img: "https://www.bing.com/th/id/OIP.HIJ789HIJ789HIJ789HIJ789?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Action Camera",
            price: 5999
        },
        {
            img: "https://www.bing.com/th/id/OIP.KLM012KLM012KLM012KLM012?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Wireless Router",
            price: 1899
        },
        {
            img: "https://www.bing.com/th/id/OIP.NOP345NOP345NOP345NOP345?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "USB Hub",
            price: 499
        },
        {
            img: "https://www.bing.com/th/id/OIP.QRS678QRS678QRS678QRS678?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "External Hard Drive",
            price: 3499
        },
        {
            img: "https://www.bing.com/th/id/OIP.TUV901TUV901TUV901TUV901?w=200&h=200&c=8&rs=1&pid=3.1&rm=3",
            title: "Laptop Stand",
            price: 1199
        }
    ];



    return (
        <>
            <div class="container">
                <div class="row">
                    {Products.map((product, index) => (
                        <div class="col-3" key={index}>
                            <div class="card">
                                <img src={product.img} class="card-img-top" alt="not found" />
                                <div class="card-body">
                                    <h5 class="card-title">{product.title}</h5>
                                    <h1 class="card-text">₹{product.price}</h1>
                                    <a href="#" class="btn btn-primary me-3">Buy</a>
                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}