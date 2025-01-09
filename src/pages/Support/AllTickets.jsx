import React, { useEffect, useState } from 'react'
import SupportService from '../../services/support.service'
import { Link } from 'react-router-dom';


const AllTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const data = await SupportService.getTickets();
                console.log(data);
                setTickets(data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <section className="">
            <div className="pt-5 pb-20">
                <div className=" bg-darkBrown/70  font-sairaCondensed tracking-widest text-customGrey py-10 px-10 border border-bronze container mx-auto">
                    <h1 className="text-3xl uppercase font-bold mb-4">All Queries</h1>
                    <div className="w-full  py-5  ">
                        <label className="font-bold text-lg">Filter Queries:</label>
                        <div className="flex justify-between py-5 gap-5">
                            <div className="flex gap-5">
                                <div >
                                    <label className="font-bold text-lg">Status:</label>
                                    <select className="bg-customDarkGrey border border-bronze text-white w-full p-2 rounded mr-2">
                                        <option value="all">All</option>
                                        <option value="pending">Pending</option>
                                        <option value="resolved">Resolved</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="font-bold text-lg">Category:</label>
                                    <select className="bg-customDarkGrey border border-bronze text-white w-full p-2 rounded mr-2">
                                        <option value="general">General</option>
                                        <option value="special">Special</option>
                                        <option value="immediate">Immediate</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="font-bold text-lg">Date Range:</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="date"
                                            className="border border-bronze bg-customDarkGrey p-2 rounded"
                                        />
                                        <span className="text-white">to</span>
                                        <input
                                            type="date"
                                            className="border border-bronze bg-customDarkGrey p-2 rounded"
                                        />
                                    </div>
                                </div>

                            </div>
                            <div className="flex gap-5 mt-5">
                                <button className="text-white font-bold tracking-widest bg-bronze py-2 px-6 rounded">
                                    Apply Filters
                                </button>
                                <button className="text-white font-bold tracking-widest bg-bronze py-2 px-6 rounded">
                                    Reset Filters
                                </button>

                            </div>
                        </div>


                    </div>
                    <div className="py-5 text-right">

                    </div>
                    <table className="min-w-full text-left  bg-black text-white">
                        <thead>
                            <tr className="h-12">
                                <th className="py-2 px-4 border-b border-bronze">Query ID</th>
                                <th className="py-2 px-4 border-b border-bronze">Customer Name</th>
                                <th className="py-2 px-4 border-b border-bronze">Category</th>
                                <th className="py-2 px-4 border-b border-bronze">Subject</th>
                                <th className="py-2 px-4 border-b border-bronze">Status</th>
                                <th className="py-2 px-4 border-b border-bronze">Date</th>
                                <th className="py-2 px-4 border-b border-bronze">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((ticket) => (
                                <tr key={ticket.id} className="bg-black hover:bg-customDarkGrey h-20 text-white">
                                    <td className="py-2 px-4 border-b border-bronze">{ticket.id}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{ticket.user.f_name} {ticket.user.l_name}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{ticket.category}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{ticket.subject}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{ticket.status}</td>
                                    <td className="py-2 px-4 border-b border-bronze">{new Date(ticket.createdAt).toLocaleDateString('en-GB')}</td>
                                    <td className="py-2 px-4 border-b space-x-3 border-bronze">
                                    <Link to={`/support/ticket/${ticket.id}`} className="border-bronze border hover:bg-bronze hover:text-white font-bold bg-transparent text-bronze px-2">View</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-center py-10">
                        <nav className="inline-flex space-x-2">
                            <button className="bg-bronze text-white py-2 px-4 rounded" disabled>
                                1
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                2
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                3
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                4
                            </button>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                5
                            </button>
                            <span className="text-white py-2 px-4">...</span>
                            <button className="bg-bronze text-white py-2 px-4 rounded">
                                10
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllTickets