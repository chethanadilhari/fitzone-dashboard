import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuItem from '../common/MenuItem';
import AuthService from '../../services/auth.service';

const SideBar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await AuthService.logout();
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className="bg-darkBrown text-white max-w-screen-xl w-64 px-2 fixed h-full">
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
                <Link to="/"><MenuItem icon={"/images/overview-icon.png"} name={"Overview"} /></Link>
                <Link to="/membership"><MenuItem icon={"/images/membership-icon.png"} name={"Membership"} /></Link>
                <Link to="/classes"><MenuItem icon={"/images/classes-icon.png"} name={"Classes"} /></Link>
                <Link to="/trainers"><MenuItem icon={"/images/trainers-icon.png"} name={"Trainers"} /></Link>
                <Link to="/support"><MenuItem icon={"/images/support-icon.png"} name={"Support"} /></Link>
                <Link to="/billing"><MenuItem icon={"/images/payments-icon.png"} name={"Payments & Billings"} /></Link>
                <Link to="/blog"><MenuItem icon={"/images/resources-icon.png"} name={"Blog & Resources"} /></Link>
                <Link to="/settings"><MenuItem icon={"/images/settings-icon.png"} name={"Account Settings"} /></Link>
                <div onClick={handleLogout}><MenuItem icon={"/images/logout-icon.png"} name={"Logout"} /></div>
            </div>
        </div>
    );
};

export default SideBar;