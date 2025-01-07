import React, { useEffect, useState } from 'react';

const Support = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const storedUser =JSON.parse(localStorage.getItem('user'));
        if (storedUser){
            setName(`${storedUser.f_name} ${storedUser.l_name}`);
             setEmail(storedUser.email);
        }
    }, []);

    return (
        <section>
            <div className="px-20 bg-gradient-to-b py-20 from-black to-transparent">
                <div className="border-2  max-w-xl h-auto font-sairaCondensed tracking-widest text-white text-sm px-5 py-5  md:py-10 border-bronze mx-auto bg-black/80">
                    
                    <h2 className="text-bronze font-koulen text-center py-2 text-2xl">Support Center</h2>
                    <p>We're here to help! Submit your query, and our team will get back to you shortly.</p>
                    <form className="flex flex-col gap-5 py-10 px-5 font-sairaCondensed text-customGrey tracking-widest text-lg">
                        <input
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter your name"
                            className="block w-full mt-2 p-2 border-2 border-bronze bg-transparent"
                            disabled
                        />
                        <input
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Enter your email"
                            className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                            disabled
                        />
                        <label>
                            Query:
                            <textarea
                                name="query"
                                placeholder="Enter your query here..."
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                            />
                        </label>
                        <button className="hover:border-white shadow-none duration-500 font-koulen text-base md:text-xl tracking-[0.2em] uppercase border border-bronze bg-bronze text-white px-3 md:px-10 py-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Support;