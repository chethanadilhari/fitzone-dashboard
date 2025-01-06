import React, { useEffect, useState } from 'react';
import md5 from 'md5';

const NavBar = () => {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '' });

    function getGravatarUrl(email, size = 200) {
        // Process the email
        const processedEmail = email.trim().toLowerCase();
      
        // Generate MD5 hash
        const hash = md5(processedEmail);
      
        // Construct the Gravatar URL
        return `https://www.gravatar.com/avatar/${hash}?s=${size}`;
      }

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUser({
                firstName: storedUser.f_name,
                lastName: storedUser.l_name,
                email: storedUser.email
            });
        }
    }, []);

    return (
        <div className="bg-black text-white py-2 border-b fixed border-customGrey w-[calc(100%-256px)] z-10">
            <div className="flex justify-between items-center px-5">
                <div className="relative w-full max-w-xl">
                    <input type="text" placeholder="Search here..." className="bg-transparent border rounded-md font-sairaCondensed text-sm tracking-widest w-full border-bronze p-2 pl-5 pr-10" />
                    <img src="/images/search-icon.png" alt="search" className="h-4 absolute top-1/2 right-3 transform -translate-y-1/2" />
                </div>

                <div className="flex gap-5">
                    <img src="/images/notification-icon.png" alt="notification" className="h-6" />
                    <img src="/images/message-icon.png" alt="message" className="h-6" />
                </div>

                <div className="flex gap-2 items-center">
                    <img src={getGravatarUrl(user.email)} alt="user" className="h-14 w-14 border-2 border-bronze rounded-full" />
                    <span className="font-sairaCondensed text-customGrey text-lg tracking-widest">{`${user.firstName} ${user.lastName}`}</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;