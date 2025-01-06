import React, { useEffect, useState } from 'react';
import BronzeBtn from '../../components/common/BronzeBtn';
import MembershipService from '../../services/membership.service';

const Summary = () => {
    const [membership, setMembership] = useState(null);
    const [remainingDays, setRemainingDays] = useState(0);

    useEffect(() => {
        if (membership) {
            const days = calculateRemainingDays(membership.created_at);
            setRemainingDays(days);
        }
    }, [membership]);

    useEffect(() => {
        const fetchMembership = async () => {
            try {
                const data = await MembershipService.getCurrentMembership();
                setMembership(data);
            } catch (error) {
                console.error('Error fetching membership data:', error);
            }
        };

        fetchMembership();
    }, []);

    if (!membership) {
        return <div>Loading...</div>;
    }

    const calculateRemainingDays = (startDate) => {
        const currentDate = new Date();
        const endDate = new Date(startDate);
        endDate.setDate(endDate.getDate() + 30);
        const remainingTime = endDate - currentDate;
        return Math.max(0, Math.ceil(remainingTime / (1000 * 60 * 60 * 24)));
    };

    const cancelMembership = async () => {
        try {

            if (window.confirm('Are you sure you want to cancel your membership?')) {
                const res = await MembershipService.cancelMembership();
                    setMembership(res);
            }
            // Handle successful cancellation
        } catch (error) {
            console.error('Error cancelling membership:', error);
        }
    }

    return (
        <section>
            <div>
                <div className="border-2 max-w-xl py-5 font-sairaCondensed tracking-widest text-white text-xs px-5 border-bronze w-full mx-auto bg-darkBrown/90">
                    <h2 className="text-bronze font-koulen text-center py-2 text-2xl ">Membership Summary</h2>

                    <div className="flex flex-col gap-5 font-bold py-3 ">
                        <div className="flex justify-between">
                            <span className="">
                                Current Membership Plan : <span className="text-bronze"> {membership.package.name}</span>
                            </span>

                            <span className="">
                                Status : <span className="text-bronze border border-bronze text-md bg-customDarkGrey ml-2 px-10 py-1"> {membership.status}</span>
                            </span>
                        </div>
                        <span className="">
                            Start Date : <span className="text-bronze">{new Date(membership.created_at).toLocaleDateString('en-GB')}</span>
                        </span>
                        <span className="">
                            End Date : <span className="text-bronze">{new Date(new Date(membership.created_at).setDate(new Date(membership.created_at).getDate() + 30)).toLocaleDateString('en-GB')}</span>
                        </span>
                        <span className="">
                            Remaining Days : <span className="text-bronze"> {remainingDays} Days</span>
                        </span>
                    </div>
                    
                    <div className="flex gap-5 py-10 justify-between">
                        <BronzeBtn text="Renew Membership" disabled={remainingDays > 0} />
                        <div onClick={cancelMembership}><BronzeBtn text="Cancel" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;