import React, {useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import MenuItem from '../common/MenuItem';
import AuthService from '../../services/auth.service';

const MemberMenu = [
    {
        name: 'Overview',
        icon: '/images/overview-icon.png',
        url: '/'
    },
    {
        name: 'Membership',
        icon: '/images/membership-icon.png',
        url: '/membership'
    },
    {
        name: 'Classes',
        icon: '/images/classes-icon.png',
        url: '/classes'
    },
    {
        name: 'Trainers',
        icon: '/images/trainers-icon.png',
        url: '/trainers'
    },
    {
        name: 'Support',
        icon: '/images/support-icon.png',
        url: '/support'
    },
    {
        name: 'Payments & Billings',
        icon: '/images/payments-icon.png',
        url: '/billing'
    },
    {
        name: 'Blog & Resources',
        icon: '/images/resources-icon.png',
        url: 'http://localhost:5000/blog'
    },
    {
        name: 'Account Settings',
        icon: '/images/settings-icon.png',
        url: '/settings'
    }
];

const StaffMenu = [
    {
        name: 'Blog & Resources',
        icon: '/images/resources-icon.png',
        url: '/blog'
    },
    {
        name: 'Support',
        icon: '/images/support-icon.png',
        url: '/support'
    },
    {
        name: 'Account Settings',
        icon: '/images/settings-icon.png',
        url: '/settings'
    }
];

const SideBar = () => {
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = async () => {
        await AuthService.logout();
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="bg-black text-white max-w-screen-xl w-64 px-2 fixed h-full">
            <div>
                <div className="flex items-center justify-center gap-2 pt-5 pb-3">
                    <div>
                        <img src="/images/logo.png" alt="logo" className="h-6" />
                    </div>
                    <div>
                        <img src="/images/text-logo.png" alt="logo" className="h-5" />
                    </div>
                </div>
            </div>

            <div className="w-full max-w-screen-xl mx-auto grid gap-2 justify-between py-4">
                {user.role === "MEMBER" && MemberMenu.map((item, index) => (
                    <Link to={item.url} key={index}>
                        <MenuItem icon={item.icon} name={item.name} />
                    </Link>
                ))}
                {((user.role === "STAFF") || user.role === "ADMIN") && StaffMenu.map((item, index) => (
                    <Link to={item.url} key={index}>
                        <MenuItem icon={item.icon} name={item.name} />
                    </Link>
                ))}
                <div onClick={handleLogout}><MenuItem icon={"/images/logout-icon.png"} name={"Logout"} /></div>
            </div>
        </div>
    );
};

export default SideBar;