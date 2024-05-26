import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        
                <div className="drawer-side ">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 min-h-full bg-orange-300 text-base-content text-white  text-lg font-bold uppercase">
                        {/* Sidebar content here */}
                        <li><a>Add Items</a></li>
                        <Link to={"/allitems"}><li><a>All Items</a></li></Link>

                        <button className='w-full bg-red-400 p-2 rounded-xl mt-80'>Logout</button>
                    </ul>

                </div>
        
    );
};

export default Sidebar;