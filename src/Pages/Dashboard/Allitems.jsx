import React, { useEffect, useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Allitems = () => {
    const[products , setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/items")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center mt-4 ">
                    <h1 className='font-bold text-xl'>All Items are here</h1>
                    {
                        products.map(product=>
                            <div>
                                <li className='grid grid-cols-5 gap-2 p-10'>
                                    <h2 className='font-semibold'>{product.name}</h2>
                                    <p>{product.simple_description}</p>
                                    <h4 className='text-red-500 font-semibold'>${product.price}</h4>
                                    
                                    <button className='btn btn-success text-white'>EDIT</button>
                                    <button className='btn btn-warning text-white'>DELETE</button>

                                    
                                </li>
                            </div>
                        )
                    }
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Allitems;