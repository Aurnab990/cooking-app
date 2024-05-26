import React from 'react';
import Navbar from '../../Layouts/Navbar/Navbar';
import Header from '../../Layouts/Header/Header';
import Products from '../../Components/Products/Products';

const Home = () => {
    return (
        <div className='pl-32 pr-32'>
            <Navbar></Navbar>
            <Header></Header>
            <h1 className='text-4xl -mt-10 font-semibold text-red-500 text-center'>Best Recepies</h1>
            <Products></Products>
        </div>
    );
};

export default Home;