import React from 'react'
import SocialMediaLinks from '../../components/common/SocialMediaLinks';

const YourTrainer = () => {
    return (
        <section>
            <div className="px-20 py-10 bg-gradient-to-b from-black to-transparent">
                <div className="">
                    <div className="text-center text-customGrey font-bold font-sairaCondensed tracking-widest py-10">
                        <h1 className="font-koulen text-bronze text-4xl">Your trainer details</h1>

                    </div>
                    <div className="flex border border-customGrey bg-black/60 font-sairaCondensed tracking-widest text-lg text-customGrey items-center">
                        <div className="w-1/2 px-4 py-2">
                            <img src="/images/trainer-1.jpg" alt="Trainer" className=" w-full h-auto rounded-lg shadow-lg" />
                        </div>
                        <div className="w-1/2 px-10 py-5">
                            <h3 className="text-3xl text-bronze font-semibold">Mark Bennett</h3>
                            <p className="text-xl font-bold py-4">Cardio Training</p>
                            <p className="text-base " >Mark Bennett, a seasoned cardio trainer with over a decade of professional experience, is committed to guiding individuals toward achieving their fitness goals with precision and expertise. His deep understanding of cardiovascular health, endurance training, and energy optimization has helped countless clients transform their lifestyles and improve their overall well-being.<br /><br />

                            </p>
                            <blockquote className="italic text-sm  text-bronze">"Fitness is not just about reaching your goals; it's about enjoying the journey and becoming the best version of yourself. My mission is to guide, inspire, and challenge you to push past your limits while having fun along the way.Let’s make every step count!"

                                "</blockquote>
                            <div className="grid gap-4 justify-center py-10">
                                <div >
                                    <button className="border border-bronze text-bronze px-4 py-2 rounded">Contact your trainer</button>
                                    </div>
                                    <div className="">
                                        <SocialMediaLinks />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
           
        </section >
    )
}
export default YourTrainer;
