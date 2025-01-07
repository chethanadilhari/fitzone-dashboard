import React, { useEffect, useState } from 'react';
import BronzeBtn from '../../components/common/BronzeBtn';
import MembershipService from '../../services/membership.service';

const Summary = ({setUserPackageId}) => {
    const [membership, setMembership] = useState(null);
    const [remainingDays, setRemainingDays] = useState(0);

    useEffect(() => {
        if (membership) {
            setUserPackageId(membership.package.id);
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
        <section className="px-4 sm:px-6 py-10 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="border-2 h-auto font-sairaCondensed tracking-widest text-white px-4 py-6 sm:px-10 sm:py-8 border-bronze w-full bg-black/90">
                    <h2 className="text-bronze font-koulen text-center pt-5 pb-10 text-4xl ">Membership Summary</h2>

                    <div className="flex flex-col gap-3 sm:gap-5 font-bold py-3">
                        <div className="flex flex-col sm:flex-row justify-between">
                            <span>
                                Current Membership Plan : <span className="text-bronze">{membership.package.name}</span>
                            </span>

                            <span className="mt-2 sm:mt-0">
                                Status : <span className="text-bronze border border-bronze bg-customDarkGrey ml-2 px-4 py-1 sm:px-10">{membership.status}</span>
                            </span>
                        </div>
                        <span>
                            Start Date : <span className="text-bronze">{new Date(membership.created_at).toLocaleDateString('en-GB')}</span>
                        </span>
                        <span>
                            End Date : <span className="text-bronze">{new Date(new Date(membership.created_at).setDate(new Date(membership.created_at).getDate() + 30)).toLocaleDateString('en-GB')}</span>
                        </span>
                        <span>
                            Remaining Days : <span className="text-bronze">{remainingDays} Days</span>
                        </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 py-6 sm:py-10 ">
                        <BronzeBtn text="Renew Membership" disabled={remainingDays > 0} />
                        <div onClick={cancelMembership}><BronzeBtn text="Cancel" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;