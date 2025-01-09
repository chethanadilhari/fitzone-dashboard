import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (!user) {
            navigate('/login');
        }
    }, []);

    return (
        <div className="h-screen w-full">
            <SideBar />
            <div className="ml-64 h-full">
                <NavBar />
                <div className="pt-16 min-h-full" style={{ backgroundImage: "url('/images/dashboard-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;