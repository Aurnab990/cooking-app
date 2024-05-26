import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { AuthContext } from '../../AuthProvider/Authprovider';

const Navbar = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
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
                    {
                        user ?
                        <div className='flex gap-3'>
                            <Link to={"dashboard"}><a className="btn btn-warning">Dashboard</a></Link>
                            <div className="avatar">
                                <div className="w-10 pointer rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                    
                                </div>
                            </div>
                        </div>
                            :
                            <Link to={"login"}><a className="btn btn-warning">Login</a></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;