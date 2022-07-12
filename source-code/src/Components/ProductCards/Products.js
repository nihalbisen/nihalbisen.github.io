import { useEffect, useState } from "react";
import ProductCards from "./ProductCards";

export default function Products(){
    const [initialDataCat, setDataCat] = useState([]);
    
    
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setDataCat(data));
    }, []);
    // console.log(initialDataCat)
    return(
        <>
            <ProductCards data={initialDataCat} />
            
        </>
    );
    
}