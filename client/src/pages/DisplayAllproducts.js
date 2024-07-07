import { useEffect, useState } from "react";
import Product from "../components/layout/Product";
const DisplayAllproducts = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const container = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "4% auto",
    };
 
    useEffect(() => {
        // API to fetch some dummy data
        fetch("https://dummyjson.com/products")
            .then((resp) => resp.json())
            .then((apiData) => {
                setData(apiData.products);
                console.log(apiData);
                setLoading(false);
            });
    }, []); // Dependency-array
 
    return (
        <div
            style={{ textAlign: "center" }}
        >
            <h1 style={{ color: "green" }}>
                All ProductList
            </h1>
            
            {loading ? (
                <h4>Loading Data...</h4>
            ) : (
                <div style={container}>
                    {data.map((item) => {
                        return (
                            <div className="row ">

<Product data={item} title={item.title} price = {item.price}  description = {item.description} image = {item.images} star = {"10"} />
        
                            </div>
               

                            
                        );
                    })}
                </div>
            )}
        </div>
    );
}
 
export default DisplayAllproducts;