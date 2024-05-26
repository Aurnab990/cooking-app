import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';

const Allitems = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <h1>All Items are here</h1>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Allitems;