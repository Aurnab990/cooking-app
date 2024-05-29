import React, { useEffect, useState } from 'react';
import Product from '../Pages/Products/Product';

const Items = () => {
    const[items, setItems] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/items")
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className="grid grid-cols-3 gap-5 mt-10 mb-5">
            {
                items.map(item=>
                <Product 
                item={item}
                
                >
                </Product>
                
                )
            }
        </div>
    );
};

export default Items;