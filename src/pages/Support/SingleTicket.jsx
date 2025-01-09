import React from 'react';
import { useEffect, useState } from 'react';
import SupportService from '../../services/support.service';
import { useParams } from 'react-router-dom';

const SingleTicket = () => {
    const { id } = useParams();
    const ticketId = id;
    const [ticket, setTicket] = useState();
    const [reply, setReply] = useState();

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const data = await SupportService.getSingleTicket(ticketId);
                console.log(data);
                setTicket(data);
            } catch (error) {
                console.error('Error fetching tickets:', error);
            }
        };

        fetchTickets();
    }, []);

    const handleReply = async () => {
        const replyData = {
            message: reply,
        };

        try {
            await SupportService.replyTicket(ticketId, replyData);
            const updatedTicket = await SupportService.getSingleTicket(ticketId);
            setTicket(updatedTicket);
            setReply('');
        } catch (error) {
            console.error('Error replying to ticket:', error);
        }
    }

    const formatDate = (dateString) => {
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-GB', options);
    };

    if (!ticket) {
        return null;
    }

    return (
        <section className="">
            <div className="pt-5 pb-20">
                <div className=" bg-darkBrown/70  font-sairaCondensed tracking-widest text-customGrey py-10 px-10 border border-bronze container mx-auto">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold mb-4">{ticket.subject}</h1>
                        <div className="flex gap-5 mt-5">
                            <span className="text-white font-bold uppercase border border-bronze tracking-widest bg-customDarkGrey py-2 px-6 rounded">
                                In progress
                            </span>
                        </div>
                    </div>
                    <div className="w-full  py-5  ">
                        <p className="font-bold text-bronze text-lg">By: <span className="text-customGrey">{ticket.user.f_name} {ticket.user.l_name} </span></p>
                        <p className="font-bold text-bronze text-lg">Ticket ID: <span className="text-customGrey">{ticket.id}</span></p>
                        <p className="font-bold text-bronze text-lg">Date: <span className="text-customGrey">{formatDate(ticket.createdAt)}</span></p>
                        <p className="text-bronze text-lg font-bold">Message: <span className="text-white text-lg font-bold">{ticket.message}</span></p>
                    </div>
                    <div></div>
                    {ticket.replies.map((reply) => (
                        <div key={reply.id} className="bg-darkBrown border border-bronze p-4 mt-5">
                            <div className="text-sm text-customGrey mb-2">
                                <span className="font-bold text-bronze">{reply.user.f_name} {reply.user.l_name}</span> - <span>{formatDate(reply.createdAt)}</span>
                            </div>
                            <p className="text-customGrey px-5">
                                {reply.message}
                            </p>
                        </div>
                    ))}
                    <div className="bg-black border border-bronze p-4 mt-5">
                        <textarea
                            className="w-full p-2 bg-darkBrown border border-bronze text-customGrey"
                            rows="4"
                            placeholder="Type your reply here..."
                            value={reply}
                            onChange={(e) => setReply(e.target.value)}
                        />
                        <div className="flex gap-5 mt-3">
                            <button
                                className="text-white font-bold uppercase tracking-widest bg-bronze py-2 px-6 rounded"
                                onClick={handleReply}
                            >
                                Cancel
                            </button>
                            <button
                                className="text-white font-bold uppercase tracking-widest bg-bronze py-2 px-6 rounded"
                                onClick={handleReply}
                            >
                                Reply
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SingleTicket;
