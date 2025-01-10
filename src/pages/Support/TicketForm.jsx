import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SupportService from '../../services/support.service';

const TicketForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser =JSON.parse(localStorage.getItem('user'));
        if (storedUser){
            setName(`${storedUser.f_name} ${storedUser.l_name}`);
             setEmail(storedUser.email);
        }
    }, []);

    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');



    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic here
        const singleTicket = {
            subject,
            message
        };

        const response = await SupportService.createTicket(singleTicket);
        if (response.status === 201) {
            alert('Ticket created successfully');
            navigate('/support');
        }else{
            alert('Failed to create ticket');
        }
    };

    return (
        <section>
            <div className="px-20 bg-gradient-to-b py-20 from-black to-transparent">
                <div className="border-2 max-w-xl h-auto font-sairaCondensed tracking-widest text-white text-sm px-5 py-5 md:py-10 border-bronze mx-auto bg-black/80">
                    <h2 className="text-bronze font-koulen text-center py-2 text-2xl">Support Center</h2>
                    <p>We're here to help! Submit your query, and our team will get back to you shortly.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 py-10 px-5 font-sairaCondensed text-customGrey tracking-widest text-lg">
                        <label>
                            Subject:
                            <textarea
                                name="subject"
                                placeholder="Enter your subject here..."
                                className="block w-full mt-1 p-2 border-2 border-bronze bg-transparent"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </label>

                        <label>
                            Message:
                            <textarea
                                name="message"
                                placeholder="Enter your message here..."
                                className="block w-full mt-1 p-2 h-48 border-2 border-bronze bg-transparent"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </label>
                        <button type="submit" className="hover:border-white shadow-none duration-500 font-koulen text-base md:text-xl tracking-[0.2em] uppercase border border-bronze bg-bronze text-white px-3 md:px-10 py-2">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default TicketForm;