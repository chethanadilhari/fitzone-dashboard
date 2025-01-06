import React from 'react'

const Schedule = () => {
    const timeDuration = [
        "6.00AM - 8.00AM",
        "10.00AM - 12.00PM",
        "5.00PM- 7.00PM",
        "7.00PM - 9.00PM",
    ];
    
    const data = [
        [
            { className: "Yoga", trainer: "John Doe" },
            { className: "" },
            { className: "Zumba", trainer: "Mike Johnson" },
            { className: "" }
        ],
        [
            { className: "Cardio", trainer: "Chris Lee" },
            { className: "Strength", trainer: "Anna Brown" },
            { className: "" },
            { className: "" }
        ],
        [
            { className: "Crossfit", trainer: "Mark Taylor" },
            { className: "Powerlifting", trainer: "Emma White" },
            { className: "Aerobics", trainer: "Oliver Clark" },
            { className: "Bootcamp", trainer: "Ella Rodriguez" }
        ],
        [
            { className: "Fat Burning", trainer: "Liam Lewis" },
            { className: "Personal Training", trainer: "Grace Hall" },
            { className: "Group Fitness", trainer: "Ethan Allen" },
            { className: "Yoga", trainer: "Lily Young" }
        ],
        [
            { className: "Meditation", trainer: "Noah Scott" },
            { className: "Spin", trainer: "Mia King" },
            { className: "" },
            { className: "Stretching", trainer: "Ava Green" }
        ],
        [
            { className: "Swimming", trainer: "James Harris" },
            { className: "Running", trainer: "Isabella Adams" },
            { className: "Cycling", trainer: "Benjamin Nelson" },
            { className: "" }
        ],
        [
            { className: "Gymnastics", trainer: "Henry Carter" },
            { className: "Martial Arts", trainer: "Amelia Mitchell" },
            { className: "" },
            { className: "" }
        ]
    ];

  return (
    <section>
            <div className="w-full max-w-screen-2xl mx-auto font-sairaCondensed tracking-wide bg-transparent px-10 md:px-20 py-10">
                <h2 className="text-4xl uppercase text-bronze font-bold pb-10 text-center">
                    Class Time Table
                </h2>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-2 border-bronze text-lg text-white/85">
                        <thead>
                            <tr className="bg-black border-2 text-xl border-bronze">
                                <th className="px-4 py-2">Time</th>
                                <th className="px-4 py-2">Monday</th>
                                <th className="px-4 py-2">Tuesday</th>
                                <th className="px-4 py-2">Wednesday</th>
                                <th className="px-4 py-2">Thursday</th>
                                <th className="px-4 py-2">Friday</th>
                                <th className="px-4 py-2">Saturday</th>
                                <th className="px-4 py-2">Sunday</th>
                            </tr>
                        </thead>
                        <tbody>
                            {timeDuration.map((time, index) => (
                                <tr key={index} className="bg-black text-white/65 border-bronze">
                                    <td className="border text-bronze font-bold px-4 py-8 bg-black">{time}</td>
                                    {data.map((day, dayIndex) => (
                                        <td
                                            key={dayIndex}
                                            className={`border text-center px-4 hover:text-bronze ${
                                                (dayIndex + index) % 2 === 0 ? 'bg-customDarkGrey' : 'bg-black'
                                            }`}
                                        >
                                            <div className="font-bold">{day[index]?.className}</div>
                                            <div className="text-sm">{day[index]?.trainer}</div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Schedule