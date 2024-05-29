import React, { useContext } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { AuthContext } from '../../AuthProvider/Authprovider';

const Dashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center mt-5">
                    <h1>Welcome {user?.email} </h1>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Dashboard;