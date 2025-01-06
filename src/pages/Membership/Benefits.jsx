import React from 'react'


const Benefits = ({packageId}) => {
    const featuresData = [
        {
            packageId: 1,
            features: [
                "Access to Cardio & Strength Equipment",
                "5 Group Fitness Classes / Month(Zumba, Aerobics)",
                "Locker & Shower Facilities",
                "Free Fitness Assessment(1 Time)",
                "Access During Regular Hours",
            ]
        },

        {
            packageId: 2,
            features: [
                "Full Gym Access (All Equipment)",
                "Unlimited Group Fitness Classes",
                "2 Personal Training Sessions",
                "Customized Workout Plan",
                "Locker & Shower Facilities",
                "Priority Class Booking",
                "Nutrition Consultation (1 Time)"
            ]
        },

        {
            packageId: 3,
            features: [
                "24/7 Full Gym & Equipment Access",
                "Unlimited Group Fitness Classes",
                "Weekly Personal Training Sessions",
                "Custom Workout & Nutrition Plans",
                "Advanced Body Assessments",
                "VIP Locker, Towel, & Lounge Access",
                "Exclusive Access to CrossFit & Powerlifting"
            ]

        },

        {

        }
    ];

    const selectedPackage = featuresData.find(pkg => pkg.packageId === packageId);

    return (
        <section>
            <div>
                <div className="border-2  font-sairaCondensed tracking-widest text-white text-xs px-5 py-10 border-bronze w-full  bg-darkBrown/95">
                    <h2 className="text-customGrey font-koulen text-2xl text-center ">Benefits of current membership</h2>
                    {selectedPackage && (
                        <div key={selectedPackage.packageId}>
                            <ul className="grid gap-10 list-disk py-4 text-sm list-inside">
                                {selectedPackage.features.map((feature, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="mr-2">*</span> {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Benefits