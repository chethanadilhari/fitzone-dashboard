import React from 'react'

const History = () => {
    const features = [
        "Best for",
        "Gym Access",
        "Group Fitness Classes",
        "Personal Training Sessions",
        
    ];
    
    const data = [
        ["Beginners & casual fitness enthusiasts", "Cardio & strength equipment acess", "5 classes/month(Zumba, Aerobics)", "-", "-", "1 free assessment(one-time)", "Included", "-", "-", "Regular hours only"],
        ["Fitness enthusiasts & intermidiate Lifters", "Full gym access(All equipment)", "Unlimited group classes", "2 Sessions", "Customized workout plan", "-", "Included", "Priority booking", "1 Free session", "24/7 Access"],
        ["Advanced athletes & serious lifters", "24/7 Full gym & eqipment access", "Unlimited group classes", "Weekly personal training sessions", "Custom workout & nutrition plans", "Advanced body assessments", "VIP locker, towel & lounge access", "Exclusive access to Crossfit & Powerlifting", "Weekly consultations", "24/7 Access"]
    ];
    
return (
    <section>
    <div className="w-full max-w-screen-3xl h-auto tracking-wide px-10 md:px-20 py-10">
        <div className="overflow-x-auto">
        <table className="able-auto w-full border-2 border-bronze bg-darkBrown text-lg font-sairaCondensed text-white/85">
            <thead>
                <tr className="bg-da border-2 text-xl border-bronze">
                <th className="px-4 py-2">Membership ID</th>
                        <th className="px-4 py-2">Membership Plan</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Start Date</th>
                        <th className="px-4 py-2">End Date</th>
                </tr>
            </thead>
            <tbody>
                    {features.map((feature, index) => (
                        <tr key={index} className="bg-inherit odd:bg-black text-white/65 border-bronze">
                            <td className="border text-bronze font-bold px-4 py-2">{feature}</td>
                            <td className="border px-4 py-2">{data[0][index]}</td>
                            <td className="border px-4 py-2">{data[1][index]}</td>
                            <td className="border px-4 py-2">{data[2][index]}</td>
                            <td className="border px-4 py-2">{data[2][index]}</td>
                        </tr>
                    ))}
                </tbody>
        </table>
        </div>
    </div>
    </section>
);
  
}

export default History