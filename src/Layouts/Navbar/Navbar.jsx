import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu =
        [
            <li><a>Home</a></li>,
            <li><a>Recepies</a></li>,
            <li><a>About</a></li>,
            <li><a>Contact</a></li>,
        ]

    return (
        <div className='sticky-fixed'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">

                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <a className=" text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg ">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to={"login"}><a className="btn btn-warning">Login</a></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;