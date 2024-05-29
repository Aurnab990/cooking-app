import React from 'react';

const Product = ({ item }) => {
    const { name, simple_description, price, image } = item;
    return (
        <div className=''>
            <div className="card w-60 bg-base-100 shadow-xl">
                <figure><img src={image} alt="recepies" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{simple_description}</p>
                    <div className="card-actions justify-end">
                        <div className='flex gap-5'>
                        <p className='text-red-500 font-bold text-xl'>${price}</p>
                        <button className="btn btn-primary ">Buy Now</button>

                        </div>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Product;